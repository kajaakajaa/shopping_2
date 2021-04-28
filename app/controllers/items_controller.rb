class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :details, only: %i[daiso destroy]

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
    @detail.rev_name
    redirect_to action: :index
  end

  def destroy
    @detail.destroy
    redirect_to action: :index
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number).merge(user_id: current_user.id)
  end

  def details
    @detail = Item.detail(params[:name])
  end

end

