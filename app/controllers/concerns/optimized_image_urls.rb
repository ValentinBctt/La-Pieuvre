module OptimizedImageUrls
  private

  # Builds a direct Cloudinary CDN URL (on-the-fly transform) instead of processing
  # an ActiveStorage variant synchronously and redirecting through Rails.
  def optimized_image_url(attachment, resize_to_limit: [1200, 1200])
    return nil unless attachment
    return nil if attachment.respond_to?(:attached?) && !attachment.attached?

    blob = attachment.is_a?(ActiveStorage::Attached::One) ? attachment.blob : attachment
    service = blob.service

    if defined?(ActiveStorage::Service::CloudinaryService) && service.is_a?(ActiveStorage::Service::CloudinaryService)
      width, height = resize_to_limit
      Rails.cache.fetch(["optimized_image_url", blob.key, width, height], expires_in: 1.day) do
        service.url(blob.key, width: width, height: height, crop: "limit", quality: "auto", fetch_format: "auto")
      end
    else
      url_for(attachment.variant(resize_to_limit: resize_to_limit).processed)
    end
  rescue StandardError
    url_for(attachment)
  end
end
