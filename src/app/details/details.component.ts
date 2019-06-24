import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // From services
  @Input() ticketType
  @Input() ageGroup
  @Input() seatType
  @Input() depatureTime
  @Input() returnTime
  @Input() numTicket
  @Input() place

  // To form
  title
  fullName
  idNum
  phone
  radio
  emName
  emRelation
  emPhone
  emEmail

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      console.log(params)

      this.ticketType = params.ticketType
      console.log(this.ticketType),

      this.ageGroup = params.ageGroup
      console.log(this.ageGroup),

      this.seatType = params.seatType
      console.log(this.seatType),

      this.depatureTime = params.depatureTime 
      console.log(this.depatureTime),

      this.returnTime = params.returnTime
      console.log(this.returnTime),

      this.numTicket = params.numTicket
      console.log(this.numTicket),

      this.place = params.place
      console.log(this.place)    
    })
  }
  onBack(){
    this.router.navigateByUrl("services")
  }
  onBook(){
    this.router.navigate(['/form'], { queryParams:{title: this.title, fullName: this.fullName, idNum: this.idNum, phone: this.phone, 
      radio: this.radio, emName: this.emName, emRelation: this.emRelation, emPhone: this.emPhone, emEmail: this.emEmail}})
      
      
  }

}
