class ItemsController < ApplicationController
  def index
    @item = Item.new
    @items = Item.all
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to action: :index
    end
  end

  def total
    @total = Item.all.sum(:value)
  end
  # def show
  #   @upload_file = UploadFile.find(params[:id])
  # end

  def destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number)
  end
end
