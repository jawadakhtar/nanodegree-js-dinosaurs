
/**
* @description Represents a LivingBeing
* @constructor
* @param {string} species - type of living being
* @param {string} weight - weight of living being
* @param {string} height - height of living being
* @param {string} diet - diet of living being
*/
function LivingBeing(species, weight, height, diet){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.image = species === "" ? null : "./images/" + species.toLowerCase() +".png";
}

/**
* @description Represents a Dinasour, kind of LivingBeing
* @constructor
* @param {string} species - type of Dinasour
* @param {string} weight - weight of Dinasour
* @param {string} height - height of Dinasour
* @param {string} diet - diet of Dinasour
* @param {string} where - where the Dinasour was found
* @param {string} when - when the Dinasour was found
* @param {string} fact - fact about Dinasour
*/
function Dinasour(species, weight, height, diet, where, when, fact){
    LivingBeing.call(this, species, weight, height, diet);

    this.where = where;
    this.when = when;
    this.fact = fact;

    /**
    * @description Randomly compares the property of dinasour with provided livingbeing and updates the Fact
    * @param {LivingBeing} other
    */
    this.randomCompare= function(other)
    {
        let randomFact = Math.floor(Math.random() * 3) ;   //generate random number from 0 to 2
        
        let txt = "";
        if (randomFact == 0){
            txt = this.compareHeight(other);
        }
        if (randomFact == 1){
            txt = this.compareWeight(other);
        }
        if (randomFact == 2){
            txt = this.compareDiet(other);
        }
        if (this.fact.indexOf(txt) == -1) //update the fact if its new
            this.fact += txt;
    }

    /**
    * @description compares the Height of dinasour with provided livingbeing and updates the Fact
    * @param {LivingBeing} other
    */
    this.compareHeight = function(other){
        if (this.height < other.height){
            return `<br> ${other.species} are taller than ${this.species}`; 
        }
        else{
            return `<br> ${this.species} are taller than ${other.species}`; 
        }
    }

    /**
    * @description compares the Weight of dinasour with provided livingbeing and updates the Fact
    * @param {LivingBeing} other
    */
    this.compareWeight = function(other){
        if (this.weight < other.weight){
            return `<br> ${other.species} are heavier than ${this.species}`; 
        }
        else{
            return `<br> ${this.species} are heavier than ${other.species}`;
        }
    }

    /**
    * @description compares the Diet of dinasour with provided livingbeing and updates the Fact
    * @param {LivingBeing} other
    */
    this.compareDiet = function(other){
        if (this.diet.toLowerCase() != other.diet.toLowerCase()){
            return `<br> ${other.species} diet differs from ${this.species}`; 
        }
        else{
            return `<br> ${other.species} and ${this.species} consumes same diet`;
        }
    }
}
Dinasour.prototype = Object.create(LivingBeing.prototype); //making LivingBeing as a parent of Dinasour
Dinasour.prototype.constructor = Dinasour;

/**
* @description Represents a Human, kind of LivingBeing
* @constructor
* @param {string} name - name of Human
* @param {string} weight - weight of Human
* @param {string} height - height of Human
* @param {string} diet - diet of Human
*/

function Human(name, weight, height, diet){
    LivingBeing.call(this, "Human", weight, height, diet);

    this.name = name;
}
Human.prototype = Object.create(LivingBeing.prototype); //making LivingBeing as a parent of Human
Human.prototype.constructor = Human;

//declaraing an array of Dinasours
let Dinasours = [];

//fetching Dinasours from JSON file
fetch('./dino.json')
.then(response => response.text())
.then(json => {
    // Do something with your data
    const jsonObject = JSON.parse(json);
    
    for(let i=0; i < jsonObject.Dinos.length; i++)
    {
        const dino8 = new Dinasour(
            jsonObject.Dinos[i].species,
            jsonObject.Dinos[i].weight,
            jsonObject.Dinos[i].height,
            jsonObject.Dinos[i].diet,
            jsonObject.Dinos[i].where,
            jsonObject.Dinos[i].when,
            jsonObject.Dinos[i].fact
            );

        Dinasours.push(dino8);
    }
});






// Create Human Object
let human = null; 

