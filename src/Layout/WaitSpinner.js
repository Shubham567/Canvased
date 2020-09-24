import React from "react";

import {
    Row, Col, Spinner
} from 'reactstrap';

const WaitSpinner = () => {
    return(
        <Row className="waitSpinner">
            <Col>
                <Spinner type="grow" className="mx-auto text-center" />
            </Col>
        </Row>
    )
}

export default WaitSpinner;