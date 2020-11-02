import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  triggerNameDisplay(){
    let student_name = localStorage.getItem('student_name');
    if(student_name){
      document.getElementById("welcome_text").innerHTML = "Welcome, " + JSON.stringify(student_name).replace(/['"]+/g, '');
    }
  }

  ngOnInit(): void {

    this.triggerNameDisplay();

  }
  //title = 'Rockford-University-UI-Design';

  
}