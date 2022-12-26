import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';
import { ModifyInventoryItemComponent } from './modify-inventory-item/modify-inventory-item.component';
import { ModifyWarehouseComponent } from './modify-warehouse/modify-warehouse.component';
import { InventoryDetailViewComponent } from './inventory-detail-view/inventory-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseViewComponent,
    HeaderComponent,
    FooterComponent,
    DetailViewComponent,
    InventoryViewComponent,
    ModifyInventoryItemComponent,
    ModifyWarehouseComponent,
    InventoryDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
