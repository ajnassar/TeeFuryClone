class CommentsController < ApplicationController
  def create
    @comment = Comment.new(params[:comment])
    @comment.user_id = current_user.id
    if @comment.save
      render :comment
    else
      render :json => @comment.errors.full_messages, :status => 422
    end
  end
end
