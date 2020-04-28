import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BadgesService } from '../../services/badges/badges.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title;
  @Input() hideLive;
  notificationiBadges = 3;
  constructor(private router: Router, private badgesService: BadgesService) {
    this.notificationiBadges = badgesService.notificationiBadges;
   }

  ngOnInit() {

  }

  navigateTo(url) {
    this.router.navigate(['teacher', url]);
  }

  logout() {
    this.router.navigate(['']);
  }

  clearNotificationBadges() {
    this.notificationiBadges = null;
    this.badgesService.notificationiBadges = null;
  }
}
