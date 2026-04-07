class Admin::ProductsController < Administrate::ApplicationController
  private

  def resource_params
    params.require(:product).permit(
      :name, :category_id, :description, :grammage, :matiere,
      :position, :quality, :reference, :sizes_available, :subname, :image,
      colors: []
    ).tap do |p|
      p[:colors] = p[:colors].reject(&:blank?) if p[:colors].is_a?(Array)
    end
  end
end
