import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';
import { InventoryDetailViewComponent } from './inventory-detail-view/inventory-detail-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

const routes: Routes = [
  {
    path: '',
    component:WarehouseViewComponent //default page load router(empty string path)
  },
  {
    path: 'warehouse-view',
    component:WarehouseViewComponent
  },
  {
    path: 'inventory-view',
    component:InventoryViewComponent
  },
  {
    path: 'inventory-detail-view',
    component:InventoryDetailViewComponent,
    outlet: 'aux1'
  },
  {
    path: 'warehouse-detail-view',
    component:DetailViewComponent,
    outlet: 'aux1'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
