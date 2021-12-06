import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAreaListsComponent } from './list-area-lists.component';

describe('ListAreaListsComponent', () => {
  let component: ListAreaListsComponent;
  let fixture: ComponentFixture<ListAreaListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAreaListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAreaListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
