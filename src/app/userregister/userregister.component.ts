import { Component } from '@angular/core';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  name=""
  address=""
  pincode=""
  email=""
  phone=""
  username=""
  password=""
  cpassword=""

  readValues=()=>{
    let data= {"name":this.name, "address":this.address, "pincode":this.pincode, "email":this.email, "phone":this.phone, "username":this.username, "password":this.password}
    console.log(data)
  }

}
