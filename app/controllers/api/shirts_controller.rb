class Api::ShirtsController < ApplicationController

  def index
    @shirts = Shirt.all
    render :json => @shirts
  end

  def create

  end
end
