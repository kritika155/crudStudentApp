import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  data={username:"",password:""};
  student:{rollno:number,firstName:string,lastName:string,class:number,dob:number,phone:string,email:string,teacher:string,subject:string,address:string};
  
  students=[
    {rollno:1,firstName:'Kritika',lastName:'Roy',class:3,dob:'12/04/1993',phone:'09038187690',email:'roykritika00@gmail.com',teacher:'Mrs.Asha Dixit',subject:'English',address:'Bangalore'},
    {rollno:2,firstName:'Ashish',lastName:'Roy',class:3,dob:'11/04/1993',phone:'09038187691',email:'royashish00@gmail.com',teacher:'Mrs.Asha Dixit',subject:'English',address:'Bangalore'},
    {rollno:3,firstName:'Priyanka',lastName:'Roy',class:4,dob:'16/04/1993',phone:'09038187692',email:'roypriyanka00@gmail.com',teacher:'Mrs.Asha Dixit',subject:'English',address:'Bangalore'},
    {rollno:4,firstName:'Jagrit',lastName:'Roy',class:5,dob:'17/04/1993',phone:'09038187693',email:'royjagrit00@gmail.com',teacher:'Mrs.Asha Dixit',subject:'English',address:'Bangalore'}
  ];
  login(){
    if (this.data.username===this.data.password) {
       this.router.navigate(['/student']); 
       
    } 
    
  }
  constructor(private router :Router) { 
    this.student = {
      rollno:0,
      firstName:'',
      lastName:'',
      class:0,
      dob:0,
      phone:'',
      email:'',
      teacher:'',
      subject:'',
      address:''
    };
  }
 
  getStudents(){
    if(localStorage.getItem('students')!=null)
    {
      this.students = JSON.parse(localStorage.getItem('students'));
    }
  	return this.students;
  }
 
  addStudent(student){
  	student.rollno = this.students.length+1;
    	this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
}
updateStudent(student){
  var update=false;
  this.student=student;
  for(var i=0;i<this.students.length;i++){
    if(this.student.rollno == this.students[i].rollno){
      update=true;
      this.students[i] = student;
      localStorage.setItem('students', JSON.stringify(this.students));
      break;
    }
  }
  if(!update)
    {
      this.student.rollno = this.students.length+1;
      this.students.push(student);
      localStorage.setItem('students', JSON.stringify(this.students));
    }
}
// onSelect(student)
//   {
//     this.student=student;
//   }
deleteStudent(student){

    var List=[];
    this.student=student;
    for(var i=0;i<this.students.length;i++)
    {
         if(this.student.rollno!=(this.students[i].rollno))
        {
               List.push(this.students[i]);
        }
    }
    this.students=List;
    localStorage.setItem('students', JSON.stringify(this.students));
  }
  
}
