import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  ticketType
  ageGroup
  seatType
  depatureTime
  returnTime
  numTicket
  place

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.router.navigate(['/details'], { queryParams:{ticketType: this.ticketType, ageGroup: this.ageGroup, seatType: this.seatType, 
                                        depatureTime: this.depatureTime, returnTime: this.returnTime, numTicket: this.numTicket, place: this.place}})
  }
}
