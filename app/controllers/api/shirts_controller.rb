class Api::ShirtsController < ApplicationController
  def index
    @shirts = Shirt.all
    render :index
  end

  def create
    params[:design][:votes] = 0
    params[:design][:artist_id] = current_user.id;
    params[:design][:submitted] = false
    params[:design][:design_img] = params[:design_img]
    @shirt = Shirt.new(params[:design])
    if @shirt.save
      render :show
    else
      render :json => @shirt.errors.full_messages
    end
  end

  def update
    params[:design][:model_img] = params[:model_img] if params[:model_img]
    params[:design][:design_img] = params[:design_img] if params[:design_img]
    @shirt = Shirt.find(params[:id])
    if @shirt.update_attributes(params[:design])
      render :show
    else
      render :json => @shirt.errors.full_messages
    end
  end
end
