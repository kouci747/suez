import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackInternDeveloperComponent } from './fullstack-intern-developer.component';

describe('FullstackInternDeveloperComponent', () => {
  let component: FullstackInternDeveloperComponent;
  let fixture: ComponentFixture<FullstackInternDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullstackInternDeveloperComponent]
    });
    fixture = TestBed.createComponent(FullstackInternDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
