import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Author3Component } from './author3.component';

describe('Author3Component', () => {
  let component: Author3Component;
  let fixture: ComponentFixture<Author3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Author3Component]
    });
    fixture = TestBed.createComponent(Author3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
