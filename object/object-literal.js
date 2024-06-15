const Level = {
  Standard: "Standard",
  Intermediate: "Intermediate",
  Advance: "Advance",
  Master: "Master",
};

const ItemTypeId = {
  Ori: 1,
  Citrine: 2,
  Lotus: 3,
};

// object literal
let user = {
  user_id: 1,
  nama: "Jaya Miko",
  level: Level.Standard,
  amountCurrencies: {
    ori: 5,
    citrine: 10,
    lotus: 10,
  },
  purchase: function (item_type_id, amount) {
    const currency = {
      [ItemTypeId.Ori]: "ori",
      [ItemTypeId.Citrine]: "citrine",
      [ItemTypeId.Lotus]: "lotus",
    };

    if (item_type_id) {
      this.amountCurrencies[currency[item_type_id]] += amount;
      this.totalAmount();
    }
  },
  levelUp: function (amount) {
    if (amount <= 25) {
      this.level = Level.Standard;
    } else if (amount > 25 && amount <= 50) {
      this.level = Level.Intermediate;
    } else if (amount > 50 && amount <= 75) {
      this.level = Level.Advance;
    } else if (amount > 75) {
      this.level = Level.Master;
    } else {
      this.level = this.level;
    }
  },
  totalAmount: function () {
    const { ori, citrine, lotus } = this.amountCurrencies;
    const total = ori + citrine + lotus;

    this.levelUp(total);

    return total;
  },
};
