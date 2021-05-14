module IndexForm
    extend ActiveSupport::Concern
    
    included do
        def form_content
            @items = Item.where(user_id: current_user.id).desc_order

            @total = 0
            @items.each do |item|
                @total += item.value * item.number
            end
        end
    end

end