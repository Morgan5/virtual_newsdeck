// Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

// Redux
import { updateArrangement, updateArrangementNoRecalc } from "redux/actions/session";

// Components
import Newspaper from "components/newspaper/Newspaper";

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e) {
        e.preventDefault();

        // First check if we need to update a cell that the newspaper is coming from
        if (e.dataTransfer.types.includes("parent")) {
            // Converting to number so that the === comparison with the list index of the arrangement will work
            const from = Number(e.dataTransfer.getData("parent"));
            const currentNewspaperId = this.props.arrangement[this.props.index];
            this.props.updateArrangementNoRecalc(from, currentNewspaperId);
        }

        // Get the incoming newspaper ID, then update the newspaper in this cell
        const id = Number(e.dataTransfer.getData("id"));
        this.props.updateArrangement(this.props.index, id);
    }
    
    // Get either nothing (if the arrangement isnt ready yet),
    // or the newspaper object in the cell
    getContent() {
        if (this.props.arrangement !== null) {
            return (
                <Newspaper id={this.props.arrangement[this.props.index]} parent={this.props.index}/>
            );
        }
        return null;
    }

    render () {
        return (
            <Card className="newsdeck-cell" 
                onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)}>
                <div className="inner-newsdeck-cell">
                    {this.getContent()}
                </div>
            </Card>
        );
    }

};

const mapStateToProps = (state) => {
    return {
        arrangement: state.session.arrangement,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateArrangement: (cellIndex, newspaperId) => dispatch(updateArrangement(cellIndex, newspaperId)),
        updateArrangementNoRecalc: (cellIndex, newspaperId) => dispatch(updateArrangementNoRecalc(cellIndex, newspaperId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
