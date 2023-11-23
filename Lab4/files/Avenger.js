class HelpFunction extends Function {
    constructor() {
        super('...args', `return this.temp.alias.toUpperCase() + "\\n" + this.temp.powers.join("\\n")`);
        const temp = this.bind(this);
        this.temp = temp;
        return temp;
    }
}

class Avenger extends HelpFunction {
  constructor({ name, alias, gender, age, powers }) {
    super();
    this.heroName = name;
    this.alias = alias;
    this.gender = gender;
    this.age = age;
    this.powers = powers;
  }

  toString() {
      return `name: ${this.heroName}\ngender: ${this.gender}\nage: ${this.age}`;
  }

  invokePowers() {
      const powersList = this.powers.join('\n');
      return `${this.alias.toUpperCase()}\n${powersList}`;
  }
};

  
  
module.exports.Avenger = Avenger;