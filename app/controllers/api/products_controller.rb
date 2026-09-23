module Api
  class ProductsController < ApplicationController
    include OptimizedImageUrls

    def index
      categories = Category.with_attached_image
                           .with_attached_imageorange
                           .select(:id, :name)
                           .map do |c|
        {
          id: c.id,
          name: c.name,
          image: optimized_image_url(c.image, resize_to_limit: [320, 320]),
          imageorange: optimized_image_url(c.imageorange, resize_to_limit: [320, 320])
        }
      end

      products = Product.with_attached_image
                        .select(:id, :name, :reference, :description, :colors, :matiere, :grammage, :quality, :sizes_available, :subname, :category_id)
                        .map do |p|
        {
          id: p.id,
          name: p.name,
          reference: p.reference,
          description: p.description,
          colors: p.colors,
          matiere: p.matiere,
          grammage: p.grammage,
          quality: p.quality,
          sizes_available: p.sizes_available,
          subname: p.subname,
          category_id: p.category_id,
          image: optimized_image_url(p.image, resize_to_limit: [1100, 1100])
        }
      end

      render json: { categories: categories, products: products }
    end
  end
end