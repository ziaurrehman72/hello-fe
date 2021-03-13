import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeleteCompComponent } from './search-delete-comp.component';

describe('SearchDeleteCompComponent', () => {
  let component: SearchDeleteCompComponent;
  let fixture: ComponentFixture<SearchDeleteCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDeleteCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeleteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
