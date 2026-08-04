Rails.application.config.to_prepare do
  require_dependency Rails.root.join("app/dashboards/prestation_live_dashboard.rb")
  require_dependency Rails.root.join("app/models/prestation_live.rb")

  unless Object.const_defined?(:PrestationLifeDashboard)
    Object.const_set(:PrestationLifeDashboard, PrestationLiveDashboard) if defined?(PrestationLiveDashboard)
  end

  unless Object.const_defined?(:PrestationLife)
    Object.const_set(:PrestationLife, PrestationLive) if defined?(PrestationLive)
  end
end
