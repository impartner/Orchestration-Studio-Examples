import { IWidgetAppOptions } from '@impartner/angular-apps/widget';
import { SEND_SLACK_MESSAGE_WIDGET_DEF } from './send-slack-message/widget-def';

export const WIDGETS_CONFIG: IWidgetAppOptions = {
  isCustom: true,
  widgetDefinition: SEND_SLACK_MESSAGE_WIDGET_DEF
};
