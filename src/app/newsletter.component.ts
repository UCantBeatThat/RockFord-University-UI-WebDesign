import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'newsletter',
    templateUrl: './newsletter.component.html'
})
export class NewsletterComponent implements OnInit{

    ngOnInit(): void {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var currDate = new Date();
        var firstDay = currDate.getDate() - currDate.getDay();
        var lastDay = firstDay+6;

        var month = monthNames[currDate.getMonth()];
        var year = currDate.getFullYear();

        document.getElementById("current_week").innerHTML = month + " " + firstDay + "-" + lastDay + ", " + year;
    }
    
    

}