// Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Grid } from "semantic-ui-react";

// Components
import Cell from "components/newsdeck/Cell";

class Newsdeck extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        // Newsdeck container that is ROWS * COLUMNS in size
        return (
            <Grid className="newsdeck-container" centered>
                <Grid.Column>
                    <Card.Group className="newsdeck" itemsPerRow={this.props.columns}>
                        {
                            Array.from(Array(this.props.rows * this.props.columns).keys()).map((key) => {
                                return (<Cell index={key} key={"cell"+key}/>);
                            })
                        }
                    </Card.Group>
                </Grid.Column>
            </Grid>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        rows: state.session.rows,
        columns: state.session.columns
    };
};

export default connect(mapStateToProps, null)(Newsdeck);