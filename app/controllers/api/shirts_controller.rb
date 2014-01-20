class Api::ShirtsController < ApplicationController

  def index
    @shirts = Shirt.all
    render :index
  end

  def create
    params[:design][:votes] = 0
    params[:design][:artist_id] = current_user.id;
    params[:design][:submitted] = false
    # params[:design][:design_img_data] = params[:design_img]
    params[:design][:design_img] = params[:design_img]

    @shirt = Shirt.new(params[:design])
    if @shirt.save
      render :json => @shirt
    else
      render :json => @shirt.errors.full_messages
    end
  end

  def update
    render :json => "I am here!"
  end
end
