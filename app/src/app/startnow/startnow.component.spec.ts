import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartnowComponent } from './startnow.component';

describe('StartnowComponent', () => {
  let component: StartnowComponent;
  let fixture: ComponentFixture<StartnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartnowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
