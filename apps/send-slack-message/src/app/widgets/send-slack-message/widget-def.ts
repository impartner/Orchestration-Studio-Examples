import { StyleType } from '@impartner/angular-apps';
import { IWidgetDefinition } from '@impartner/angular-apps/widget';
import { SendSlackMessageViewComponent } from './view-mode/send-slack-message-view.component';
import { SendSlackMessageEditComponent } from './edit-mode/send-slack-message-edit.component';

export const SEND_SLACK_MESSAGE_WIDGET_DEF: IWidgetDefinition = {
  name: 'Send Slack Message',
  type: 'custom.send-slack-message',
  style: StyleType.ImpartnerHex,
  modeComponents: {
    view: {
      componentType: SendSlackMessageViewComponent,
      webComponentTag: 'uw-send-slack-message-view'
    },
    edit: {
      componentType: SendSlackMessageEditComponent,
      webComponentTag: 'uw-send-slack-message-edit'
    }
  }
};
