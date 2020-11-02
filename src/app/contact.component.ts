import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
    title = 'My first AGM project';
    lat = 13.353505;
    lng = 74.784936;
}
