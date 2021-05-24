require 'rails_helper'

RSpec.describe Item, type: :model do
  describe "name_validation" do
    let(:item) { build(:item) }
    
    describe "assciation" do
      # t = described_class.reflect_on_association(:user)
      # it { expect(t.macro).to eq(:belongs_to) }
      it { should belong_to(:user) }
    end
    
    describe "name" do
      context "when 'name' have space " do
        it { expect(item).to be_valid }
      end
      context "when 'name' is uniqueness in 'user_id'" do
        # it "does something with multiple users" do
          # user = FactoryBot.create(:item)
        # end
        it { is_expected.not_to validate_uniqueness_of(item.name).scoped_to(:user_id) }
      end
    end

  end
end
