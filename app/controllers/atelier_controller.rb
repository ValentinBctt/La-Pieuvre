class AtelierController < ApplicationController
  include OptimizedImageUrls

  def index
    @page_title = "La Pieuvre - Atelier"
    # Cache 12h - les images changent rarement
    expires_in 12.hours, public: true
    
    # Réduire les dimensions pour accélérer le chargement (de 1600 à 1000px)
    @showroom_images = ShowroomItem.ordered.with_attached_image.map { |item| optimized_image_url(item.image, resize_to_limit: [1000, 1000]) }
  end
end
