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
        if(x < maxHeight){
            x += rW + lineWidth;
        }
        else {
            y += rH + lineWidth;
            x = initialX;
        }
        if(y > maxHeight){
            break;
        }
    }
    return posOfSq;
}