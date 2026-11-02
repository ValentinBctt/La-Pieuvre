class ApplicationMailer < ActionMailer::Base
  default from: "Atelier La Pieuvre <#{ENV.fetch('SMTP_EMAIL', 'from@example.com')}>"
  layout "mailer"
end
