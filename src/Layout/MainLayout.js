import React from "react";
import Sidebar from "./Sidebar";

import {
    Row,
    Col
} from 'reactstrap';

const MainLayout = props => {

    return(
        <React.Fragment>
            <Row>
                <Col lg={2} md={3} sm={0}>
                    <Sidebar links={props.links}/>
                </Col>
                <Col lg={10} md={8} sm={12} className="container-fluid">
                    {props.children}
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default MainLayout;