import React from "react";

import {useEffect, useRef} from "react";

import {
    Row,
    Col,
    Container,
} from 'reactstrap';

import {getRandomColorWithA} from "../functions/ColorFunctions";
import {drawGrid} from "../functions/GridFunctions";

const ChapterTwo = () => {
    const canvasRef = useRef();

    const maxWidth = 800;
    const maxHeight = 600;

    useEffect(() => {
        let canvas = canvasRef.current;

        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect(0,0,maxHeight,maxWidth);
        ctx.fillStyle = "rgba(0,138,150,0.7)";


        let x = 0;
        let y = 0;
        let rW = 10;
        let rH = 10;

        ctx.strokeStyle = getRandomColorWithA(0.5);



        setInterval(() => {
            ctx.clearRect(0,0,maxWidth,maxHeight);
            drawGrid(ctx,maxWidth,maxHeight,rW,rH,x,y,1,(px,py) => {
            ctx.fillStyle = getRandomColorWithA(1);
            ctx.fillRect(px,py,rW,rH);
            });

        },25 );
    }, []);



    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <h4>Chapter 2 - Old Tv</h4>
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
    )
}

export default ChapterTwo;