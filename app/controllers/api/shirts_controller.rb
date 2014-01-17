class Api::ShirtsController < ApplicationController

  def index
    @shirts = Shirt.all
    render :json => @shirts
  end

  def create
    params[:design][:votes] = 0
    params[:design][:artist_id] = 1
    params[:design][:submitted] = false
    @shirt = Shirt.new(params[:design])
    if @shirt.save
      render :json => @shirt
    else
      render :json => @shirt.errors.full_messages
    end
  end
end
