module OptimizedImageUrls
  private

  def optimized_image_url(attachment, resize_to_limit: [1200, 1200])
    return nil unless attachment
    return nil if attachment.respond_to?(:attached?) && !attachment.attached?

    url_for(attachment.variant(resize_to_limit: resize_to_limit).processed)
  rescue StandardError
    url_for(attachment)
  end
end
