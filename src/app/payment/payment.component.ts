import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() title
  @Input() fullName
  @Input() phone
  @Input() idNum
  firstName
  lastName
  province
  card
  zipCode
  paymentType

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.title = params.title
      console.log(this.title),

      this.fullName = params.fullName
      console.log(this.fullName),

      this.phone = params.phone
      console.log(this.phone),
    
      this.idNum = params.idNum
      console.log(this.idNum)})
  }
  onPrevious() {
    this.router.navigateByUrl("/")  
  }

}
