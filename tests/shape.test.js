const shapes = require('../lib/shapes')


describe("creates new circle",()=>{
    test("a blue circle is being built with the green text 'FUN' ", ()=>{
        const circle = new shapes.Circle()
        const renderCircle = `<circle cx="150" cy="100" r="100" fill="blue" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">FUN</text>`
        circle.setColor("blue");
        circle.setCharacters("FUN")
        circle.setTextColor("green")
        expect(renderCircle).toEqual(circle.render()) 
    })
})
describe("creates new triangle",()=>{
    test("a red triangle is being built with the blue text 'DUM' ", ()=>{
        const triangle = new shapes.Triangle()
        const renderTriangle = `<polygon points="100 30, 200 200, 0 200" fill="red" />
        
        <text x="100" y="150" font-size="60" text-anchor="middle" fill="blue">DUM</text>`

        triangle.setColor("red");
        triangle.setCharacters("DUM")
        triangle.setTextColor("blue")
        expect(renderTriangle).toEqual(triangle.render()) 
    })
})
describe("creates new square",()=>{
    test("a yellow square is being built with the purple text 'SUP' ", ()=>{
        const square = new shapes.Square()
        const renderSquare = `<rect x="75" y="30" width="150" height="150" fill="yellow" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">SUP</text>`

        square.setColor("yellow");
        square.setCharacters("SUP")
        square.setTextColor("purple")
        expect(renderSquare).toEqual(square.render()) 
    })
})