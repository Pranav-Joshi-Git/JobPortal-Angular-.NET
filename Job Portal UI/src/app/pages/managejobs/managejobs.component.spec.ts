import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagejobsComponent } from './managejobs.component';

describe('ManagejobsComponent', () => {
  let component: ManagejobsComponent;
  let fixture: ComponentFixture<ManagejobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagejobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
