class ItemsController < ApplicationController
  def index
    @item = Item.new
    @items = Item.all.order(created_at: :desc)
    @total = 0
    @items.each do |item|
      @total += item.value * item.number
    end
  end

  def create
    @item = Item.new(item_params)
    @items = Item.all.order(created_at: :desc)
    if @item.save
      redirect_to action: :index
    else
      render action: :index
    end
  end

  def update
    if params[:commit] == '更新'
      @item = Item.where(id: params[:items].keys)
      @item.each do |item|
        item.number = params[:items]["#{item.id}"].to_i
        item.save
      end
      redirect_to action: :index
    elsif params[:reset] == " 済 "
      @reset = Item.where(id: params[:rstto])
      binding.pry
    end
  end

  # def test
  #   @items = Item.where(id: params[:test].keys)
  # end
  
  # def reset
  #     @item = Item.find(params[:id])
  #     @item.number = 0
  #       binding.pry
  # end

  def destroy
    @items = Item.where(name: params[:name])
    @items.destroy_all
    redirect_to action: :index
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number)
  end
end

