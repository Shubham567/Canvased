import React, {useEffect, useRef} from "react";

import {
    Row,
    Col,
} from 'reactstrap';

const ProjectileMotion = () => {
    const canvasRef = useRef();

    let startTime;

    const maxWidth = 800;
    const maxHeight = 400;

    let initX = 0;
    let initY = maxHeight;

    let gravity = 10;

    let vX = 40;
    let vY = -80;

    let interval;

    let resist = 0.98;

    const radius = 10;

    const drawAcceleration = (ctx) => {
        let elapseTime = (new Date().getTime() - startTime)/100;


        let posX = initX + vX*elapseTime;
        let posY = initY + vY*elapseTime + (0.5)*gravity*(elapseTime*elapseTime);


        ctx.clearRect(0, 0, maxWidth, maxHeight);
        ctx.fillStyle = "rgba(0,138,150,0.7)";

        if(posY + radius >= maxHeight){
            initY = maxHeight - radius;
            initX = posX;
            vY = -(vY + gravity*elapseTime)*resist;
            startTime = new Date().getTime();
        }
        else if(posY - radius <= 0){
            initY = 0 + radius;
            initX = posX;
            vY = -(vY + gravity*elapseTime)*resist;
            startTime = new Date().getTime();
        }
        if(posX + radius >= maxWidth){
            initX = maxWidth - radius;
            initY = posY;
            vX = -vX*resist;
            vY = (vY + gravity*elapseTime);
            startTime = new Date().getTime();
        }
        else if(posX  - radius <= 0){
            initX = 0 + radius;
            initY = posY;
            vX = -vX*resist;
            vY = (vY + gravity*elapseTime);
            startTime = new Date().getTime();
        }

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
            window.requestAnimationFrame(() => drawAcceleration(ctx));
        }, 10);


    }, []);



    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h4>Project 2 - Projectile Motion</h4>
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

export default ProjectileMotion;