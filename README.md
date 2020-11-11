# Object Oriented Javascript 

## Student Instructions

### Big Picture

This is a learning project from Udacity - Intermediata JavaScript Nanodegree. The purpose of this project is to show skills in Object Oriented JavaScript. Following are the requirements :

For the project, you will generate a 3x3 grid of tiles (9 in total) with the human in the center tile. Each title will contain the species, an image, and a fact. For the human tile, you will display the name of the human rather than species and no fact is necessary for the human. When the user clicks to generate the infographic from the form, the grid will appear and the form will be hidden. The facts displayed should be random per dinosaur with an opportunity of displaying at least 6 different types of facts (3 should be from the methods you create). One of the titles should be for a pigeon in which the tile should always display, “All birds are considered dinosaurs.”


### Getting Started

1. Cloning and Starting Serve

```git clone https://github.com/jawadakhtar/nanodegree-js-dinosaurs```
```npx serve```

2. Decide how you will work with classes, then build out your classes and objects. 
There are mainly two real-world objects, Dinasours and Human. Both share some common properties, and both are "kind of" livingbeing on the planet earth. Therefore, I have created a base object named LivingBeing, by creating Constructor function named LivingBeing. This has common properties from both Dinasour and Human. Since, Dinasour has few more unique properties than LivingBeing, those are created in its own Constructor function named Dinasour. Unlike Dinasour, Human has no unique propeties, but for DRY principle we created separate Constructor function for Human. Both Dinasour and Human are then prototypaly inherited from LivingBeing. 

There is are requirement to create separate comparision functions. They way I implmented it is declared these functions within LivingBeing. This allows easy comparision among all kind of living-beings. 

"fetch" method is used to initilize a repository of Dinasours from provided JSON.

The initialization routine, from where we taken the user input from "form", is written in IIFE, named "loadedHumanData". Then we hided the form and started comparing all Dinasours with Human. After the comparision, we then generated the Tiles and injected the generated markup in the main DOM. 

Each tile is clickable, which allows user to make further comparision dynamically. 


3. Preview
https://htmlpreview.github.io/?https://github.com/jawadakhtar/nanodegree-js-dinosaurs/blob/master/index.html


### Future Ideas

Some ideas might be to validate the form data to ensure the data is acceptable and complete. Allow the user to generate a new infographic. Move the tile colors from CSS to JS for more control. Randomize the order of the tiles while keeping the human in the middle. Create a hover state on the tiles that displays the rest of the species statistics. Create additional methods for comparing data. Rewrite the project to use constructor functions, factory functions, the module pattern, and revealing module pattern. Change out data and images to generate an infographic of your own choosing. Allow the user to select different units for the numbers and update your methods to account for this. Make changes to the CSS, and HTML to make the project your own. 

