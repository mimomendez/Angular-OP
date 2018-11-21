import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProgresBarComponent } from './main-progres-bar.component';

describe('MainProgresBarComponent', () => {
  let component: MainProgresBarComponent;
  let fixture: ComponentFixture<MainProgresBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProgresBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProgresBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
