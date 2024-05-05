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

