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

// Create object with Class Constructor in Javascript
class Person {
  constructor(id, name) {
    this.user_id = id;
    this.name = name;
    this.level = Level.Standard;
    this.amountCurrencies = {
      ori: 5,
      citrine: 5,
      lotus: 5,
    };
  }

  purchase(item_type_id, amount) {
    if (item_type_id) {
      this.amountCurrencies[currency[item_type_id]] += amount;
      this.totalAmount();
    }
  }

  levelUp(amount) {
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
  }

  totalAmount() {
    const { ori, citrine, lotus } = this.amountCurrencies;
    const total = ori + citrine + lotus;
    console.log(ori, citrine, lotus);
    this.levelUp(total);
    return total;
  }
}

class User1 extends Person {
  constructor(id, name, title) {
    super(id, name);
    this.title = title;
  }
}

class User2 extends Person {
  constructor(id, name, city) {
    super(id, name);
    this.city = city;
  }
}

const jayaMiko = new User1(1, "Jaya Miko", "Web Programmer");
const jayaMiko2 = new User2(1, "Jaya Miko", "Jakarta");
