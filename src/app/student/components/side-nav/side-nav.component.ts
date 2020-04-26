import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() url;

  constructor(public router: Router) { }

  ngOnInit() {
    /*this.router.events.subscribe((val: any) => {
      if (val && val.url) {
        this.url = val.url.slice(1);
        console.log(val);
      }
    });*/
  }

  navigateTo(url) {
    this.router.navigateByUrl(url);
  }
}
