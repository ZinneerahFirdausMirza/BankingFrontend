import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public sessionStorage = sessionStorage;
  public session=sessionStorage.getItem('customer_id');
}
