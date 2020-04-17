class ItemsController < ApplicationController
  def index
    @item = Item.all
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to action: :index
    end
  end

  def destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number)
  end
end
