module Api
  class PrestationLivesController < ApplicationController
    def index
      prestations = PrestationLive.ordered.with_attached_image.with_attached_photos

      render json: prestations.map { |p| {
        id: p.id,
        name: p.name,
        client: p.client,
        contexte: p.contexte,
        missions: p.missions,
        texte: p.texte,
        image: p.image.attached? ? url_for(p.image) : nil,
        photos: p.photos.map { |photo| url_for(photo) }
      } }
    end
  end
end
