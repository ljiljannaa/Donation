import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorTableComponent } from './donor-table.component';

describe('DonorTableComponent', () => {
  let component: DonorTableComponent;
  let fixture: ComponentFixture<DonorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