/**
* @description IIFE to get human data from form
*/
let loadedHumanData = (function(){
    let docName = document.getElementById("name");
    let docHeightFeet = document.getElementById("feet");
    let docHeightInches = document.getElementById("inches");
    let docWeight = document.getElementById("weight");
    let docDiet = document.getElementById("diet");

    function name(){
        return docName.value == null || docName.value == '' || docName.value === '' ? '' : docName.value;
    }

    function height(){
        let ft = docHeightFeet.value === "" ? 0 : docHeightFeet.value;
        let inches = docHeightInches.value === "" ? 0 : docHeightInches.value;
        return +ft * 12 + +inches;
    }

    function weight(){
        return docWeight.value === "" ? 0 : docWeight.value;
    }

    function diet(){
        return docDiet.value === "" ? "" : docDiet.value;
    }

    return {
        name : name,
        height : height,
        weight : weight,
        diet: diet
    }
})();


let compareButton = document.getElementById("btn");
//https://knowledge.udacity.com/questions/304096
compareButton.addEventListener("click", (event) => {
    startComparision();
    });
    

/**
* @description starts comparing Human with randomly any of the dinasour, hides the form and show the grid
*/
function startComparision(){
    human = new Human(loadedHumanData.name(), loadedHumanData.weight(), loadedHumanData.height(), loadedHumanData.diet());

    //creating a copy of Dinasours to display and randomize
    let DinasoursToDisplay = [...Dinasours];
    DinasoursToDisplay = DinasoursToDisplay.sort(() => Math.random() - 0.5);                //https://flaviocopes.com/how-to-shuffle-array-javascript/
    
    //randomly compare the human with dino
    let dinoToCompare = Math.floor(Math.random() * Dinasours.length) ;
    DinasoursToDisplay[dinoToCompare].randomCompare(human);
    
    //inserting human in the middle of Dinasours
    DinasoursToDisplay.splice(DinasoursToDisplay.length / 2, 0, human);
    
    hideMainForm(); //hide the form
    addGrid(DinasoursToDisplay, human); //add comparision grid 
}

/**
* @description hides the input form 
*/
function hideMainForm(){
    //https://stackoverflow.com/questions/7326925/difference-betweet-style-visibility-and-style-display
    document.getElementById('dino-compare').style.display = "none";
}

/**
* @description add grid with all dinasours and human (in the middle)
* @param {Array[LivingBeing]} allLivingBeings
* @param {LivingBeing} human
*/
function addGrid(allLivingBeings, human){
    //let gridMarkup = '<div>';
    let gridMarkup = '';
    
    //generating tiles 
    for(let i = 0; i < allLivingBeings.length; i++)
    {   
        gridMarkup += generateTile(allLivingBeings[i]);
    }
    
    //updating DOM
    document.getElementById("grid").innerHTML = gridMarkup;
    document.getElementById("grid").innerHTML += "<h3>Click on Tile to compare !!! </h3>"

    //binding click event to allow user to randomly compare differnt properties
    for(let i = 0; i < allLivingBeings.length; i++) //for each item
    {
        if (allLivingBeings[i].species.toLowerCase() == "human")
            continue;
        

        document.body.addEventListener("click", (event) => {
            console.log(event)
        })
        // document.getElementById(allLivingBeings[i].species).addEventListener("click", (event) => {                                        
        //         gridClicked(allLivingBeings[i], human);
        //         });
    }
}

/**
* @description grid-item click handler, to randomly compare and update the DOM with comparision
* @param {LivingBeing} livingBeing
* @param {LivingBeing} human
*/
function gridClicked(livingBeing, human)
{
    livingBeing.randomCompare(human);
    
    //generate tile and update only current tile
    document.getElementById(livingBeing.species).outerHTML = generateTile(livingBeing);
    
    //rebinding event as we replaced outerHTML  
    document.getElementById(livingBeing.species).addEventListener("click", (event) => {   
        gridClicked(livingBeing, human);
        });
}

/**
* @description generate DOM for the provided LivingBeing (Dinasour / Human)
* @param {LivingBeing} livingBeing
*/
function generateTile(livingBeing){
    let factOrName = "";
    if (Object.keys(livingBeing).indexOf("fact") == -1) //fact property not found, it's human, using name property instead
        factOrName = livingBeing.name;
    else
        factOrName = livingBeing.fact;

    return `<div id="${livingBeing.species}" class="grid-item">
                <h3> ${livingBeing.species} </h3>
                <img src="${livingBeing.image}" />
                <h4> ${factOrName} </h4>            
                </div>`;        
} 