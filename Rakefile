# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

skip_assets_precompile = 
	["1", "true"].include?(ENV["RAILS_SKIP_ASSET_COMPILATION"].to_s.downcase) ||
	["1", "true"].include?(ENV["SKIP_ASSET_COMPILATION"].to_s.downcase)

# Only skip if explicitly requested, not just because we're on Heroku

