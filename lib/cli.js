const inquirer = require("inquirer");
const fs = require("fs");
const genFile = require("./generateFile");
const shapes = require("./shapes");

class CLI {
  constructor() {}
  run() {
    return inquirer
    // questions that are given to user to create SVG file
      .prompt([
        {
          name: "characters",
          type: "input",
          message: "write up to 3 chartacters for your logo",
          //makes sure that logo text is no longer than 3 characters long
          validate: (characterInput) => {
            if (characterInput.length <= 3) {
              return true;
            } else {
              console.log("Please write up to 3 letters for your logo.");
              return false;
            }
          },
        },
        {
          name: "textColor",
          type: "input",
          message: "what color would you like your text to be?",
        },
        {
          name: "shape",
          type: "list",
          message: "what shape would you like?",
          choices: ["triangle", "circle", "square"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "what color would you like your shape to be?",
        },
      ])

      //gets selected shape and makes new shape object 
      .then((response) => {
        let newShape;
        if (response.shape == "circle") {
          newShape = new shapes.Circle();
        } else if (response.shape == "triangle") {
          newShape = new shapes.Triangle();
        } else {
          newShape = new shapes.Square();
        }
        //setting user given attirbutes to new shape object
        newShape.setColor(response.shapeColor);
        newShape.setTextColor(response.textColor);
        newShape.setCharacters(response.characters);

        //writes new svg file 
        fs.writeFile("./example/logo.svg", genFile(newShape), (err) => {
          err ? console.log(err) : console.log("Generated logo.svg");
        });
      });
  }
}
module.exports = CLI;
