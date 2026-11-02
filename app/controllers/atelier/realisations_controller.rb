class Atelier::RealisationsController < ApplicationController
  include OptimizedImageUrls

  def index
    @page_title = "La Pieuvre - Réalisations"
    @meta_description = "Découvrez les réalisations de l'Atelier La Pieuvre : print & event et production textile."
    @showroom_items = ShowroomItem.ordered.with_attached_image.map do |item|
      item.as_json(only: %i[id name subname type order]).merge(
        image: optimized_image_url(item.image, resize_to_limit: [1600, 1600])
      )
    end
  end
end
