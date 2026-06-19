class ContactMailer < ApplicationMailer
  default to: 'vbracchetti@yahoo.fr'

  def contact_email(data)
    @data = data.transform_keys(&:to_s)
    reply_to = @data['email'].to_s.strip

    raise ArgumentError, "Invalid reply-to email" unless URI::MailTo::EMAIL_REGEXP.match?(reply_to)

    mail(
      subject: "Nouveau message de #{@data['firstName']} #{@data['lastName']}",
      reply_to: reply_to
    )
  end
end