# Orchestration Studio Examples

This project demonstrates how to create Impartner user interfaces that interact with Orchestration Studio Extension Endpoints.

## Send Slack Message Custom Widget

The "Send Slack Message" custom widget only demonstrates the partner portal interface code. This example does not contain the PRM Admin Orchestration Studio flow that has the "Extension Endpoint" trigger flow event action required to make this example wholistic/end-to-end. To leverage this code to develop a similar widget wholistically, you will need to:
- have access to a PRM Admin environment where Orchestration Studio is enabled
- have the Slack connector enabled in the PRM Admin program in which you are working/testing
- have an activated Orchestration Studio flow with:
-- an API name (used in `send-slack-message-view.component.ts` when using the `OrchestrationStudioService` to send the HTTP request to Orchestration studio: `this._orchestrationStudioService
      .sendPostToExtensionEndpoint(...)` )
-- Accessibility set to at least "User"
-- an "Extension Endpoint" component
-- a Slack "Send Channel Message" component
-- an HTTP Response component
