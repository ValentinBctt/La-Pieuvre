module Admin
  class BureauProjectsController < Admin::ApplicationController
    def create
      new_photos = extract_new_photos(params[:bureau_project])
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
      project = requested_resource
      remove_ids = params[:bureau_project]&.delete(:remove_photo_ids)
      new_photos = extract_new_photos(params[:bureau_project])

      if project.update(resource_params)
        project.photos_attachments.where(id: remove_ids).each(&:purge) if remove_ids.present?
        project.photos.attach(new_photos) if new_photos.present?

        redirect_to(
          after_resource_updated_path(project),
          notice: translate_with_resource("update.success"),
          status: :see_other
        )
      else
        render :edit, locals: {
          page: Administrate::Page::Form.new(dashboard, project)
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
      params.require(:bureau_project).permit(
        :name, :mission, :contexte, :client, :description,
        :bureau_category_id, :main_image, photos: [], remove_photo_ids: []
      )
    end
  end
end
