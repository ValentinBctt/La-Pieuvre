module Api
  class PrestationLivesController < ApplicationController
    include OptimizedImageUrls

    def index
      prestations = PrestationLive.ordered.with_attached_image.with_attached_photos

      render json: prestations.map { |p| {
        id: p.id,
        name: p.name,
        client: p.client,
        contexte: p.contexte,
        missions: p.missions,
        texte: p.texte,
        image: optimized_image_url(p.image, resize_to_limit: [1100, 1100]),
        photos: p.photos.map { |photo| optimized_image_url(photo, resize_to_limit: [1400, 1400]) }
      } }
    end
  end
end
