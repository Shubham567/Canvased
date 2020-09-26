import React, {useEffect, useRef} from "react";
import {Col, Container, Row} from "reactstrap";

const ScribblePad = (props) =>{
    const maxWidth = 500;
    const maxHeight = 500;
    const canvasRef = useRef();

    useEffect(() => {
        let ctx;
    }, []);

    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <h4>Scribble Pad</h4>
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
};

export default ScribblePad;