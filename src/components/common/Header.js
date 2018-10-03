import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import ProjectDropDown from '../project/ProjectDropDown';

const Header = ({ loading }) => {
    return (
        <div>
            <h1><b>Talentica</b></h1>
            <ProjectDropDown/>
            <nav>
                <IndexLink to="/" activeClassName="active">Configuration</IndexLink>
                {" | "}
                {/* <IndexLink to="/home" activeClassName="active">Home</IndexLink>
                {" | "}
                <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
                {" | "} */}
                <Link to="/execution" activeClassName="active">Execution</Link>
            </nav>
        </div>
    );
};

export default Header;
