json.(@comment, :id, :body, :shirt_id, :user_id, :updated_at)
json.username(@comment.user.username)