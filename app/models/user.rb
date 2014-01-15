class User < ActiveRecord::Base
  attr_accessible :designer, :email, :location, :real_name, :session_token, :username
end
