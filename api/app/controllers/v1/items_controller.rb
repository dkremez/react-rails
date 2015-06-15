module V1
  class ItemsController < ApplicationController
    skip_before_action :authenticate_user_from_token!, only: [:index]

    def index
      @items = Item.all
      render json: @items
    end
  end
end
