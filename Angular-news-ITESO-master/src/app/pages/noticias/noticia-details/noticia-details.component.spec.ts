import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetailsComponent } from './noticia-details.component';

describe('NoticiaDetailsComponent', () => {
  let component: NoticiaDetailsComponent;
  let fixture: ComponentFixture<NoticiaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
