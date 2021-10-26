import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  member:any;

  constructor(private http:HttpClient,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
//Reference : https://www.freakyjolly.com/angular-access-parameters-in-url-using-activatedroute/
    let username= this.activatedRoute.snapshot.params.username;
    this.getUserDetails(username);
  }

  getUserDetails(username:string)
  {
    this.http.get('https://localhost:5001/api/myusers/' + username).subscribe(
      response=>
      {
        this.member=response;
      },
      error=>
      {
        console.log(error);
      }
    );
  }

}
