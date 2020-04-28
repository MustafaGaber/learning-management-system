import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stream-options',
  templateUrl: './stream-options.component.html',
  styleUrls: ['./stream-options.component.scss']
})
export class StreamOptionsComponent implements OnInit {

  cameraOn = true;
  micOn = true;
  constructor(private dialogRef: MatDialogRef<StreamOptionsComponent>) { }

  ngOnInit() {
  }

  submit() {
    this.dialogRef.close({micOn: this.micOn, cameraOn: this.cameraOn});
  }
}
