import React from "react";
import {
    Button,
    Nav,
    NavItem,

} from 'reactstrap';

import {Link} from "react-router-dom";

const Sidebar = props => {
    let data = props.links;


    let navItems = data.map((d,i) => <NavItem key={i} className="pl-3"><Link to={d.link} className="text-light"><Button block className=" text-left" color="dark"> {d.title} </Button></Link></NavItem>);

    return(
        <React.Fragment>
            <Nav vertical className="bg-dark p-1 sideBar">
                <NavItem className="ml-1"><strong><Link  className="text-light" to={"/"}><h4>Canvas Learning</h4></Link></strong></NavItem>
                {navItems}
            </Nav>
        </React.Fragment>
    )
}

export default Sidebar;