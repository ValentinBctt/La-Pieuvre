# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create admin user for back office
User.find_or_create_by(name: "admin") do |user|
  user.password = "Admin@2025"
  user.password_confirmation = "Admin@2025"
  user.email = "admin@atelier-lapieuvre.local"
end
