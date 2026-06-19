class ApplicationMailer < ActionMailer::Base
  default from: ENV.fetch("SMTP_EMAIL", "from@example.com")
  layout "mailer"
end
