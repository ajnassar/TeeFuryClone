json.designer @shirt.designer.username
json.(@shirt, :id, :name, :artist_id, :submitted, :color, :updated_at)
json.design_url_big(@shirt.design_img.url(:big))
json.design_url_small(@shirt.design_img.url(:small))
json.model_url_big(@shirt.model_img.url(:big))
json.model_url_small(@shirt.model_img.url(:small))
