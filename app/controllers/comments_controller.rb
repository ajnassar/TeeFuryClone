class CommentsController < ApplicationController
  def create
    @comment = Comment.new(params[:comment])
    if @comment.save
      render :json => "cool"
    else

    end
  end
end
