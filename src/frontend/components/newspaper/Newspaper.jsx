// Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Label } from "semantic-ui-react";

class Newspaper extends Component {

    constructor(props) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(e) {
        // Add the newspaper id and parent cell (if it exists)
        // to the info that will be dragged
        e.dataTransfer.setData("id", this.props.id);
        if (this.props.parent !== undefined && this.props.parent !== null) {
            e.dataTransfer.setData("parent", this.props.parent);
        }
    }

    render () {
        if (this.props.newspapers !== null && this.props.id !== null) {
            const imgUrl = this.props.newspapers[this.props.id].img;

            // Set proper css class depending on if it is in the newsdeck or not
            let className = "newspaper";
            if (this.props.parent !== undefined) {
                className += " on-display-newspaper";
            }

            // Make the price label
            const priceLabel = (
                <Label as="a" color="red" ribbon="right">
                    {`$${this.props.newspapers[this.props.id].price.toFixed(2)}`}
                </Label>
            );
            
            // Return the newspaper image with the price label
            return (
                <div className={className} draggable onDragStart={(e) => this.onDragStart(e)}>
                    <Image className="newspaper-image" fluid centered={true} src={imgUrl} label={priceLabel}/>
                </div>
            );
        }
        return null;
    }

};

const mapStateToProps = (state) => {
    return {
        newspapers: state.session.newspapers
    };
};

export default connect(mapStateToProps, null)(Newspaper);