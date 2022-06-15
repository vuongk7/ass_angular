import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user: IUser={
  password:"",
  email:""
}
  constructor(
    private userService: UserService,
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSignup() {
    console.log('submitted!')
    console.log(this.user);
    this.userService.signup(this.user).subscribe(data => {

      // chuyển hướng router
      this.router.navigateByUrl('/signin');
    })
  
  }
}
