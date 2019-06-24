import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ServicesComponent } from './services/services.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{path: '', component:MenuComponent, children:[{path:'',component:StartPageComponent},{path:'startPage',redirectTo:''},
                                                                          {path: 'services',component:ServicesComponent}, 
                                                                          {path: 'details',component:DetailsComponent}, 
                                                                          {path: 'payment',component:PaymentComponent},
                                                                          {path: 'form',component:FormComponent}]}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
