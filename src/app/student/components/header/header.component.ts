import { Component, OnInit, OnDestroy, NgZone, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BadgesService } from '../../services/badges/badges.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() title;
  @Input() hideLive;
  notificationiBadges = 3;
  constructor(private router: Router, private badgesService: BadgesService) {
    this.notificationiBadges = badgesService.notificationiBadges;
   }

  ngOnInit() {

  }

  navigateTo(url) {
    this.router.navigate(['student', url]);
  }

  ngOnDestroy() {

  }

  clearNotificationBadges() {
    this.notificationiBadges = null;
    this.badgesService.notificationiBadges = null;
  }

  logout() {
    this.router.navigate(['']);
  }
}
