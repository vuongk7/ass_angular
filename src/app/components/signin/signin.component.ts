import { Component, OnInit } from '@angular/core';
import { IUser } from './../../models/User';
import { UserService } from './../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
  onSubmit(){
    this.userService.signin(this.user).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(this.user));
      alert(' ĐĂng nhập thành công')
      this.router.navigateByUrl('/');
    })
}
}
