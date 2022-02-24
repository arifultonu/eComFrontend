import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from 'src/app/services/security/jwt-authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private jwtAuthenticationService: JwtAuthenticationService,

  ) { }

  ngOnInit(): void {
    
  }

}
