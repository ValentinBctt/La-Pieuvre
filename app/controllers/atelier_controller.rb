class AtelierController < ApplicationController
  def index
    @showroom_images = ShowroomItem.ordered.with_attached_image.map { |item| url_for(item.image) }
  end
end
