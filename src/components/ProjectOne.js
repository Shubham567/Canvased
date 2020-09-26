import React, {useEffect, useRef} from "react";
import {getRGBAString} from "../functions/ColorFunctions";
import {drawGrid, getGridCenter} from "../functions/GridFunctions";
import {Col, Container, Row} from "reactstrap";
import {posToArray} from "../functions/ArrayFunctions";
import {DoBFS} from "../functions/GridDFS";


const ProjectOne = () => {
    const canvasRef = useRef();

    const maxWidth = 600;
    const maxHeight = 600;

    useEffect(() => {
        let canvas = canvasRef.current;

        let gridSize = 10;

        let ctx = canvas.getContext('2d');

        ctx.strokeStyle = getRGBAString(150,150,150,0.3);
        let gridPos = drawGrid(ctx,maxWidth,maxHeight,gridSize,gridSize);
        let grid = posToArray(gridPos,maxWidth/gridSize, maxHeight/gridSize);

        // console.log(grid);

        let dX = grid[0].length;
        let dY = grid.length;
        let percentObs = 0.5;

        let startingPoint = {x : Math.floor(Math.random()*dX), y : 0};
        let endPoint = {x : Math.floor(Math.random()*dX), y  : dY-1};

        let hasObstacle  = new Array(dY);
        for(let i = 0; i < dY; i++){
            let tempArr = new Array(dX);
            tempArr.fill(false);
            hasObstacle[i] = tempArr;
        }



        ctx.fillStyle = getRGBAString(0,140,150,0.7);

        for(let i = 0; i < (dY-2)*(dX)*percentObs;i++) {
            let rJ = Math.floor(Math.random() * (dY-2)) + 1;
            let rI = Math.floor(Math.random() * dX);
            if(hasObstacle[rI][rJ] === false ) {
                hasObstacle[rI][rJ] = true;
                ctx.fillRect(grid[rI][rJ].y, grid[rI][rJ].x, gridSize, gridSize);
            }
        }

        // console.log(grid);

        ctx.fillStyle = getRGBAString(0,180,30,0.9);
        ctx.fillRect(grid[startingPoint.x][startingPoint.y].y,grid[startingPoint.x][startingPoint.y].x,gridSize,gridSize);
        ctx.fillStyle = getRGBAString(200,30,0,0.9);
        ctx.fillRect(grid[endPoint.x][endPoint.y].y,grid[endPoint.x][endPoint.y].x,gridSize,gridSize);

        let res = DoBFS(startingPoint,endPoint,hasObstacle);

        if(res.reached){
            ctx.beginPath();
            // for(let sq of res.path){
            //     let chosenGrid = grid[sq.y][sq.x];
            //     let gridPoint = getGridCenter(chosenGrid.x,chosenGrid.y,gridSize,gridSize);
            //     ctx.lineTo(gridPoint.x,gridPoint.y);
            // }
            // ctx.strokeStyle = getRGBAString(140,140,150,1);
            // ctx.stroke();
            let ind = 0;
            let interval = setInterval(() => {

                let sq = res.path[ind];
                let chosenGrid = grid[sq.y][sq.x];
                // console.log("Ran",ind,res.path.length,sq,chosenGrid);
                let gridPoint = getGridCenter(chosenGrid.x,chosenGrid.y,gridSize,gridSize);
                if((sq.x !== startingPoint.x || sq.y !== startingPoint.y) && (sq.x !== endPoint.x || sq.y !== endPoint.y)) {
                    ctx.fillStyle = getRGBAString(240, 240, 150, 0.6);
                    ctx.fillRect(chosenGrid.x, chosenGrid.y, gridSize, gridSize);
                }
                    ctx.lineTo(gridPoint.x, gridPoint.y);
                    ctx.stroke();


                ind++;
                if(ind === res.path.length){
                    clearInterval(interval);
                }
            }, 4000/res.path.length);
        }


    }, []);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <h4>Project - Shortest Path</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <canvas ref={canvasRef} className="border" width={maxWidth} height={maxHeight}>
                            this will never get rendered
                        </canvas>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );

}

export default ProjectOne;