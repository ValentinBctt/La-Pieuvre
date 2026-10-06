class MaisonController < ApplicationController
  include OptimizedImageUrls

  def index
    @page_title = "La Pieuvre - Maison"
    # Cache 12h - les images changent rarement
    expires_in 12.hours, public: true
    
    # Réduire les dimensions pour accélérer le chargement (de 1100 à 800px)
    @showroom_items = ShowroomItem.ordered.with_attached_image.map do |item|
      {
        id: item.id,
        name: item.name,
        subname: item.subname,
        type: item.type,
        order: item.order,
        image: optimized_image_url(item.image, resize_to_limit: [800, 800])
      }
    end
  end
end
