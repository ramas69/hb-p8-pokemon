import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptExoComponent } from './typescript-exo.component';

describe('TypescriptExoComponent', () => {
  let component: TypescriptExoComponent;
  let fixture: ComponentFixture<TypescriptExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptExoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
