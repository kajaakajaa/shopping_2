class ItemsController < ApplicationController
  def index
    @item = Item.new
    @items = Item.find_by_sql(["SELECT * FROM items WHERE id 
      IN(SELECT MAX(id) FROM items GROUP BY name);"]) # "name" カラムに group メソッド処理で絞り込み、
        # かつidの最大値(idの大きい数字順)を取得する。ActiveRecord に変換したメソッドは不明。
    @total = 0 #(← 初期の数値設定が要る)
    @items.each do |item|
      @total += item.value * item.number
    end
  end

  def create
    @items = Item.new(item_params)
    if @items.save!
      redirect_to action: :index
    end
  end

  # def update
  #   @item = Item.find(2)
  #     if @item.update(update_params)
  #       redirect_to action: :index
  #     end
  # end
  def update
    @item = Item.where(params[:items].keys)
    @item.each do |item|
      item.number = params[:items]["#{item.id}"].to_i
      item.save!
    end
    redirect_to action: :index
  end

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

