class ItemsController < ApplicationController
  def index
    @item = Item.new
    @items = Item.find_by_sql(["SELECT * FROM items WHERE id 
      IN(SELECT MAX(id) FROM items GROUP BY name);"]) # "name" カラムに group メソッド処理で絞り込み、
        # かつidの最大値(idの大きい数字順)を取得する。ActiveRecord に変換したメソッドは不明。
    # @items.each do |item|
    #   @valnums = item.value * item.number
    #   @total = item.group(:name).sum(@valnums)
    # end
    # @total = Item.all.sum(:value)
    @total = 0 #(← 初期の数値設定が要る)
    @items.each do |item|
      @total += item.value * item.number 
    end
    # @update = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to action: :index
    end
  end

  def update
    @update = Item.find(params[:id])
      if @item.update(update_params)
        redeirect_to action: :index
      end
  end

  def destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :value, :number)
  end

  def update_params
    params.require(:item).permit(:number)
  end
end

