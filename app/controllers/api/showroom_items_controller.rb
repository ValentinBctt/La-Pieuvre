module Api
  class ShowroomItemsController < ApplicationController
    include OptimizedImageUrls

    def index
      showroom_items = ShowroomItem.ordered.with_attached_image

      render json: showroom_items.map { |item|
        {
          id: item.id,
          name: item.name,
          subname: item.subname,
          type: item.type,
          order: item.order,
          image: optimized_image_url(item.image, resize_to_limit: [1100, 1100])
        }
      }
    end
  end
end