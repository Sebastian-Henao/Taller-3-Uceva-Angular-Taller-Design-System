import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAtom } from './input.atom';

describe('InputAtom', () => {
  let component: InputAtom;
  let fixture: ComponentFixture<InputAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
