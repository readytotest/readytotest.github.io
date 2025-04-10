Sentry.init({
  dsn: "https://67cde871b86c2bc34ccf16cbbd00f446@o4506508905938944.ingest.sentry.io/4506508914262016",

  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "light",
      triggerLabel: "Let's connect!",
      formTitle: "Send Message",
      submitButtonLabel: "Send Now!",
      messagePlaceholder: "Type your message here",
      successMessageText: "Message sent successfully!",
      enableScreenshot: false,
    }),
  ],
});
