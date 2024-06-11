import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { BaseWidgetEditComponent } from '@impartner/angular-apps/widget';
import {
  IImpartnerLogger,
  IMPARTNER_LOGGER_TOKEN,
  ImpartnerConfigService,
  ImpartnerEventBusService
} from '@impartner/angular-sdk';

import { DEFAULT_WIDGET_CONFIG, IWidgetOptions } from '../widget-options';

@Component({
  selector: 'app-send-slack-message-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './send-slack-message-edit.component.html',
  styleUrl: './send-slack-message-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendSlackMessageEditComponent extends BaseWidgetEditComponent<IWidgetOptions> {
  constructor(
    impartnerEventBus: ImpartnerEventBusService,
    impartnerConfig: ImpartnerConfigService,
    @Inject(IMPARTNER_LOGGER_TOKEN) impartnerLogger: IImpartnerLogger,
    changeDetectorRef: ChangeDetectorRef
  ) {
    super(
      impartnerEventBus,
      impartnerConfig,
      impartnerLogger,
      changeDetectorRef,
      DEFAULT_WIDGET_CONFIG
    );
  }
}
