import React, {useEffect, useRef} from "react";

import {
    Row,
    Col,
} from 'reactstrap';

const Bounce = () => {
    const canvasRef = useRef();

    let startTime;

    const maxWidth = 600;
    const maxHeight = 600;

    let init = 0;
    let gravity = 5;

    let velocity = 50;

    let interval;

    const radius = 10;

    const drawAcceleration = (ctx) => {
        let elapseTime = (new Date().getTime() - startTime)/100;

        let pos = init + velocity*elapseTime;
        ctx.clearRect(0, 0, maxWidth, maxHeight);
        ctx.fillStyle = "rgba(0,138,150,0.7)";

        ctx.beginPath();
        ctx.arc(maxWidth/2 - radius, pos, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.strokeStyle = "#af1f00";
        ctx.stroke();
        ctx.fill();

        if(pos > maxHeight){
            init = maxHeight;
            velocity = -velocity;
            startTime = new Date().getTime();
        }
        else if(pos < 0){
            init = 0;
            velocity = -velocity;
            startTime = new Date().getTime();
        }
    }


    useEffect(() => {
        let canvas = canvasRef.current;

        let ctx = canvas.getContext('2d');

        // ctx.fillStyle = "rgb(255,255,255)";
        startTime = new Date().getTime();
        interval = setInterval(() => {
            window.requestAnimationFrame(() => drawAcceleration(ctx));
        }, 10);


    }, []);



    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h4>Chapter 5 - Basic Bounce</h4>
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

export default Bounce;