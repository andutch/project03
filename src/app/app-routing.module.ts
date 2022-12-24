import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';

const routes: Routes = [
  {
    path: '',
    component:WarehouseViewComponent //default page load router(empty string path)
  },
  {
    path: 'warehouse-view',
    component:WarehouseViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
