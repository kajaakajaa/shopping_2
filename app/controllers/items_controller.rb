class ItemsController < UsersController
  before_action :authenticate_user!
  before_action :detail, only: %i[daiso destroy]
  #form_contentの処理呼び出し。↓
  include IndexForm

  def index
    @item = Item.new
    form_content
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to action: :index
    else
      form_content
      render "index"
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

  def detail
    @detail = current_user.items.find_by(id: params[:id])
  end

end

