import React, {useEffect, useRef} from "react";

import {
    Row,
    Col,
} from 'reactstrap';

const ChapterOne = () => {
    const canvasRef = useRef();

    const maxWidth = 600;
    const maxHeight = 600;

    useEffect(() => {
        let canvas = canvasRef.current;

        let ctx = canvas.getContext('2d');
        // ctx.fillStyle = "rgb(20,50,90)";
        // ctx.fillRect(10,10,50,50);
        // ctx.fillStyle = "rgba(200,70,70,0.7)";
        // ctx.fillRect(20,20,50,50);
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect(0,0,maxHeight,maxWidth);
        ctx.fillStyle = "rgba(0,138,150,0.7)";


        let x = 1;
        let y = 1;
        let rW = 19;
        let rH = 19;

        let posOfSq = [];

        while(true){
            ctx.strokeRect(x,y,rW,rH);
            posOfSq.push({x : x, y : y});
            if(x < maxHeight){
                x += rW + 1;
            }
            else {
                y += rH + 1;
                x = 1;
            }
            if(y > maxHeight){
                break;
            }
        }
        let count = 0;
        let interval = setInterval(() => {
            let rect = posOfSq[Math.floor(posOfSq.length * Math.random())];

            ctx.fillRect(rect.x,rect.y,rW,rH);
            count += 1;
            if(count > 500) {
                clearInterval(interval);
            }
        },10 )
    }, []);



    return (
        <React.Fragment>
                <Row>
                    <Col>
                        <h4>Chapter 1 - Drawing Shapes</h4>
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

export default ChapterOne;