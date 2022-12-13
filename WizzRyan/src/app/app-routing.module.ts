import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { RowsComponent } from './rows/rows.component';

const routes: Routes = [
  {path:'ponuda',component: PonudaComponent},
  {path:'preporuka',component: PreporukaComponent},
  {path:'o-nama',component: ONamaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
