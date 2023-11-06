import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponentComponent } from './create-post-component.component';

describe('CreatePostComponentComponent', () => {
  let component: CreatePostComponentComponent;
  let fixture: ComponentFixture<CreatePostComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostComponentComponent]
    });
    fixture = TestBed.createComponent(CreatePostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
