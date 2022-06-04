import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeorderComponent } from './seeorder.component';

describe('SeeorderComponent', () => {
  let component: SeeorderComponent;
  let fixture: ComponentFixture<SeeorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
