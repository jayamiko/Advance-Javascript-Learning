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

const currency = {
  [ItemTypeId.Ori]: "ori",
  [ItemTypeId.Citrine]: "citrine",
  [ItemTypeId.Lotus]: "lotus",
};

const methodsUser = {
  purchase: function (item_type_id, amount) {
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

// create a object using object.create with javascript
function userObject(id, name) {
  const user = Object.create(methodsUser);
  user.id = id;
  user.name = name;
  user.level = Level.Standard;
  user.amountCurrencies = {
    ori: 5,
    citrine: 5,
    lotus: 5,
  };
  return user;
}

const user = userObject(1, "Jaya Miko");
