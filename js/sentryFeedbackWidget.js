Sentry.init({
    dsn: "https://67cde871b86c2bc34ccf16cbbd00f446@o4506508905938944.ingest.sentry.io/4506508914262016",
  
    integrations: [
      new Sentry.Feedback({
        // Additional SDK configuration goes in here, for example:
        colorScheme: "light",
        buttonLabel: "Report Bug/Feedback",
        formTitle: "Report Bug/Feedback",
        submitButtonLabel: "Send Now!",
        messagePlaceholder: "<Type your message here>",
      }),
    ],
  });