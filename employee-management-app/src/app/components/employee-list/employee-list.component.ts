import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/service/employee.service";
import { Employee } from "src/app/model/employee";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.findAll().subscribe(
      data => {
        this.employeeService.employees = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  populateForm(employee: Employee) {
    this.employeeService.employee = Object.assign({}, employee);
  }

  deleteEmp(empId: number) {
    if (confirm("Are you sure to delete this record!")) {
      this.employeeService.deleteEmployee(empId).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
}
