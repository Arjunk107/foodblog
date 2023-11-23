import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Author1Component } from './author1.component';

describe('Author1Component', () => {
  let component: Author1Component;
  let fixture: ComponentFixture<Author1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Author1Component]
    });
    fixture = TestBed.createComponent(Author1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
