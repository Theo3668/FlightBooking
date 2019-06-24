import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() title
  @Input() fullName
  @Input() idNum
  @Input() phone
  @Input() radio
  @Input() emName
  @Input() emRelation
  @Input() emPhone
  @Input() emEmail
  
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.title = params.title
      console.log(this.title),

      this.fullName = params.fullName
      console.log(this.fullName),

      this.idNum = params.idNum
      console.log(this.idNum),

      this.phone = params.phone 
      console.log(this.phone),

      this.radio = params.radio
      console.log(this.radio),

      this.emName = params.emName
      console.log(this.emName),

      this.emRelation = params.emRelation
      console.log(this.emRelation),
      
      this.emPhone = params.emPhone
      console.log(this.emPhone),

      this.emEmail = params.emEmail
      console.log(this.emEmail)
    })

  }
  onPay(){
    this.router.navigateByUrl("payment")
    // to payment
    this.router.navigate(['payment'], { queryParams:{title: this.title, fullName: this.fullName, phone: this.phone, idNum: this.idNum}})
  }
  onEdit(){
    this.router.navigateByUrl("details")
  }
}
