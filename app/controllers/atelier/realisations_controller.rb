class Atelier::RealisationsController < ApplicationController
  def index
    @showroom_items = ShowroomItem.ordered.with_attached_image.map do |item|
      item.as_json(only: %i[id name subname type order]).merge(
        image: url_for(item.image)
      )
    end
  end
end
