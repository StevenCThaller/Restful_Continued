import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService) {}
  title = 'Restful Task API';
  tasks = [];
  
  ngOnInit(){
    this.getTasksFromService();
  }
  
  
  getTasksFromService(){
    let observable = this._httpService.getTasks();

    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      for(var i = 0; i < data.length; i++) {
        this.tasks.push(data[i]);
      }
      console.log(this.tasks);
      console.log(this.tasks[0]);
    });
  }
}
