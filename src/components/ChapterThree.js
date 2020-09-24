import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "reactstrap";
import {getRGBAString} from "../functions/ColorFunctions";
import {drawGrid, getGridCenter} from "../functions/GridFunctions";

export const ChapterThree = () => {
    const canvasRef = useRef();

    const maxWidth = 600;
    const maxHeight = 600;

    useEffect(() => {
        let canvas = canvasRef.current;

        let gridSize = 20;

        let ctx = canvas.getContext('2d');

        ctx.strokeStyle = getRGBAString(150,150,150,0.3);
        let gridPos = drawGrid(ctx,maxWidth,maxHeight,gridSize,gridSize);

        ctx.strokeStyle = getRGBAString(30,30,30,0.7);
        ctx.beginPath();

        // for(let i = 0; i < 40; i++){
        //     let randBox = gridPos[Math.floor(Math.random()*gridPos.length)];
        //     let center = getGridCenter(randBox.x,randBox.y,gridSize,gridSize);
        //     ctx.lineTo(center.x,center.y);
        // }

        let c = 0;
        let interval = setInterval(()=> {
            let randBox = gridPos[Math.floor(Math.random()*gridPos.length)];
            let center = getGridCenter(randBox.x,randBox.y,gridSize,gridSize);
            ctx.lineTo(center.x,center.y);
            ctx.stroke();
            c++;
            if(c > 10){
                clearInterval(interval);
            }
        },200);






    }, []);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <h4>Chapter 3 - Path</h4>
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
};

export default ChapterThree;