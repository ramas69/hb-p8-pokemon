import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRedirectComponent } from './pokemon-redirect.component';

describe('PokemonRedirectComponent', () => {
  let component: PokemonRedirectComponent;
  let fixture: ComponentFixture<PokemonRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
