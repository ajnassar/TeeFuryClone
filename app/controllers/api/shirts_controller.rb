class Api::ShirtsController < ApplicationController
  def index
    @shirts = Shirt.includes(:designer).all

    render :index
  end

  def custom
    @shirts = Shirt.find_by_sql("
    SELECT shirts.*
    FROM shirts
    WHERE Lower(name) LIKE '%#{params[:text].downcase}%'
    ")

    if @shirts
      render :index
    else
      render :json => "Soemthing when torngsmkdk", :status => 422
    end

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
