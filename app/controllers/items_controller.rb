class ItemsController < ApplicationController
  def index
    @item = Item.new
  end

  def create
  end

  def destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number)
  end
end
