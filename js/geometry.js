function calculateTringleArea(){
    const baseInput = document.getElementById('tringle-base').value;
    const base = parseFloat(baseInput);

    const heightInput = document.getElementById('tringle-height').value;
    const height = parseFloat(heightInput);

    const totalArea = 0.5 * base * height;
    
    const tringleArea = document.getElementById('triangle-area');

    tringleArea.innerText = totalArea;
}

function calculateRectangleArea(){
    const widthInput = document.getElementById('rectangle-width').value;
    const width = parseFloat(widthInput);

    const lengthInput = document.getElementById('rectangle-length').value;
    const length = parseFloat(lengthInput);

    const totalArea = width * length;
    
    const rectangleArea = document.getElementById('rectangle-area');

    rectangleArea.innerText = totalArea;
}
function calculateParallelogramArea(){
    const baseInput = document.getElementById('Parallelogram-base').value;
    const base = parseFloat(baseInput);

    const heightInput = document.getElementById('Parallelogram-height').value;
    const height = parseFloat(heightInput);

    const totalArea = base  * height;
    
    const parallelogramArea = document.getElementById('Parallelogram-area');

    parallelogramArea.innerText = totalArea;
}

function calculateRhombusArea(){
    const dimension1Input = document.getElementById('rhombus-d-1').value;
    const dimension1 = parseFloat(dimension1Input);

    const dimension2Input = document.getElementById('rhombus-d-2').value;
    const dimension2 = parseFloat(dimension2Input);

    const totalArea = 0.5 * dimension1 * dimension2;
    
    const rhombusArea = document.getElementById('rhombus-area');

    rhombusArea.innerText = totalArea;
}

function calculatePentagonArea(){
    const perimeterInput = document.getElementById('Pentagon-perimeter').value;
    const perimeter = parseFloat(perimeterInput);

    const apothemInput = document.getElementById('Pentagon-apothem').value;
    const apothem = parseFloat(apothemInput);

    const totalArea = 0.5 * perimeter * apothem;
    
    const pentagonArea = document.getElementById('pentagon-area');

    pentagonArea.innerText = totalArea;
}
function calculateEllipseArea(){
    const ellipse_a_Input = document.getElementById('ellipse-a').value;
    const a = parseFloat(ellipse_a_Input);

    const ellipse_b_Input = document.getElementById('ellipse-b').value;
    const b = parseFloat(ellipse_b_Input);

    const totalArea = 3.14 * a * b;
    
    const ellipseArea = document.getElementById('ellipse-area');

    ellipseArea.innerText = totalArea;
}