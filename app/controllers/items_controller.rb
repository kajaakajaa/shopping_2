class ItemsController < ApplicationController
  def index
    @item = Item.new
  end

  def create
    @item = Item.find(params[:id])
    @item.create(ite_params)
    redirect_to action: :index
  end

  def destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number)
  end
end
