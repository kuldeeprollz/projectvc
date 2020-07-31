import {  OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationCancel } from '@angular/router';

import { Component,Inject } from "@angular/core";


//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
 
  constructor(
    private router: Router,
  
){
  // Set translations

 
}


title = "Mulakaat";


ngOnInit() 
{
    this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
            // set page progress bar loading to start on NavigationStart event router
           // this.loader.start();
        }
        if (event instanceof RouteConfigLoadStart) {
            //this.loader.increment(35);
        }
        if (event instanceof RouteConfigLoadEnd) {
            //this.loader.increment(75);
        }
        if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
       
            // set page progress bar loading to end on NavigationEnd event router
            //this.loader.complete();
        }
    });
}

}