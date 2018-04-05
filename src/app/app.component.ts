import { Component } from '@angular/core';
import {FormsModule, FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Module';
  email;
  formdata;
  onClickSubmit(data){
    this.email=data.emailid;
    alert("email is :"+data.emailid);
  }
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
    });
  }

}
