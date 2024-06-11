import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, Inject, OnDestroy, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BaseWidgetComponent } from '@impartner/angular-apps/widget';
import {
  IImpartnerLogger,
  IMPARTNER_LOGGER_TOKEN,
  ImpartnerConfigService,
  ImpartnerUserService,
  OrchestrationStudioService
} from '@impartner/angular-sdk';
import {
  AlertModule,
  DesignComponentsModule,
  ImpdcFormsModule,
  SpinnerModule
} from '@impartner/design-components';

import { DEFAULT_WIDGET_CONFIG, IWidgetOptions } from '../widget-options';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-send-slack-message-view',
  standalone: true,
  imports: [
    CommonModule,
    DesignComponentsModule,
    FormsModule,
    ImpdcFormsModule,
    AlertModule,
    SpinnerModule
  ],
  templateUrl: './send-slack-message-view.component.html',
  styleUrl: './send-slack-message-view.component.scss'
})
export class SendSlackMessageViewComponent
  extends BaseWidgetComponent<IWidgetOptions>
  implements OnDestroy
{
  public step: 'start' | 'sending' | 'error' | 'done' = 'start';
  public message = '';

  private readonly _destroyRef = inject(DestroyRef);

  constructor(
    impartnerConfig: ImpartnerConfigService,
    @Inject(IMPARTNER_LOGGER_TOKEN) impartnerLogger: IImpartnerLogger,
    changeDetectorRef: ChangeDetectorRef,
    private readonly _orchestrationStudioService: OrchestrationStudioService,
    private readonly _impartnerUserService: ImpartnerUserService
  ) {
    super(impartnerConfig, impartnerLogger, changeDetectorRef, DEFAULT_WIDGET_CONFIG);
  }

  public sendMessage(): void {
    this.step = 'sending';
    const payload = {
      message: this.message,
      profile: this._impartnerUserService.getUser()
    };

    this._orchestrationStudioService
      .sendPostToExtensionEndpoint('Slack_-_Partner_Send_Channel_Message', payload)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        catchError(e => {
          this.step = 'error';
          throw new Error(e);
        })
      )
      .subscribe(() => {
        this.step = 'done';
      });
  }

  public reset(): void {
    this.step = 'start';
    this.message = '';
  }
}
