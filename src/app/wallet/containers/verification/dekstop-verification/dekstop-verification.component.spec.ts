import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DekstopVerificationComponent } from './dekstop-verification.component';

describe('DekstopVerificationComponent', () => {
  let component: DekstopVerificationComponent;
  let fixture: ComponentFixture<DekstopVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DekstopVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DekstopVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
