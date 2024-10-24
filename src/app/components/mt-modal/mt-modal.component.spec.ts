import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtModalComponent } from './mt-modal.component';

describe('MtModalComponent', () => {
  let component: MtModalComponent;
  let fixture: ComponentFixture<MtModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
