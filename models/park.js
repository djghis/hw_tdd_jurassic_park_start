const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
};


Park.prototype.addDinosaur = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur)
}


Park.prototype.removeDinosaur = function(){
  this.collectionOfDinosaurs.pop()
}

Park.prototype.findMostVisitor = function(){
  let dinoWithMostVisitors = this.collectionOfDinosaurs[0];
  for (let dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.guestsAttractedPerDay > dinoWithMostVisitors.guestsAttractedPerDay){
      dinoWithMostVisitors = dinosaur;
    }
  }
  return dinoWithMostVisitors;
}

module.exports = Park;
