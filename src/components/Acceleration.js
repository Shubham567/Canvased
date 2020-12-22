import React, {useEffect, useRef} from "react";

import {
    Row,
    Col,
} from 'reactstrap';

const Acceleration = () => {
    const canvasRef = useRef();

    const maxWidth = 600;
    const maxHeight = 850;

    let top = 20;
    let gravity = 5;

    let interval;

    const radius = 10;

    const drawAcceleration = (ctx,startTime) => {
        let elapseTime = new Date().getTime() - startTime;

        let pos = top+(gravity*(elapseTime/100)**2)/2;
        ctx.clearRect(0, 0, maxWidth, maxHeight);
        ctx.fillStyle = "rgba(0,138,150,0.7)";

        ctx.beginPath();
        ctx.arc(maxWidth/2 - radius, pos, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();



        // gravity+= gravity+1;
        ctx.fill();
        if(pos+radius > maxHeight){
            clearInterval(interval);
        }
    }


    useEffect(() => {
        let canvas = canvasRef.current;

        let ctx = canvas.getContext('2d');

        // ctx.fillStyle = "rgb(255,255,255)";
        let time = new Date().getTime();
        interval = setInterval(() => {
            window.requestAnimationFrame(() => drawAcceleration(ctx,time));
        }, 1);





    }, []);



    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h4>Chapter 4 - Acceleration</h4>
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

export default Acceleration;