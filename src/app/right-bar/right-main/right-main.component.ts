import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { RoomService } from 'src/app/service/room/room.service';
import { Room } from 'src/app/models/chat/entity/room';
import { User } from 'src/app/models/chat/entity/user';

@Component({
  selector: 'app-right-main',
  templateUrl: './right-main.component.html',
  styleUrls: ['./right-main.component.css']
})
export class RightMainComponent implements OnInit {

  room: Room;
  user: User;
  roomId: number;

  constructor(private router: ActivatedRoute, private userService: UserService, private roomService: RoomService) {
    this.room = new Room();
    router.params.subscribe(params => {
      this.roomId = params['roomId'];
      roomService.getById(this.roomId).subscribe(response => {
        this.room = response;
        // userService.getById(this.room.author_id).subscribe((user) => this.user = user);
      });
    })
  }
  ngOnInit() {

  }


  RoomDetector() {
    console.log(this.roomId)
    alert(this.roomId)
  }

}
