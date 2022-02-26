import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrls: ['./order-received.component.scss']
})
export class OrderReceivedComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  gotoHomePage(){
this.router.navigate(['home-page'])
  }


}
