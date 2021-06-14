import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConformationComponent } from './email-conformation.component';

describe('EmailConformationComponent', () => {
  let component: EmailConformationComponent;
  let fixture: ComponentFixture<EmailConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
