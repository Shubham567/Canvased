import React, {useEffect, useRef} from "react";

import {
    Row,
    Col,
} from 'reactstrap';

const MoveXY = () => {
    const canvasRef = useRef();

    let startTime;

    const maxWidth = 600;
    const maxHeight = 600;

    let initX = Math.floor(Math.random() * maxWidth);
    let initY = Math.floor(Math.random() * maxHeight);

    let gravity = 5;

    let vX = Math.floor(Math.random() * maxWidth / 10);
    let vY = Math.floor(Math.random() * maxHeight / 10);

    let interval;

    const radius = 10;

    const drawXYPos = (ctx) => {
        let elapseTime = (new Date().getTime() - startTime)/100;

        let posX = initX + vX*elapseTime;
        let posY = initY + vY*elapseTime;

        if(posY + radius >= maxHeight){
            initY = maxHeight - radius;
            initX = posX;
            vY = -vY;
            startTime = new Date().getTime();
        }
        else if(posY - radius <= 0){
            initY = 0 + radius;
            initX = posX;
            vY = -vY;
            startTime = new Date().getTime();
        }
        if(posX + radius >= maxWidth){
            initX = maxWidth - radius;
            initY = posY;
            vX = -vX;
            startTime = new Date().getTime();
        }
        else if(posX  - radius <= 0){
            initX = 0 + radius;
            initY = posY;
            vX = -vX;
            startTime = new Date().getTime();
        }

        ctx.clearRect(0, 0, maxWidth, maxHeight);
        ctx.fillStyle = "rgba(0,138,150,0.7)";

        ctx.beginPath();
        ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "#af1f00";
        ctx.stroke();
        ctx.fill();


    }


    useEffect(() => {
        let canvas = canvasRef.current;

        let ctx = canvas.getContext('2d');

        // ctx.fillStyle = "rgb(255,255,255)";
        startTime = new Date().getTime();
        interval = setInterval(() => {
            window.requestAnimationFrame(() => drawXYPos(ctx));
        }, 10);


    }, []);



    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h4>Chapter 6 - Free Bounce</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <canvas ref={canvasRef} className="border" width={maxWidth} height={maxHeight}>
                        this will never get rendered
                    </canvas>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default MoveXY;