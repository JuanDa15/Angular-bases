import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: [`
    li{
      list-style:none;
    }
  `]
})
export class ProtectedComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
