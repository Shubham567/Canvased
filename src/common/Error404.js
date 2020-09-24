import React from "react";

import {
    Row,
    Col,
} from 'reactstrap';

const Error404 = () => {

    return(
        <React.Fragment>
            <Row>
                <Col>
                    <h4>Page Not Found</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Last route in order
                    </p>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Error404;