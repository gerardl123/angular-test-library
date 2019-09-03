import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGdlComponent } from './angular-gdl.component';

describe('AngularGdlComponent', () => {
  let component: AngularGdlComponent;
  let fixture: ComponentFixture<AngularGdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
