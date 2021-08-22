import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightHolderComponent } from './light-holder.component';

describe('LightHolderComponent', () => {
  let component: LightHolderComponent;
  let fixture: ComponentFixture<LightHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
