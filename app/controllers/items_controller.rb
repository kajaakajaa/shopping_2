class ItemsController < ApplicationController

  def index
    @item = Item.new
    @items = Item.desc_order
    @total = 0
    @items.each do |item|
      @total += item.value * item.number
    end
  end

  def create
    @item = Item.new(item_params)
    @items = Item.desc_order
    if @item.save
      redirect_to action: :index
    else
      render action: :index
    end
  end

  def update
    @item = Item.where(id: params[:items].keys)
    @item.each do |item|
      item.number = params[:items]["#{item.id}"].to_i
      item.save
    end
    redirect_to action: :index
  end

  def daiso
    @detail = Item.detail(params[:name])
    @detail.reverse_name
    # @detail.each do |detail|
    #   if detail.daiso == nil
    #     detail.daiso = detail.name.to_s
    #     detail.save
    #       redirect_to action: :index
    #   elsif detail.daiso == detail.name
    #       detail.update(daiso: nil)
    #     redirect_to action: :index
    #   end
    # end
  end

  def destroy
    @detail = Item.detail(params[:name])
    @detail.destroy_all
    redirect_to action: :index
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number)
  end

end

