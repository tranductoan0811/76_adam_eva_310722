class Human {
  constructor(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  }
  getName() {
    return this.name;
  }
  getWeight() {
    return this.weight;
  }
  checkAppleWeight() {
    
  }
  setName(name) {
    this.name = name;
  }
  setGender(gender) {
    this.gender = true;
  }
  setWeight(weight) {
    this.weight = weight;
  }
  
  eat(apple) {
    if(apple.getWeightApple() > 0){
      apple.decreaseApple();
      this.weight++;
    } else {
      alert("Tao da het");
    }
  }

  sayString() {
    return "<br>" + "can you get married to me";
  }

}






