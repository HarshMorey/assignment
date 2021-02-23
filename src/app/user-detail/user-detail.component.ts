import {  
  Component,  
  OnInit,  
  Inject  
} from '@angular/core';  
import {  
  UserService  
} from '../service/user.service';  
import {  
  MatDialogRef,  
  MAT_DIALOG_DATA  
} from '@angular/material/dialog';  
import {  
  UserComponent  
} from '../user/user.component';  
import {  
  UserDetail  
} from '../user';  
@Component({  
  selector: 'app-user-detail',  
  templateUrl: './user-detail.component.html',  
  styleUrls: ['./user-detail.component.css']  
})  
export class UserDetailComponent implements OnInit {  
  UserId: number;  
  UserName: string;  
  EmailId: string;  
  Gender: string;  
  Address: string;  
  MobileNo: string;  
  PinCode: string;  
  UserDetail: UserDetail;  
  constructor(private service: UserService, private dialogRef: MatDialogRef < UserComponent > , @Inject(MAT_DIALOG_DATA) data) {  
      this.UserId = data.userId  
  }  
  ngOnInit(): void {  
      this.service.getUsers().subscribe(result => {  
          this.UserDetail = result.find(a => a.UserId == this.UserId);  
          this.UserName = this.UserDetail.UserName;  
          this.EmailId = this.UserDetail.EmailId;  
          this.Gender = this.UserDetail.Gender;  
          this.Address = this.UserDetail.Address;  
          this.MobileNo = this.UserDetail.MobileNo;  
          this.PinCode = this.UserDetail.PinCode;  
      })  
  }  
  close() {  
      this.dialogRef.close();  
  }  
} 