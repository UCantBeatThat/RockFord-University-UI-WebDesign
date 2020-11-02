import {Component} from '@angular/core'

@Component({
    selector: 'faculty',
    templateUrl: './faculty.component.html'
})
export class FacultyComponent{
    faculty_list = [
        {
            "faculty_id": "FC103",
            "faculty_name": "Aashita Judson",
            "faculty_img_url": "assets/faculty_thumbnail/Aashita Judson_200x200.jpg",
            "faculty_position": "Head of the Department",
            "faculty_dept": "Faculty of Engineering",
            "faculty_contact": "dummy3@horizon.edu"
        },
        {
            "faculty_id": "FC101",
            "faculty_name": "Aanya Choudhary",
            "faculty_img_url": "assets/faculty_thumbnail/Aanya_Choudhary.jpg",
            "faculty_position": "Assistant Professor",
            "faculty_dept": "Faculty of Engineering",
            "faculty_contact": "dummy1@horizon.edu"
        },
        {
            "faculty_id": "FC102",
            "faculty_name": "Aditya Sinha",
            "faculty_img_url": "assets/faculty_thumbnail/Aditya Sinha.jpg",
            "faculty_position": "Assistant Professor",
            "faculty_dept": "Faculty of Engineering",
            "faculty_contact": "dummy2@horizon.edu"
        },
        {
            "faculty_id": "FC104",
            "faculty_name": "Aditi Priya",
            "faculty_img_url": "assets/faculty_thumbnail/Aditi Priya Profile Picture.jpg",
            "faculty_position": "Associate Professor",
            "faculty_dept": "Faculty of Engineering",
            "faculty_contact": "dummy4@horizon.edu"
        },
        {
            "faculty_id": "FC105",
            "faculty_name": "Aivinor AMS",
            "faculty_img_url": "assets/faculty_thumbnail/Aivinor AMS profile picture.jpg",
            "faculty_position": "Assistant Professor",
            "faculty_dept": "Faculty of Engineering",
            "faculty_contact": "dummy5@horizon.edu"
        },
        {
            "faculty_id": "FC106",
            "faculty_name": "Dr. Abhijeet Singh",
            "faculty_img_url": "assets/faculty_thumbnail/Dr. abhijeet-singh.png",
            "faculty_position": "Professor",
            "faculty_dept": "Faculty of Engineering",
            "faculty_contact": "dummy6@horizon.edu"
        }
    ]

    onFacultyClick($event, faculty: any){
        console.log(faculty);
        var faculty_details_div = document.getElementById("faculty_details");
        var details_string = "<h4>Faculty Name: " + faculty.faculty_name + "</h4><h4>Faculty Position: " + faculty.faculty_position + "</h4><h4>Faculty Department: " + faculty.faculty_dept + "</h4><h4>Faculty Contact: " + faculty.faculty_contact + "</h4>";

        faculty_details_div.innerHTML = details_string;
    }
}