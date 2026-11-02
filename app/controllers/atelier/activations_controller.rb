module Atelier
  class ActivationsController < ApplicationController
    def index
      @page_title = "La Pieuvre - Prestations live"
      @meta_description = "Prestations live de l'Atelier La Pieuvre : activations, événements et détails de chaque prestation."
    end
  end
end
