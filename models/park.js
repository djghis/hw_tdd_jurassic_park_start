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

module.exports = Park;
