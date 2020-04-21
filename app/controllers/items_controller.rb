class ItemsController < ApplicationController
  def index
    @item = Item.new
    @items = Item.all
    # @total = Item.all.sum(:value)
    @total = 0 #(← 初期の数値設定が要る)
    @items.each do |item|
      @total += item.value * item.number 
    end
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
