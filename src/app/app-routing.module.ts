import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';

const routes: Routes = [
{path:'FirstcomponentComponent' , component: FirstcomponentComponent},
{path:'SecondcomponentComponent' , component: SecondcomponentComponent},
{path:'ThirdcomponentComponent' , component: ThirdcomponentComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
