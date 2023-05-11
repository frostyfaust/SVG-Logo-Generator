class Shapes{
    //gives shape objects ability to have different 
    //attributes through various methods calls
    constructor(){
        this.color = '';
        this.textColor='';
        this.characters='';

    }
    setColor(color){
        this.color=color;
    }
    setTextColor(textColor){
        this.textColor=textColor;
    }
    setCharacters(characters){
        this.characters=characters;
    }
}

//differing shape classes that render corresponding svg attributes 

class Circle extends Shapes {
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
    }}
    
class Square extends Shapes{
    render(){
        return `<rect x="75" y="30" width="150" height="150" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
    }}

class Triangle extends Shapes {
    render(){
        return `<polygon points="100 30, 200 200, 0 200" fill="${this.color}" />
        
        <text x="100" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
    }}
            
module.exports = {Triangle, Square, Circle};