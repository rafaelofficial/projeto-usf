import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-room',
  templateUrl: './date-room.component.html',
  styleUrls: ['./date-room.component.css']
})
export class DateRoomComponent implements OnInit {
  datas: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
