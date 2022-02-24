import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { JwtAuthenticationService } from 'src/app/services/security/jwt-authentication.service';
import { LoginComponent } from 'src/app/views/pages/login/login.component';
import { UserRegistrationModalComponent } from 'src/app/views/pages/user-registration-modal/user-registration-modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;
  modalRef: MDBModalRef;

  constructor(
    public jwtAuthenticationService: JwtAuthenticationService,
    private modalService: MDBModalService,
  ) {
    this.clicked = this.clicked === undefined ? false : true;
  }  

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    console.log("this.jwtAuthenticationService.username: "+this.jwtAuthenticationService.userName);
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  doSignUp() {
    this.modalRef = this.modalService.show(UserRegistrationModalComponent, '');
  }
  
  doSignIn() {
    this.modalRef = this.modalService.show(LoginComponent, '');
  }

  doLogout() {
    this.jwtAuthenticationService.logout();
  }
 

}
