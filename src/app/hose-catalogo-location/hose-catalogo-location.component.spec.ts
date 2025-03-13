import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseCatalogoLocationComponent } from './hose-catalogo-location.component';

describe('HoseCatalogoLocationComponent', () => {
  let component: HoseCatalogoLocationComponent;
  let fixture: ComponentFixture<HoseCatalogoLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoseCatalogoLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoseCatalogoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
