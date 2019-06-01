import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDocumentComponent } from './shared-document.component';

describe('SharedDocumentComponent', () => {
  let component: SharedDocumentComponent;
  let fixture: ComponentFixture<SharedDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
