import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopberComponent } from './topber.component';

describe('TopberComponent', () => {
  let component: TopberComponent;
  let fixture: ComponentFixture<TopberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
