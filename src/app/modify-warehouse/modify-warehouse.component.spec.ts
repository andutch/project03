import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWarehouseComponent } from './modify-warehouse.component';

describe('ModifyWarehouseComponent', () => {
  let component: ModifyWarehouseComponent;
  let fixture: ComponentFixture<ModifyWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
