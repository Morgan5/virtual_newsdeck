// Modules
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {

    render () {
        // Just a simple header with a title
        return (
            <Menu className="header" inverted>
                <Menu.Item>
                    <Menu.Header>
                        Virtual Newsdeck
                    </Menu.Header>
                </Menu.Item>
            </Menu>
        );
    }

};

export default (Header);