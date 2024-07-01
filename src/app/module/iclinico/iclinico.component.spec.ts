import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IClinicoComponent } from './iclinico.component';

describe('IClinicoComponent', () => {
  let component: IClinicoComponent;
  let fixture: ComponentFixture<IClinicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IClinicoComponent]
    });
    fixture = TestBed.createComponent(IClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
