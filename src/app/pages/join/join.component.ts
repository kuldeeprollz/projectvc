import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Component({
  selector: "app-home",
  templateUrl: "join.component.html",
  styleUrls: ["join.component.scss"]
})
export class JoinComponent implements OnInit {
  
  isAccessCode=false
  title:string="Not Available"
  owner=0
  user_id="0"
  id=""
ownerName:string="Not Available"

  model: any = {};
  private roomDetails:any=""
  private hideAccessCode=false
  constructor(private activatedRoute: ActivatedRoute, 
    private http: HttpClient,
    private data: DataService,
    private router: Router,
  
   ) { this.activatedRoute.params
  .subscribe(params=>console.log(params)) }
    
   



ngOnInit(){


  if(localStorage.getItem("userAuthId") !=null)
  {
    this.router.navigate(['/home']);
  }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  
    let data = {    
      meeting_id:this.id
           }
//          this.data.getRoom(data).subscribe(
//      data => {//this.users$ = data;
//  var result:any=data
//     this.roomDetails=result.result
   //console.log(this.roomDetails.length)

  if(this.roomDetails.length==0)
  {
alert("No Meeting Found")
  }
  else
  {


   this.title=this.roomDetails[0].title
   this.ownerName=this.roomDetails[0].username
   this.owner=this.roomDetails[0].owner
   this.isAccessCode=this.roomDetails[0].accesscode_required

   if (this.roomDetails[0].accesscode_required==true) {  this.isAccessCode=false } else { this.isAccessCode=true}
   console.log('Access Code Required--->',this.isAccessCode)

   if (localStorage.getItem("userAuthId") !="")
   {
     this.user_id=localStorage.getItem("userAuthId")

   } else
   {
     this.user_id="0"
   }

  }
          
     }
  


async join(f:NgForm){
 console.log(this.id)
var accesscode
 if (f.value.ac==undefined) { accesscode="" } else { accesscode=f.value.ac }
// {


  let accessdata={
    meetingId: this.id,
    accessCode: accesscode
  }


}} 



