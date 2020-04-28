import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import AgoraRTC, { IAgoraRTCClient, ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';
import { MatDialog } from '@angular/material/dialog';
import { StreamOptionsComponent } from '../../dialogs/stream-options/stream-options.component';
import { MessageComponent } from '../../dialogs/message/message.component';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-live-class',
  templateUrl: './live-class.component.html',
  styleUrls: ['./live-class.component.scss']
})
export class LiveClassComponent implements AfterViewInit, OnDestroy {

  client: IAgoraRTCClient;
  localAudioTrack: IMicrophoneAudioTrack;
  localVideoTrack: ICameraVideoTrack;
  micOn = false;
  cameraOn = false;
  cameraLoading = false;
  micLoading = false;
  uid;
  remoteStreams = [];
  options = environment.options;
  initialized = false;
  commenting = false;
  comment;
  comments: any[] = [];
  constructor(public dialog: MatDialog, private zone: NgZone) {
  }

  async ngAfterViewInit() {
    this.openDialog().subscribe(async result => {
      await this.createClient();
      this.listenToRemoteStreams();
      if (result && result.cameraOn) {
        await this.startCamera();
      }
      if (result && result.micOn) {
        await this.startMic();
      }
      this.initialized = true;
      this.openMessageDialog();
    });
  }


  async createClient() {
    this.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
    this.uid = await this.client.join(this.options.appId, this.options.channel, this.options.token, null);
  }

  listenToRemoteStreams() {
    this.client.remoteUsers.forEach((user) => {
      this.remoteStreams.push(user.uid.toString());
      setTimeout(async () => {
        await this.client.subscribe(user);
        user.videoTrack.play(user.uid.toString(), { fit: 'contain' });
      }, 500);
    });
    this.client.on('user-published', async (user, mediaType) => {
      if (user.uid === this.uid) { return; }
      await this.client.subscribe(user);
      if (mediaType === 'video' || mediaType === 'all') {
        const remoteVideoTrack = user.videoTrack;
        this.remoteStreams.push(`remote${user.uid.toString()}`);
        setTimeout(() => {
          remoteVideoTrack.play(`remote${user.uid.toString()}`, { fit: 'contain' });
        }, 500);
      }
      if (mediaType === 'audio' || mediaType === 'all') {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
      }
    });

    this.client.on('user-left', (user, mediaType) => {
      console.log(user);
      this.remoteStreams.filter(s => s !== `remote${user.uid.toString()}`);
    });

    this.client.on('user-unpublished', (user, mediaType) => {
      if (mediaType === 'video' || mediaType === 'all') {
        this.remoteStreams = this.remoteStreams.filter(s => s !== `remote${user.uid.toString()}`);
      }
    });
  }

  async startCamera() {
    if (this.cameraLoading || this.cameraOn) { return; }
    this.cameraLoading = true;
    try {
      this.localVideoTrack = await AgoraRTC.createCameraVideoTrack({
        encoderConfig: '240p_1',
      });
      this.localVideoTrack.play('agora_local', { fit: 'contain' });
      await this.client.publish([this.localVideoTrack]).then(() => {
        console.log('video published');
      });
      this.cameraOn = true;
    } catch (e) {
      console.log(e);
    } finally {
      this.cameraLoading = false;
    }
  }

  async startMic() {
    if (this.micLoading || this.micOn) { return; }
    this.micLoading = true;
    try {
      this.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      await this.client.publish([this.localAudioTrack]);
      this.micOn = true;
    } catch (e) {
      console.log(e);
    } finally {
      this.micLoading = false;
    }
  }

  async stopCamera() {
    if (this.cameraLoading || !this.cameraOn) { return; }
    this.cameraLoading = true;
    try {
      await this.client.unpublish([this.localVideoTrack]);
      this.localVideoTrack.stop();
      this.localVideoTrack.close();
      this.cameraOn = false;
    } catch (e) {
      console.log(e);
    } finally {
      this.cameraLoading = false;
    }
  }

  async stopMic() {
    if (this.micLoading || !this.micOn) { return; }
    this.micLoading = true;
    try {
      await this.client.unpublish([this.localAudioTrack]);
      this.localAudioTrack.stop();
      this.localAudioTrack.close();
      this.micOn = false;
    } catch (e) {
      console.log(e);
    } finally {
      this.micLoading = false;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(StreamOptionsComponent, {
      width: '320px',
      data: {}
    });
    return dialogRef.afterClosed();
  }

  openMessageDialog() {
    this.dialog.open(MessageComponent, {
      width: '320px',
    });
  }

  addComment() {
    this.commenting = ! this.commenting;
  }

  sendComment() {
    const date = new Date();
    const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const m = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
    const d = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    if (this.comment && this.comment.trim()) {
      this.comments.unshift(
        {
          id: Math.random().toString(),
          date: `${d}/${m}/${y}`,
          content: this.comment.trim(),
          name: 'Ahmed Hassan',
          job: 'Student',
          img: 'https://dmg5c1valy4me.cloudfront.net/wp-content/uploads/2018/11/07171648/ter-ovanesyan_dima_web.jpg',
          comments: [],
        },
      );
      this.comment = '';
      this.commenting = false;
    }
  }

  ngOnDestroy() {
    try {
      if (this.cameraOn) {
        this.localVideoTrack.close();
      }
      if (this.micOn) {
        this.localAudioTrack.close();
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.client.leave();
    }
  }
}
