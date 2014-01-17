class ShirtsController < ApplicationController
  def create
    params[:design][:votes] = 0
    puts params
    @shirt = Shirt.new(params[:design])
    if @shirt.save
      render :json => @shirt
    else
      render :json => @shirt.full.messages
    end
  end
end

