# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

running_assets_task = Rake.application.top_level_tasks.any? { |task| task.start_with?("assets:") }
heroku_build_context = ENV["SOURCE_VERSION"].to_s != "" && ENV["STACK"].to_s.start_with?("heroku-")

skip_assets_precompile = heroku_build_context ||
	["1", "true"].include?(ENV["RAILS_SKIP_ASSET_COMPILATION"].to_s.downcase) ||
	["1", "true"].include?(ENV["SKIP_ASSET_COMPILATION"].to_s.downcase)

if skip_assets_precompile && running_assets_task
	["vite:install_dependencies", "vite:build_all", "assets:precompile"].each do |task_name|
		next unless Rake::Task.task_defined?(task_name)

		Rake::Task[task_name].clear
		Rake::Task[task_name].enhance do
			puts "Skipping #{task_name} (asset compilation disabled)"
		end
	end
end
