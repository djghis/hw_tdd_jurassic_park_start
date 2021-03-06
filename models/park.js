const Park = function (name, ticketPrice, collectionOfDinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;  //could be = []
};


Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur)
}


// Park.prototype.removeDinosaur = function(){
//   this.collectionOfDinosaurs.pop()
// }
Park.prototype.removeDinosaur = function(dino){
  const indexOfDino = this.collectionOfDinosaurs.indexOf(dino);
  this.collectionOfDinosaurs.splice(indexOfDino, 1);
};

Park.prototype.findMostVisitor = function(){
  let dinoWithMostVisitors = this.collectionOfDinosaurs[0];
  for (let dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.guestsAttractedPerDay > dinoWithMostVisitors.guestsAttractedPerDay){
      dinoWithMostVisitors = dinosaur;
    }
  }
  return dinoWithMostVisitors;
}

Park.prototype.findSpecies = function(species){
  const dinoSpecies = [];
  for (let dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.species === species ) {
      dinoSpecies.push(dinosaur)
    }
  }
  return dinoSpecies;
}

 Park.prototype.totalNumberOfVisitorPerDay = function () {
  let dailyVisitor = 0;
  for (let dinosaur of this.collectionOfDinosaurs){
    dailyVisitor += dinosaur.guestsAttractedPerDay;
  }
  return dailyVisitor;
};

Park.prototype.totalNumberOfVisitorPerYear = function() { return this.totalNumberOfVisitorPerDay() * 363
};

Park.prototype.revenuePerYear = function() {
  return this.totalNumberOfVisitorPerYear() * this.ticketPrice

};



module.exports = Park;
