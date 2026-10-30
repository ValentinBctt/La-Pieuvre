class AtelierController < ApplicationController
  include OptimizedImageUrls

  def index
    @page_title = "La Pieuvre - Atelier"
    # Cache 12h - les images changent rarement
    expires_in 12.hours, public: true
    
    # Affichées à 300px de haut : 600px suffisent (écrans retina)
    @showroom_images = ShowroomItem.ordered.with_attached_image.map { |item| optimized_image_url(item.image, resize_to_limit: [600, 600]) }.compact
  end
end
