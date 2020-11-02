import {Component} from '@angular/core'

@Component({
    selector: 'programs',
    templateUrl: './programs.component.html'
})
export class ProgramsComponent{
    courses_list = [
        {
            "course_id": "COR101",
            "course_name": "B Tech Chemical Engineering",
            "department_name": "Faculty of Engineering",
            "start_date": "10/01/2021",
            "course_fee": 1240849
        },
        {
            "course_id": "COR102",
            "course_name": "B Tech Civil Engineering",
            "department_name": "Faculty of Engineering",
            "start_date": "10/01/2021",
            "course_fee": 1240149
        },
        {
            "course_id": "COR103",
            "course_name": "B Tech Computer Science & Engineering",
            "department_name": "Faculty of Engineering",
            "start_date": "08/01/2021",
            "course_fee": 1245149
        },
        {
            "course_id": "COR104",
            "course_name": "B Tech Computer and Communication Engineering",
            "department_name": "Faculty of Engineering",
            "start_date": "08/01/2021",
            "course_fee": 1245149
        },
        {
            "course_id": "COR105",
            "course_name": "B Tech Data Science & Engineering",
            "department_name": "Faculty of Engineering",
            "start_date": "10/01/2021",
            "course_fee": 1245849
        },
        {
            "course_id": "COR106",
            "course_name": "B Tech Electrical & Electronics Engineering",
            "department_name": "Faculty of Engineering",
            "start_date": "10/01/2021",
            "course_fee": 1240549
        },
        {
            "course_id": "COR107",
            "course_name": "B Tech Electronics & Communication Engineering",
            "department_name": "Faculty of Engineering",
            "start_date": "08/01/2021",
            "course_fee": 1245149
        },
        {
            "course_id": "COR108",
            "course_name": "B Tech Information Technology",
            "department_name": "Faculty of Engineering",
            "start_date": "18/01/2021",
            "course_fee": 1245049
        }
    ]
}