// Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Message, Sticky } from "semantic-ui-react";

// Components

class Statsbar extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        // A message bar that shows the predicted sales
        return (
            <div className="statsbar" ref="statsbarRef">
                <Sticky context={this.refs.statsbarRef}>
                    <Message className="statsbar-message">
                        <Message.Header>Predicted Sales</Message.Header>
                        {
                            this.props.predictedSales !== null ?
                            `$${this.props.predictedSales}` : "Unknown"
                        }
                    </Message>
                </Sticky>
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        predictedSales: state.session.predictedSales
    };
};

export default connect(mapStateToProps, null)(Statsbar);