module Admin
  class BureauProjectsController < Admin::ApplicationController
    private

    def resource_params
      params.require(:bureau_project).permit(
        :name, :mission, :contexte, :client, :description,
        :bureau_category_id, :main_image, photos: []
      )
    end
  end
end
