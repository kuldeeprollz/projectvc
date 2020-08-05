import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
    selector: "app-footer",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
    
  })
  export class LoginComponent implements OnInit {
    users$: any;
    test: Date = new Date();
   
    model: any = {};
    loading = false;
    returnUrl: string;
    alertMessage: string

  
    constructor(
      private router: Router,
      private data: DataService,
      private http: HttpClient
    ) {
      
    }
  
    ngOnInit() {
this.model.email="kuldeep@rollzindia.com"
this.model.password="kuldeep"

if(localStorage.getItem("userAuthId") ==null)
{
console.log("Not Logged in")

}
else 
{
  this.router.navigate(['/home']);
}

     // this.router.navigate(['/home']);
    }
 
  

  login(f: NgForm) {
    console.log(f.value.email);
    if (!f.value.email) {
        return;
    } else if (!f.value.password) {
        return;
    }
    this.loading = true;
    let data = {
        email: f.value.email,
        password: f.value.password
    }
    

    // this.http.post('http://localhost:3000/api/auth/signin', data).subscribe(result => {
      
    //   var response :any
    //       response = result;
          
        
    //       console.log(response.Status)
    //       if (response.Status=200) {
            
    //               localStorage.setItem("authData", JSON.stringify(response.result))
                  
    //                   this.router.navigate(['/home']);
       
    //       } else {
    //           //this.loading = true;
    //           this.alertMessage="hello"
    //         //  this.alertMessage = "Invalid User Name Or Password"
    //           console.log(response)
    //       }
    //   });

    this.data.login(data).subscribe(
      data => {this.users$ = data;
               
        console.log("Data--->",this.users$.user.id);
    
    console.log("Response -------->",JSON.stringify(data))
    var userid=JSON.parse(JSON.stringify(data)).user.id

      localStorage.setItem("userAuthData", JSON.stringify(data))
      localStorage.setItem("userAuthEmail", JSON.stringify(this.users$.user.email))
      localStorage.setItem("userAuthId", JSON.stringify(this.users$.user.id))
      localStorage.setItem("userAuthName", JSON.stringify(this.users$.user.name))
      localStorage.setItem("userAuthImgUrl", JSON.stringify(this.users$.user.img_url))
      
     
    
      //var authData = JSON.parse(localStorage.getItem('userAuthData'))
  
 
console.log("from Local Storage--->",localStorage.getItem('userId'))
      this.router.navigate(['/home'])
    }

    
    )

  

    // this.http.post('http://localhost:3000/api/auth/signin', data).subscribe(result => {
      
    // var response :any
    //     response = result;
        
      
    //     console.log(response.Status)
    //     if (response.Status=200) {
          
    //             localStorage.setItem("authData", JSON.stringify(response.result))
                
    //                 this.router.navigate(['/home']);
     
    //     } else {
    //         //this.loading = true;
    //         this.alertMessage="hello"
    //       //  this.alertMessage = "Invalid User Name Or Password"
    //         console.log(response)
    //     }
    // });


}




  }
  