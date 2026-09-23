require "administrate/field/base"

class AttachedPhotosWithRemovalField < Administrate::Field::Base
  def attachments
    Array(data&.attachments)
  end

  def to_partial_path
    "/fields/attached_photos_with_removal/show"
  end
end