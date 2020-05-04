import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../model/employee";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private baseURL;

  employee: Employee;

  employees: Employee[];

  constructor(private http: HttpClient) {
    this.baseURL = "http://localhost:8080/employees";
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  public saveEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseURL, employee);
  }

  public getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseURL + "/" + employeeId);
  }

  public deleteEmployee(employeeId: number) {
    return this.http.delete(this.baseURL + "/" + employeeId);
  }
}
