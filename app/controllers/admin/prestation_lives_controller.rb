module Admin
  class PrestationLivesController < Admin::ApplicationController
    def update
      if params[:prestation_live] && params[:prestation_live][:remove_photo_ids].present?
        ids = params[:prestation_live].delete(:remove_photo_ids)
        prestation = PrestationLive.find(params[:id])
        prestation.photos_attachments.where(id: ids).each(&:purge)
      end

      super
    end

    private

    def resource_params
      params.require(:prestation_live).permit(
        :name,
        :client,
        :contexte,
        :missions,
        :texte,
        :image,
        :position,
        photos: [],
        remove_photo_ids: []
      )
    end
  end
end
