class Admin::ShowroomItemsController < Admin::ApplicationController
  private

  def resource_params
    params.require(:showroom_item).permit(:name, :subname, :type, :order, :image)
  end
end