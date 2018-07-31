// Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid } from "semantic-ui-react";

// Components
import Newspaper from "components/newspaper/Newspaper";

class NewspapersSidebar extends Component {

    constructor(props) {
        super(props);
    }   

    render () {
        // A sidebar that contains a column of all the available newspapers to pull from
        return (
            <Menu className="newspapers-sidebar" fluid inverted vertical>
                <Menu.Item>
                    <Menu.Header>
                        {"All Newspapers"}
                    </Menu.Header>
                </Menu.Item>
                <Grid className="no-margin-grid" centered padded={false}>
                    <Grid.Column>
                        {   
                            this.props.newspapers !== null ?
                            Object.keys(this.props.newspapers).map((key) => {
                                return (
                                    <Menu.Item className="sidebar-newspaper-container" key={"sidebar-newspaper"+key}>
                                        <div className="sidebar-heading">
                                            {this.props.newspapers[key].name}
                                        </div>
                                        <Newspaper id={key}/>
                                    </Menu.Item>
                                );
                            })
                            : null
                        }
                    </Grid.Column>
                </Grid>
            </Menu>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        newspapers: state.session.newspapers,
    };
};

export default connect(mapStateToProps, null)(NewspapersSidebar);