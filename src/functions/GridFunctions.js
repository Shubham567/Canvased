export const drawGrid = (canvasContext,maxWidth,maxHeight,gridWidth,gridHeight,initialX = 0,initialY = 0, lineWidth = 1, doSomething = () => {}) => {
    let ctx = canvasContext;
    let rW = gridWidth-lineWidth;
    let rH = gridHeight-lineWidth;
    let posOfSq = [];
    let x = initialX;
    let y = initialY;
    while(true){
        ctx.strokeRect(x,y,rW,rH);
        if(doSomething){
            doSomething(x,y);
        }
        posOfSq.push({x : x, y : y});
        if(x < maxWidth - rW - lineWidth){
            x += rW + lineWidth;
        }
        else {
            y += rH + lineWidth;
            x = initialX;
        }
        if(y+rH+lineWidth > maxHeight){
            break;
        }
    }
    return posOfSq;
}

export const getGridCenter = (x,y,width,height) => {
    return{ x: width/2+ x, y: height/2 + y };
}