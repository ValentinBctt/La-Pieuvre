require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AtelierLapieuvre
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    config.autoload_paths << Rails.root.join("app/dashboards")
    config.eager_load_paths << Rails.root.join("app/dashboards")

    # Domaines publics. Bureau et Maison n'ont pas encore leur domaine :
    # leurs pages affichent "en travaux" sur le domaine Atelier.
    config.x.domains.atelier = ENV.fetch("ATELIER_HOST", "atelierlapieuvre.com")
    config.x.domains.bureau = ENV.fetch("BUREAU_HOST", "bureaulapieuvre.com")
  end
end
