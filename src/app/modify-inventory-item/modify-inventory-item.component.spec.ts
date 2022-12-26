import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInventoryItemComponent } from './modify-inventory-item.component';

describe('ModifyInventoryItemComponent', () => {
  let component: ModifyInventoryItemComponent;
  let fixture: ComponentFixture<ModifyInventoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyInventoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyInventoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
