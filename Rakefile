# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

if ENV["RAILS_SKIP_ASSET_COMPILATION"] == "1"
	Rake::Task["assets:precompile"].clear if Rake::Task.task_defined?("assets:precompile")

	namespace :assets do
		task :precompile do
			puts "Skipping assets:precompile (RAILS_SKIP_ASSET_COMPILATION=1)"
		end
	end
end
