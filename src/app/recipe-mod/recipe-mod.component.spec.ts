import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModComponent } from './recipe-mod.component';

describe('RecipeModComponent', () => {
  let component: RecipeModComponent;
  let fixture: ComponentFixture<RecipeModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
