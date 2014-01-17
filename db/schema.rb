# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140117192556) do

  create_table "shirts", :force => true do |t|
    t.string   "name",                    :null => false
    t.integer  "votes"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
    t.string   "design_img_file_name"
    t.string   "design_img_content_type"
    t.integer  "design_img_file_size"
    t.datetime "design_img_updated_at"
    t.string   "model_img_file_name"
    t.string   "model_img_content_type"
    t.integer  "model_img_file_size"
    t.datetime "model_img_updated_at"
    t.integer  "artist_id",               :null => false
  end

  add_index "shirts", ["name"], :name => "index_shirts_on_name", :unique => true

  create_table "users", :force => true do |t|
    t.string   "username",        :null => false
    t.string   "real_name"
    t.string   "location"
    t.string   "email",           :null => false
    t.boolean  "designer",        :null => false
    t.string   "password_digest", :null => false
    t.string   "start_date",      :null => false
    t.string   "session_token",   :null => false
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
