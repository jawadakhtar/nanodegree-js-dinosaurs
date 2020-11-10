
//constructor function
function LivingBeing(species, weight, height, where, fact){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.fact = fact;
}


// Initializing Dino Objects as defined in JSON
const dino1 = new LivingBeing(
    'Triceratops',
    5895,
    3474,
    'Herbivore',
    'North America',
    'Late Cretaceous',
    'First discovered in 1889 by Othniel Charles Marsh',
  );
  const dino2 = new LivingBeing(
    'Tyrannosaurus Rex',
    5400,
    4390,
    'Carnivore',
    'North America',
    'Late Cretaceous',
    'The largest known skull measures in at 5 feet long.',
  );
  const dino3 = new LivingBeing(
    'Anklyosaurus',
    4760,
    1676,
    'Herbivore',
    'North America',
    'Late Cretaceous',
    'Anklyosaurus survived for approximately 135 million years.',
  );
  const dino4 = new LivingBeing(
    'Brachiosaurus',
    31700,
    11338,
    'Herbivore',
    'North America',
    'Late Jurasic',
    'An asteroid was named 9954 Brachiosaurus in 1991.',
  );
  const dino5 = new LivingBeing(
    'Stegosaurus',
    5260,
    2408,
    'Herbivore',
    'North America, Europe, Asia',
    'Late Jurasic to Early Cretaceous',
    'The Stegosaurus had between 17 and 22 seperate places and flat spines.',
  );
  const dino6 = new LivingBeing(
    'Elasmosaurus',
    7260,
    1799,
    'Carnivore',
    'North America',
    'Late Cretaceous',
    'Elasmosaurus was a marine reptile first discovered in Kansas.',
  );
  const dino7 = new LivingBeing(
    'Pteranodon',
    60,
    610,
    'Carnivore',
    'North America',
    'Late Cretaceous',
    'Actually a flying reptile, the Pteranodon is not a dinosaur.',
  );
  const dino8 = new LivingBeing(
    'Pigeon',
    0.2,
    27,
    'Herbivore',
    'World Wide',
    'Holocene',
    'All birds are living dinosaurs.',
  );
  
  // Dinosaurs are group in an array
  const Dinasours = [dino1, dino2, dino3, dino4, dino5, dino6, dino7, dino8];