import { Component, OnInit } from '@angular/core';
import { SalesPerson } from 'src/app/model/sales-person';

@Component({
  selector: 'app-sales-person-list',
  //templateUrl: './sales-person-list.component.html',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  constructor() {}

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Sam', 'Sung', 'samsung@hari.com', 50000),
    new SalesPerson('One', 'Plus', 'oneplus@hari.com', 40000),
    new SalesPerson('Xio', 'Mi', 'xiomi@hari.com', 65000),
    new SalesPerson('Moto', 'Rola', 'motorola@hari.com', 70000),
    new SalesPerson('Dum', 'My', 'dummy@hari.com', 38000),
  ];

  ngOnInit(): void {}
}
