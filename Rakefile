# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

skip_assets_precompile = 
	["1", "true"].include?(ENV["RAILS_SKIP_ASSET_COMPILATION"].to_s.downcase) ||
	["1", "true"].include?(ENV["SKIP_ASSET_COMPILATION"].to_s.downcase) ||
	(ENV["SOURCE_VERSION"].to_s != "" && ENV["STACK"].to_s.start_with?("heroku-"))

# Skip assets:precompile if on Heroku (Vite already compiled them during Node.js build phase)
if skip_assets_precompile
	Rake::Task["assets:precompile"].clear if Rake::Task.task_defined?("assets:precompile")
end

