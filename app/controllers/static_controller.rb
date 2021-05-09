class StaticController < ApplicationController
  def home
    render json: { status: "connected" }
  end
end