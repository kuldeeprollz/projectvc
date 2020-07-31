import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: "app-footer",
    templateUrl: "notificationDetails.component.html",
    
  })
  export class NotificationDetailsComponent implements OnInit {
    test: Date = new Date();
    closeResult: string;
    constructor(private modalService: NgbModal) {}
    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
       
      }
    ngOnInit() {}
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
     
      }
    
  }