module Admin
  class PrestationLivesController < Admin::ApplicationController
    def create
      new_photos = extract_new_photos(params[:prestation_live])
      resource = new_resource(resource_params)
      authorize_resource(resource)

      if resource.save
        resource.photos.attach(new_photos) if new_photos.present?
        redirect_to(
          after_resource_created_path(resource),
          notice: translate_with_resource("create.success")
        )
      else
        render :new, locals: {
          page: Administrate::Page::Form.new(dashboard, resource)
        }, status: :unprocessable_entity
      end
    end

    def update
      prestation = requested_resource
      remove_ids = params[:prestation_live]&.delete(:remove_photo_ids)
      new_photos = extract_new_photos(params[:prestation_live])

      if prestation.update(resource_params)
        prestation.photos_attachments.where(id: remove_ids).each(&:purge) if remove_ids.present?
        prestation.photos.attach(new_photos) if new_photos.present?

        redirect_to(
          after_resource_updated_path(prestation),
          notice: translate_with_resource("update.success"),
          status: :see_other
        )
      else
        render :edit, locals: {
          page: Administrate::Page::Form.new(dashboard, prestation)
        }, status: :unprocessable_entity
      end
    end

    private

    def extract_new_photos(model_params)
      return [] unless model_params

      Array(model_params.delete(:photos)).compact_blank.reject do |file|
        file.respond_to?(:original_filename) && file.original_filename.blank?
      end
    end

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
