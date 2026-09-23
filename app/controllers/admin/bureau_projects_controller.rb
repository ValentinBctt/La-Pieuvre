module Admin
  class BureauProjectsController < Admin::ApplicationController
    def update
      if params[:bureau_project] && params[:bureau_project][:remove_photo_ids].present?
        ids = params[:bureau_project].delete(:remove_photo_ids)
        project = BureauProject.find(params[:id])
        project.photos_attachments.where(id: ids).each(&:purge)
      end

      super
    end

    private

    def resource_params
      params.require(:bureau_project).permit(
        :name, :mission, :contexte, :client, :description,
        :bureau_category_id, :main_image, photos: [], remove_photo_ids: []
      )
    end
  end
end
