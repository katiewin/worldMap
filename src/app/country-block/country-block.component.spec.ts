import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBlockComponent } from './country-block.component';

describe('CountryBlockComponent', () => {
  let component: CountryBlockComponent;
  let fixture: ComponentFixture<CountryBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryBlockComponent]
    });
    fixture = TestBed.createComponent(CountryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
