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

 /* avaliable: Status[] = [
    {statusValue: 'online-0', statusViewValue: 'https://static.thenounproject.com/png/1144840-200.png'},
    {statusValue: 'offline-1', statusViewValue: 'https://static.thenounproject.com/png/1144840-200.png'},
    {statusValue: 'busy-2', statusViewValue: 'https://static.thenounproject.com/png/1144840-200.png'}
  ];
 */

status: string;
status_photo: string = 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-user-online-icon.png';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserInfoDialog, {
      data: {status : this.status}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.status = result;
     
      
      this.status_photo = (this.status == 'Online') ? 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-user-online-icon.png':
      (this.status == 'Offline') ? 'https://cdn4.iconfinder.com/data/icons/fugue/icon_shadowless/status-offline.png' :
      (this.status == 'Busy') ? 'https://cdn4.iconfinder.com/data/icons/fugue/icon_shadowless/status-busy.png' :
      'https://cdn1.iconfinder.com/data/icons/streamline-interface/60/cell-8-0-480.png'

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
