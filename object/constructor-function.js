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

// create object using constructor function
function GetUser(id, name) {
  this.id = id;
  this.name = name;
  this.amountCurrencies = {
    ori: 5,
    citrine: 5,
    lotus: 5,
  };
  this.level = Level.Standard;

  const currency = {
    [ItemTypeId.Ori]: "ori",
    [ItemTypeId.Citrine]: "citrine",
    [ItemTypeId.Lotus]: "lotus",
  };

  this.purchase = function (item_type_id, amount) {
    if (item_type_id) {
      this.amountCurrencies[currency[item_type_id]] += amount;
      this.totalAmount();
    }
  };

  this.levelUp = function (amount) {
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
  };

  this.totalAmount = function () {
    let { ori, citrine, lotus } = this.amountCurrencies;
    const total = ori + citrine + lotus;
    this.levelUp(total);
    return total;
  };
}

const user = new GetUser(1, "Jaya Miko");
