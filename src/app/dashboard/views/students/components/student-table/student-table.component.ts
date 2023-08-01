import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {

  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];

  @Input()
  dataSource: Student[] = [];

  @Output()
  deleteStudent = new EventEmitter<Student>();

  @Output()
  editStudent = new EventEmitter<Student>();

  onDeleteStudent(StudentToDelete: Student): void{
    this.deleteStudent.emit(StudentToDelete);
  }

  onEditStudent(StudentEdit: Student): void {
    this.editStudent.emit(StudentEdit);
  }

}
