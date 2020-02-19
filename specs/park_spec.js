const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;  // add the let variable name here so it s not a global variable by being created in the beforeEach
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park ("Jurassic Park",10);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('Diplodocus', 'herbivore', 20);
    dinosaur2 = new Dinosaur('pterodactyle', 'carnivore', 60);
  })

  it('should have a name',function(){
    const actual=park.name;
    assert.strictEqual(actual,'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs',function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual,[]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    const actual = park.collectionOfDinosaurs.length
    assert.strictEqual(actual, 1)
  });

  // it('should be able to remove a dinosaur from its collection',function(){
  //   park.addDinosaur(dinosaur);
  //   park.removeDinosaur();
  //   const actual=park.collectionOfDinosaurs
  //   assert.deepStrictEqual(actual,[]);
  // });
  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur);
    const actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const mostAttractiveDino = park.findMostVisitor();
    assert.strictEqual(mostAttractiveDino.guestsAttractedPerDay, 60);

  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.findSpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalNumberOfVisitorPerDay()
    assert.strictEqual(actual,130)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalNumberOfVisitorPerYear()
    assert.strictEqual(actual,47190)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.revenuePerYear()
    assert.strictEqual(actual,471900);
  });

});
