class PagesController < ApplicationController
  layout 'home', only: [:home]

  def home
  end

  def cookie_policy
  end

  def privacy_policy
  end

  def terms
  end

  def accessibility
  end
end
