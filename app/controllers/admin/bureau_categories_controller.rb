module Admin
  class BureauCategoriesController < Admin::ApplicationController
    private

    def resource_params
      params.require(:bureau_category).permit(:name, :kind)
    end
  end
end
