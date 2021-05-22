require 'rails_helper'

RSpec.describe Item, type: :model do
  describe 'validation' do
    
    describe "association" do
      t = described_class.reflect_on_association(:user)
      it { expect(t.macro).to eq(:belongs_to) }
    end
    
    describe "name" do
      context 'when "name" is blank' do
        let (:item) { build(:item) }
        it { expect(item).to be_valid }
      end
    end

  end
end
