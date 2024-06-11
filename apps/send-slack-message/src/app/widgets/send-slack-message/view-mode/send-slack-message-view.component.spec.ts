import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IMPARTNER_LOGGER_TOKEN, ImpartnerConfigService } from '@impartner/angular-sdk';
import { SendSlackMessageViewComponent } from './send-slack-message-view.component';

describe('SendSlackMessageViewComponent', () => {
  let component: SendSlackMessageViewComponent;
  let fixture: ComponentFixture<SendSlackMessageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendSlackMessageViewComponent],
      providers: [
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

    fixture = TestBed.createComponent(SendSlackMessageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
