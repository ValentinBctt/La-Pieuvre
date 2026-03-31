class ContactMailer < ApplicationMailer
  default to: 'vbracchetti@yahoo.fr'

  def contact_email(data)
    @data = data.transform_keys(&:to_s)

    mail(
      subject: "Nouveau message de #{@data['firstName']} #{@data['lastName']}",
      from: 'valentin.bctt@gmail.com',  # doit correspondre à ton SMTP_EMAIL
      reply_to: @data['email']          # l'adresse du formulaire
    )
  end
end