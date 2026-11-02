class UnderConstructionController < ApplicationController
  layout "under_construction"

  SECTIONS = { "bureau" => "Bureau", "maison" => "Maison" }.freeze

  def show
    @section = SECTIONS.fetch(params[:section])
    @page_title = "La Pieuvre - #{@section}"
    expires_in 12.hours, public: true
  end
end
