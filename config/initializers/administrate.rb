Rails.application.config.to_prepare do
  require_dependency Rails.root.join("app/dashboards/prestation_live_dashboard.rb")
  require_dependency Rails.root.join("app/models/prestation_live.rb")
end
