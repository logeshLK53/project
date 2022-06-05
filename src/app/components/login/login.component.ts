import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //faLock = faLock;
  image : string = "pics/black.jpg";
  loginForm=new FormGroup({
    role:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),

  });
  constructor(private auth:AuthService,private router: Router) { }

  ngOnInit(): void {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['../admin']);
    }
  }
  onSubmit():void{
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          if(result.role==1)
          {
          console.log(result);
          this.router.navigate(['../admin']);
          }
          else if(result.role==2)
          {
            console.log(result);
          this.router.navigate(['../customers']);
          }
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }

  }
}