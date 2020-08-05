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
        this.loadRoom(this.meeting_id)
      }

      //this.model={} 
    });
   
  }
ngOnInit() {
   

  this.getRooms("Home Room");
  this.getRooms("Room");
    //this.loadInstantRoom()

  
    //this.model.txtMeetingURL="https://beta.mulakaat.in/b/"+meeting_id
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

 
 window.location.href='https://beta.mulakaat.in/bigbluebutton/api/join?fullName=kuldeep&join_via_html5=true&meetingID=ffc16144c4c6bc2fcaccd8e13edb72952c3429e2&password=vrMIPGdQdpCz&userID=gl-wsjxmdifkcli&checksum=f467a8dba2c640a52e1529c1dcfc0ad3ae4d59fb'
 

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



loadRoom(meeting_id:string)
{
  
var i = null;
	for (i = 0; this.roomList.length > i; i += 1) {
		if (this.roomList[i].meeting_id === meeting_id) {
      
      this.isSelectOptJoinMeeting=false

   this.model.txtMeetingURL="http://mulakaat.in/#/join/"+this.roomList[i].meeting_id
   this.model.roomDescription = this.roomList[i].agenda
  this.model.roomTitle= this.roomList[i].title
  this.model.accessCode=this.roomList[i].access_code
  this.id=this.roomList[i].id
  this.meeting_id=this.roomList[i].meeting_id

  
    if(this.roomList[i].access_code=="")
    { this.model.accessCodeRequired=false    } else { this.model.accessCodeRequired=true }
//console.log("access Code---------------->" , this.model.accessCode)
 
  if (this.id =="") {   this.lblCreate="Create" } else { this.lblCreate = "Update"}
  //console.log("------------->", this.lblCreate);  
			return true;
		}
	}
	
	return false;
};




deleteRoom(fCreateRoom: NgForm)
{

let data = {
 title: fCreateRoom.value.roomTitle,
  description: fCreateRoom.value.roomDescription ,
  type: 'Room',
   owner:localStorage.getItem("userAuthId"),
    accessCode:fCreateRoom.value.accessCode,
     settings:'{}',
     action:"Delete",
     meeting_id: this.meeting_id
  } 

  console.log("Request Data--->",data)

  this.data.ct(data).subscribe(
  data => {//this.users$ = data;
  console.log(data);
   this.modalService.dismissAll()  
  alert("room Created")
  this.getRooms("Room")
  //this.router.navigate(['/home'])
});

this.getRooms("Room")
}


loadInstantRoom()
{
  console.log("instant Meeting---->",this.instantRoomList)
  this.isSelectOptJoinMeeting=false
  this.model.txtMeetingURL="https://mulakaat.in/#/join/"+this.instantRoomList[0].meeting_id
  this.model.roomDescription = this.instantRoomList[0].agenda
  this.model.roomTitle= this.instantRoomList[0].title
  this.model.accessCode=this.instantRoomList[0].access_code
  this.id=this.instantRoomList[0].id
  this.meeting_id=this.instantRoomList[0].meeting_id

  
    if(this.instantRoomList[0].access_code=="")
    { this.model.accessCodeRequired=false    } else { this.model.accessCodeRequired=true }
//console.log("access Code---------------->" , this.model.accessCode)
 
  if (this.id =="") {   this.lblCreate="Create" } else { this.lblCreate = "Update"}
  //console.log("------------->", this.lblCreate);  
			return true;
		}
  


createRoom(fCreateRoom: NgForm)
{

console.log('access code--->',fCreateRoom.value.accessCode)

let data = {
 title: fCreateRoom.value.roomTitle,
  description: fCreateRoom.value.roomDescription ,
  type: 'Room',
   owner:localStorage.getItem("userAuthId"),
    accessCode: fCreateRoom.value.accessCode,
    settings:'{}',
     action:this.lblCreate,
     meeting_id: this.meeting_id
     } 

  console.log("Request Data--->",data)

  this.data.ct(data).subscribe(
  data => {//this.users$ = data;
  console.log(data);
  
 
   this.getRooms("Room")
   this.getRooms("Home Room")
   alert("room Created/Updated")
   this.loadRoom(this.meeting_id)
   this.modalService.dismissAll()  
  
  //this.router.navigate(['/home'])
});



}

async joinMeeting(){


  let roomData = {    
    meeting_id:this.model.txtMeetingURL.substring(this.model.txtMeetingURL.length-11)
         }
       this.data.getRoom(roomData).subscribe(
   data => {//this.users$ = data;
var result:any=data
  this.joinRoomDetails=result.result
 console.log(this.joinRoomDetails.length)

if(this.joinRoomDetails.length==0)
{
alert("No Meeting Found")
}
else
{
 this.joinTitle=this.joinRoomDetails[0].title
 this.joinOwnerName=this.joinRoomDetails[0].username
 this.joinOwner=this.joinRoomDetails[0].owner
 this.joinIsAccessCode=this.joinRoomDetails[0].accesscode_required

 if (this.joinRoomDetails[0].accesscode_required==true) {  this.joinIsAccessCode=false } else { this.joinIsAccessCode=true}

 this.join()

}
        
   })












  //  const meeting_id = this.model.txtMeetingURL.substring(this.model.txtMeetingURL.length-11)
  //  console.log(meeting_id)
  //  let data={
  //    meetingId:meeting_id,
  //    userId: localStorage.getItem("userAuthId"),
  //    userName:""
  //  }
   
  //  this.data.getJoinRoomURL(data).subscribe(
  //    data => {//this.users$ = data;
     
  //    const aa:any=  data;
     
  //  const url:any =aa.result
  //  //console.log (url)
  //   window.location.href= url
     //this.router.navigate(['/home'])
 






}






async join()

{

 console.log("user_id",localStorage.getItem("authUserId"))
 console.log("joinOwner",this.joinOwner)

  if( localStorage.getItem("userAuthId")!= this.joinOwner)
  {

  


  var accesscode
   if (this.model.accessCodeJoin==undefined) { accesscode="" } else { accesscode=this.model.accessCodeJoin }
  // {
  
  
    let accessdata={
      meetingId: this.model.txtMeetingURL.substring(this.model.txtMeetingURL.length-11),
      accessCode: accesscode
    }
  console.log(accessdata)
  
   this.data.validateAccessCode(accessdata).subscribe(
       data => {//this.users$ = data;
        var result:any=data
        
        if(result.result[0].isvalid_accesscode==false)
        {
          alert("Invalid Access Code")
          return
           }

           else
           {var userId
            if(localStorage.getItem("userAuthId")==null) { userId="" } else {userId=localStorage.getItem("userAuthId")}
            let data={
              meetingId:this.model.txtMeetingURL.substring(this.model.txtMeetingURL.length-11),
              userId: userId,
              userName:localStorage.getItem("userAuthName")
        
             }
  
    
             this.data.getJoinRoomURL(data).subscribe(
              data => {//this.users$ = data;
              const aa:any=  data;
              
            const url:any =aa.result
            //console.log (url)
             window.location.href= url
              //this.router.navigate(['/home'])
            });


           }
          })
      } 
      
      
        else
        {
          var userId
          if(localStorage.getItem("userAuthId")==null) { userId="" } else {userId=localStorage.getItem("userAuthId")}
          let data={
            meetingId:this.model.txtMeetingURL.substring(this.model.txtMeetingURL.length-11),
            userId: userId,
            userName:localStorage.getItem("userAuthName")
      
           }

  
           this.data.getJoinRoomURL(data).subscribe(
            data => {//this.users$ = data;
            const aa:any=  data;
            
          const url:any =aa.result
          //console.log (url)
           window.location.href= url
            //this.router.navigate(['/home'])
          });
  
  
        }
       // this.roomDetails=result.result
       
      
  
    
        return this.joinRoomDetails
  
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
  let data = {
       
     owner:localStorage.getItem("userAuthId"),
     type:roomType
     
    }

  this.data.getRoomList(data).subscribe(
    data => {//this.users$ = data;
var result:any=data
console.log('Room Type---->' , roomType)
if(roomType=="Home Room")
{
  this.instantRoomList=result.result
      
     console.log("Instant Meeting    ------>", this.instantRoomList) 
    
}
else 
{
  
  this.roomList=result.result
}
    
    })
    

}




}


