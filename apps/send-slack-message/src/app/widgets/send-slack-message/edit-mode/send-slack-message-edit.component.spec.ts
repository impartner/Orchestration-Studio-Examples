import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  IMPARTNER_LOGGER_TOKEN,
  ImpartnerConfigService,
  ImpartnerEventBusService
} from '@impartner/angular-sdk';
import { SendSlackMessageEditComponent } from './send-slack-message-edit.component';

describe('SendSlackMessageEditComponent', () => {
  let component: SendSlackMessageEditComponent;
  let fixture: ComponentFixture<SendSlackMessageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendSlackMessageEditComponent],
      providers: [
        {
          provide: ImpartnerEventBusService,
          useValue: { emit: jest.fn() }
        },
        {
          provide: ImpartnerConfigService,
          useValue: { getConfig: jest.fn(() => ({})) }
        },
        {
          provide: IMPARTNER_LOGGER_TOKEN,
          useValue: {
            log: jest.fn(),
            debug: jest.fn(),
            info: jest.fn(),
            warn: jest.fn(),
            error: jest.fn(),
            trace: jest.fn()
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SendSlackMessageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
