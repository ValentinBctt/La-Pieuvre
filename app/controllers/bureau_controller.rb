class BureauController < ApplicationController
  include OptimizedImageUrls

  def index
    @page_title = "La Pieuvre - Bureau"
    # Cache 12h - les données changent rarement
    expires_in 12.hours, public: true
    
    @bureau_data = {
      categories: BureauCategory.order(:kind, :name).map { |c| { id: c.id, name: c.name, kind: c.kind } },
      projects: BureauProject.includes(:bureau_category).with_attached_main_image.with_attached_photos.map { |p| format_project(p) }
    }
  end

  def show
  end

  private

  def format_project(project)
    {
      id: project.id,
      name: project.name,
      mission: project.mission,
      contexte: project.contexte,
      client: project.client,
      description: project.description,
      category: {
        id: project.bureau_category.id,
        name: project.bureau_category.name,
        kind: project.bureau_category.kind
      },
      # Réduire les dimensions pour accélérer le chargement
      main_image: optimized_image_url(project.main_image, resize_to_limit: [900, 900]),
      photos: project.photos.map { |photo| optimized_image_url(photo, resize_to_limit: [1000, 1000]) }
    }
  end
end
