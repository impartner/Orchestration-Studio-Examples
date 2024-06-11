import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocalImpartnerWidgetModule } from '@impartner/angular-apps/local-dev';
import {
  AbstractImpartnerWidgetAppModule,
  ImpartnerWidgetModule
} from '@impartner/angular-apps/widget';
import { ImpartnerSdkModule } from '@impartner/angular-sdk';
import { ImpartnerI18NextModule } from '@impartner/angular-apps/i18n';
import { impartnerEnvironment } from '../environments/impartner-environment';
import { WIDGETS_CONFIG } from './widgets/widgets-config';

@NgModule({
  imports: [
    BrowserModule,
    ImpartnerSdkModule.forRoot({ ...impartnerEnvironment }),
    ImpartnerWidgetModule.forRoot(impartnerEnvironment, WIDGETS_CONFIG),
    impartnerEnvironment.production
      ? []
      : LocalImpartnerWidgetModule.forRoot(impartnerEnvironment, { defaultTenantId: 40 }),
    ImpartnerI18NextModule.forRoot()
  ],
  providers: []
})
export class AppModule extends AbstractImpartnerWidgetAppModule {}
