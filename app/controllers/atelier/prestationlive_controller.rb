module Atelier
  class PrestationliveController < ApplicationController
    def show
      @name = params[:name]
    end
  end
end