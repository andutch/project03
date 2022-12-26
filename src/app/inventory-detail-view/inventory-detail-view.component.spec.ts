import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDetailViewComponent } from './inventory-detail-view.component';

describe('InventoryDetailViewComponent', () => {
  let component: InventoryDetailViewComponent;
  let fixture: ComponentFixture<InventoryDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
