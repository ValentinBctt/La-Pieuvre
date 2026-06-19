# frozen_string_literal: true

Rails.application.config.after_initialize do
  next unless Rails.env.production?

  # Allow asset precompilation during deploy builds without runtime secrets.
  next if defined?(Rake) && Rake.application.top_level_tasks.any? { |task| task.start_with?("assets:") }

  required = {
    "SMTP_EMAIL" => ENV["SMTP_EMAIL"],
    "SMTP_PASSWORD" => ENV["SMTP_PASSWORD"],
    "CLOUDINARY_CLOUD_NAME" => ENV["CLOUDINARY_CLOUD_NAME"],
    "CLOUDINARY_API_KEY" => ENV["CLOUDINARY_API_KEY"],
    "CLOUDINARY_API_SECRET" => ENV["CLOUDINARY_API_SECRET"]
  }

  missing = required.select { |_name, value| value.blank? }.keys
  next if missing.empty?

  raise "Missing required environment variables in production: #{missing.join(', ')}"
end
