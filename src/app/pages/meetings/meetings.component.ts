
import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";

import { Location } from "@angular/common";
import Chart from 'chart.js';
import { Router } from "@angular/router";
declare interface RouteInfo {
    path: string;
    title: string;
    rtlTitle: string;
    icon: string;
    class: string;
  }

export const ROUTES: RouteInfo[] = [
    {
      path: "/meetingDetails",
      title: "Review meetings Solid Waste management",
      rtlTitle: "لوحة القيادة",
      icon: "icon-istanbul",
      class: ""
    }]
@Component({
  selector: "app-dashboard",
  templateUrl: "meetings.component.html"
})
export class MeetingsComponent implements OnInit {

    menuItems: any[];

    constructor(
        private router: Router
    ) {
       
    }
  
    ngOnInit() {
//this.router.navigate(['/meetingDetails']);
      this.menuItems = ROUTES.filter(menuItem => menuItem);
   
    }

    isMobileMenu() {
      if (window.innerWidth > 991) {
        return false;
      }
      return true;
    }
  }