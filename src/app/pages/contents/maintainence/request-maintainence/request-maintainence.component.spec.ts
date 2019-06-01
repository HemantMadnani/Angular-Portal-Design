import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMaintainenceComponent } from './request-maintainence.component';

describe('RequestMaintainenceComponent', () => {
  let component: RequestMaintainenceComponent;
  let fixture: ComponentFixture<RequestMaintainenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMaintainenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMaintainenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
