module Api
  class BureauController < ApplicationController
    def index
      render json: {
        categories: categories_json,
        projects: projects_json(BureauProject.includes(:bureau_category).with_attached_main_image.with_attached_photos)
      }
    end

    def show
      project = BureauProject.includes(:bureau_category).with_attached_main_image.with_attached_photos.find(params[:id])
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
        description: project.description,
        category: {
          id: project.bureau_category.id,
          name: project.bureau_category.name,
          kind: project.bureau_category.kind
        },
        main_image: project.main_image.attached? ? url_for(project.main_image) : nil,
        photos: project.photos.map { |photo| url_for(photo) }
      }
    end
  end
end
