// Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

// Redux
import { getNewspapers, setInitialArrangement } from "redux/actions/session";

// Components
import Header from "components/header/Header"
import NewspapersSidebar from "components/sidebar/NewspapersSidebar"
import Newsdeck from "components/newsdeck/Newsdeck";
import Statsbar from "components/statsbar/Statsbar"

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNewspapers();
        this.props.setInitialArrangement();
    }

    render () {
        return (
            <div>
                <Header/>
                <Grid className="main-grid no-margin-grid" padded={false}>
                    <Grid.Column className="no-padding-column" width={3}>
                        <NewspapersSidebar/>
                    </Grid.Column>
                    <Grid.Column className="no-padding-column" width={1}/>
                    <Grid.Column className="no-padding-column" width={8}>
                        <Newsdeck/>
                    </Grid.Column>
                    <Grid.Column className="no-padding-column" width={1}>
                    </Grid.Column>
                    <Grid.Column className="no-padding-column" width={3}>
                        <Statsbar/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewspapers: () => dispatch(getNewspapers()),
        setInitialArrangement: () => dispatch(setInitialArrangement())
    };
};

export default connect(null, mapDispatchToProps)(App);

