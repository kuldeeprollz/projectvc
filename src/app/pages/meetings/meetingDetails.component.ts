import { Component, OnInit } from "@angular/core";

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// import { MatButtonModule } from '@angular/material/button';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import {AccordionModule} from "ngx-accordion";

@Component({
  selector: "app-dashboard",
  templateUrl: "meetingDetails.component.html",
  styleUrls: ["meetingDetails.component.scss"]
})
export class MeetingDetailsComponent implements OnInit {

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