class AtelierController < ApplicationController
  include OptimizedImageUrls

  def index
    @showroom_images = ShowroomItem.ordered.with_attached_image.map { |item| optimized_image_url(item.image, resize_to_limit: [1600, 1600]) }
  end
end
