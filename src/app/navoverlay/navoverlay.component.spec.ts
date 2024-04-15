import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavoverlayComponent } from './navoverlay.component';

describe('NavoverlayComponent', () => {
  let component: NavoverlayComponent;
  let fixture: ComponentFixture<NavoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavoverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
