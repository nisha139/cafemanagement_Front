import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcafemenuComponent } from './listcafemenu.component';

describe('ListcafemenuComponent', () => {
  let component: ListcafemenuComponent;
  let fixture: ComponentFixture<ListcafemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcafemenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcafemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
