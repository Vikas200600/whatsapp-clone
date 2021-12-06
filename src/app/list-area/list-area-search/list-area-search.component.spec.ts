import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAreaSearchComponent } from './list-area-search.component';

describe('ListAreaSearchComponent', () => {
  let component: ListAreaSearchComponent;
  let fixture: ComponentFixture<ListAreaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAreaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAreaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
