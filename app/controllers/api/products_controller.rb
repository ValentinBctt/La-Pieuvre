module Api
  class ProductsController < ApplicationController
    def index
      categories = Category.with_attached_image
                           .with_attached_imageorange
                           .select(:id, :name)
                           .map do |c|
        {
          id: c.id,
          name: c.name,
          image: c.image.attached? ? url_for(c.image) : nil,
          imageorange: c.imageorange.attached? ? url_for(c.imageorange) : nil
        }
      end

      products = Product.with_attached_image
                        .select(:id, :name, :reference, :description, :colors, :matiere, :quality, :sizes_available, :subname, :category_id)
                        .map do |p|
        {
          id: p.id,
          name: p.name,
          reference: p.reference,
          description: p.description,
          colors: p.colors,
          matiere: p.matiere,
          quality: p.quality,
          sizes_available: p.sizes_available,
          subname: p.subname,
          category_id: p.category_id,
          image: p.image.attached? ? url_for(p.image) : nil
        }
      end

      render json: { categories: categories, products: products }
    end
  end
end