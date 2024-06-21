import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponentComponent } from './course-list-component.component';

describe('CourseListComponentComponent', () => {
  let component: CourseListComponentComponent;
  let fixture: ComponentFixture<CourseListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
