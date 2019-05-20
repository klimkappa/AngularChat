import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
export interface Status {
  statusValue: string;
  statusViewValue: string;
}

export interface DialogData {
  selectedStatus:string;
}
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


status: string;
status_photo: string = 'https://cdn-images-1.medium.com/max/1600/1*vEaQadgbGxhRVfjxz0lBEQ.png';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserInfoDialog, {
      data: {status : this.status}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.status = result;
     
      
      this.status_photo = (this.status == 'Online') ? 'https://cdn-images-1.medium.com/max/1600/1*vEaQadgbGxhRVfjxz0lBEQ.png':
      (this.status == 'Offline') ? 'https://cdn1.iconfinder.com/data/icons/fs-icons-ubuntu-by-franksouza-/512/skype_contact_offline.png' :
      (this.status == 'Busy') ? 'https://cdn-images-1.medium.com/max/1600/1*09w_ss-CrhueAVz2l_oL9g.png' :
      'https://cdn-images-1.medium.com/max/1600/1*0MVaTvvY6QogU3a_onFjzA.png'

    });

    
    
  }
  
}

@Component({
  selector: 'user-info-dialog',
  templateUrl: 'user-info-dialog.html',
  styleUrls: ['./user-info-dialog.css']
})
export class UserInfoDialog {
  
  selectedStatus: string;
  statuses: string[] = ['Online', 'Offline', 'Busy', 'Away'];
  
  constructor(
    public dialogRef: MatDialogRef<UserInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    @Input()
    status: string;

  onNoClick(): void {
    this.dialogRef.close();
    this.selectedStatus = status;

  }

}
