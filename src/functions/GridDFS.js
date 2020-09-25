// const viableMoveX = [-1,0,1,-1,1,-1,0,1];
// const viableMoveY = [-1,-1,-1,0,0,1,1,1];
const viableMoveX = [0,-1,1,0,1,-1,1,-1];
const viableMoveY = [-1,0,0,1,1,-1,-1,1];

export const getNeighbours = (x,y,widthX,heightY,obstacleGrid) => {
    let neighbours = [];
    if(obstacleGrid[x][y] === true){
        return [];
    }
    for(let i = 0; i < viableMoveX.length; i++){
        let moveX = x+viableMoveX[i];
        let moveY = y+viableMoveY[i];

        if(moveX >= 0 && moveX < widthX && moveY >= 0 && moveY < heightY && obstacleGrid[moveX][moveY] === false) {
            neighbours.push({x: moveX, y: moveY});
        }
    }
    // console.log("Neighbours of : ",x,y,neighbours);
    return neighbours;
}

export const DoBFS = (start,end,obstacleGrid) => {
    let dX = obstacleGrid[0].length;
    let dY = obstacleGrid.length;

    let isVisited = new Array(dY);
    for(let i = 0; i < dX; i++){
        let tempArr = new Array(dX);
        tempArr.fill(false);
        isVisited[i] = tempArr;
    }
    let travelledFrom = new Array(dY);
    for(let i = 0; i < dX; i++){
        let tempArr = new Array(dX);
        tempArr.fill({x:-1,y: -1});
        travelledFrom[i] = tempArr;
    }

    let neighbours;
    let current = start;
    isVisited[current.x][current.y] = true;
    let pathQueue = [];
    pathQueue.push(current);

    while ((current.x !== end.x || current.y !== end.y) && pathQueue.length > 0){
        current = pathQueue.shift();
        neighbours = getNeighbours(current.x,current.y,dX,dY,obstacleGrid);

        for(let nei of neighbours){
            if(isVisited[nei.x][nei.y] === false){
                pathQueue.push(nei);
                isVisited[nei.x][nei.y] = true;
                travelledFrom[nei.x][nei.y] = current;

            }
        }
    }
    // console.log("END OF BFS",current,end);

    let path = [];

    if(current.x === end.x && current.y === end.y){
        let pc = end;
        path.push(pc);
        while ( pc.x !== start.x || pc.y !== start.y){
            path.push(pc);
            pc=travelledFrom[pc.x][pc.y];
        }
        path.push(start);

        return {reached :true, path: path.reverse()};
    }
    return({reached :false, path: []});
}