function calculateTringleArea(){
    const base = getInputValueById('tringle-base');
    const height = getInputValueById('tringle-height');
    const totalArea = 0.5 * base * height;
    setInnerTextById('triangle-area', totalArea);
}

function calculateRectangleArea(){
    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');
    const totalArea = width * length;
    setInnerTextById('rectangle-area', totalArea);
}

function calculateParallelogramArea(){
    const base = getInputValueById('Parallelogram-base')
    const height = getInputValueById('Parallelogram-height')
    const totalArea = base  * height;
    setInnerTextById('Parallelogram-area', totalArea);
}

function calculateRhombusArea(){
    const dimension1 = getInputValueById('rhombus-d-1')
    const dimension2 = getInputValueById('rhombus-d-2')
    const totalArea = 0.5 * dimension1 * dimension2;
    setInnerTextById('rhombus-area', totalArea);
}

function calculatePentagonArea(){
    const perimeter = getInputValueById('Pentagon-perimeter');
    const apothem = getInputValueById('Pentagon-apothem');
    const totalArea = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area', totalArea);
}
function calculateEllipseArea(){
    const a = getInputValueById('ellipse-a')
    const b = getInputValueById('ellipse-b')
    const totalArea = 3.14 * a * b;
    setInnerTextById('ellipse-area', totalArea);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}