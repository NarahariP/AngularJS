import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/service/employee.service";
import { Employee } from "src/app/model/employee";
import { EmployeeListComponent } from "../employee-list/employee-list.component";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  reserForm() {
    this.employeeService.employee = {
      employeeId: null,
      employeeName: "",
      employeePosition: "",
      employeeCode: "",
      employeeMobile: ""
    };
  }

  ngOnInit() {
    this.reserForm();
  }

  onSubmit() {
    this.employeeService.saveEmployee(this.employeeService.employee).subscribe(
      data => {
        this.reserForm();
      },
      error => {
        console.log(error);
      }
    );
  }
}
