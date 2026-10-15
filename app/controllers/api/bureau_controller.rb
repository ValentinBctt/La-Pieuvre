module Api
  class BureauController < ApplicationController
    include OptimizedImageUrls

    def index
      # Cache 12h
      expires_in 12.hours, public: true
      
      render json: {
        categories: categories_json,
        projects: projects_json(BureauProject.includes(:bureau_categories).with_attached_main_image.with_attached_photos)
      }
    end

    def show
      project = BureauProject.includes(:bureau_categories).with_attached_main_image.with_attached_photos.find(params[:id])
      render json: project_json(project)
    end

    private

    def categories_json
      BureauCategory.order(:kind, :name).map do |category|
        { id: category.id, name: category.name, kind: category.kind }
      end
    end

    def projects_json(projects)
      projects.map { |project| project_json(project) }
    end

    def project_json(project)
      {
        id: project.id,
        name: project.name,
        mission: project.mission,
        contexte: project.contexte,
        client: project.client,
        date: project.date,
        description: project.description,
        description_hover: project.description_hover,
        categories: project.bureau_categories.map { |c| { id: c.id, name: c.name, kind: c.kind } },
        main_image: optimized_image_url(project.main_image, resize_to_limit: [1200, 1200]),
        photos: project.photos.map { |photo| optimized_image_url(photo, resize_to_limit: [1400, 1400]) }
      }
    end
  end
end
