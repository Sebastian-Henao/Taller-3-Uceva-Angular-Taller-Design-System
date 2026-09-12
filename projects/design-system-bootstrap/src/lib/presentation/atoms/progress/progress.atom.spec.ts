import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressAtom } from './progress.atom';

describe('ProgressAtom', () => {
  let component: ProgressAtom;
  let fixture: ComponentFixture<ProgressAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
