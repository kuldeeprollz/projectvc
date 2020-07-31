import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { NgForm } from '@angular/forms';
import{DOCUMENT} from "@angular/common"
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ComponentsModule } from 'src/app/components/components.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {

  joinIsAccessCode=false
  joinTitle:string="Not Available"
  joinOwner="0"
  user_id="0"
  joinId=""

joinOwnerName:string="Not Available"

  private joinRoomDetails:any=""
  private joinHideAccessCode=false





  title = 'Home';
  id="";
  
  model: any = {};
  roomList:any;
  instantRoomList:any;
  dissableAccessCodeButton=true;
  chkAccessCodeReq: false;
  accesscode="";  
  lblCreate = "Create";
  isSelectOptJoinMeeting=true;
  meeting_id="";
  closeResult: string;
  room:any= {
    id: "",
    roomid: "",
    
    title: "",
    description: "",
    accessCode: "",
    owenrId: ""
     }
  
  constructor(
    private router:Router,
    private modalService: NgbModal,
    private http: HttpClient,
    private data: DataService,) {}
    

  open(content,option) {
if (option=="Create")
{
    this.model.txtMeetingURL=""
    this.model.roomDescription = ""
    this.model.roomTitle= ""
    this.model.accessCode=""
    this.id=""
    this.meeting_id=""
    this.lblCreate="Create"
  }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
     
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      if (this.meeting_id=="")
      {
      this.loadInstantRoom()
      } else 
      {
        this.loadRoom(this.meeting_id,"xyz")
      }

      //this.model={} 
    });
   
  }
ngOnInit() {
   

  this.getRooms("Home Room");
  this.getRooms("Room");
    //this.loadInstantRoom()

    this.selectOptJoinMeeting()
  }


   selectOptJoinMeeting()
  {
       


       this.model.txtMeetingURL=""
  this.model.roomDescription = "Paste URL to Join Meeting"
  this.model.roomTitle= "Join Meeting"
  this.model.accessCode=""
  this.id=""
  this.meeting_id=""
  this.isSelectOptJoinMeeting=true

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
 

  }

  startMeeting()
{

 
 
 

}



makeString(length) {
  let outString: string = '';
  let inOptions: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  for (let i = 0; i < length; i++) {

    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

  }
  this.accesscode=outString;
  this.model.accessCode=outString

console.log(this.accesscode)
}



loadRoom(meeting_id:string,roomName:string)
{
  

      
      this.isSelectOptJoinMeeting=false

      this.model.roomTitle=roomName
   this.model.txtMeetingURL="http://MyMeetings.in/#/join/"+meeting_id
   this.model.roomDescription="join Room -"+roomName
  
};





loadInstantRoom()
{
  this.isSelectOptJoinMeeting=false
  this.model.accessCodeRequired=true
  this.isSelectOptJoinMeeting=false

  this.model.roomTitle="Instant Room"
this.model.txtMeetingURL="http://MyMeetings.in/#/join/INST-AVB-123"
this.model.roomDescription="join Instant Room"

  
  
		}
  


createRoom(fCreateRoom: NgForm)
{

   alert("room Created/Updated")

   this.modalService.dismissAll()  
  
  //this.router.navigate(['/home'])




}

async joinMeeting(){


 
  
 






}







    



fnAccessCodeRequired(e){
 // let accessCodeControl = this.fCreateRoom.get('name')
 if (this.accesscode=="" && e.target.checked==true )
 {
   this.makeString(6)
   
 }
  this.chkAccessCodeReq= e.target.checked;
  console.log(this.chkAccessCodeReq)



  if(this.chkAccessCodeReq==false)
  {
    this.dissableAccessCodeButton = true;
    this.accesscode=""
    this.model.accessCode=""

  }
  else 
  {
   
    this.dissableAccessCodeButton = false;
  }
}




async getRooms(roomType){
}




}


