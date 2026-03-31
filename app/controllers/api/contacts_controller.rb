class Api::ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    ContactMailer.contact_email(contact_params).deliver_now
    render json: { status: 'ok' }, status: :ok
  rescue => e
    render json: { status: 'error', message: e.message }, status: :unprocessable_entity
  end

  private

  def contact_params
    if params[:contact]
      params.require(:contact).permit(:firstName, :lastName, :email, :phone, :message)
    else
      params.permit(:firstName, :lastName, :email, :phone, :message)
    end
  end
end