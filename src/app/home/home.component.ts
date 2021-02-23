import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Home{
  constructor(
    public id:number,
    public login:string,
   public type:string,
    public site_admin:boolean,
    public avatar_url:string,
  ){

  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homes !:Home[];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(){
    this.httpClient.get<any>("https://api.github.com/users").subscribe(
      response => {
        console.log(response);
        this.homes=response;
      }
    );
  }
}
