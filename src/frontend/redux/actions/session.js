import axios from "axios";

// Some constants
import { defaultArrangement, defaultNewspapers }  from '../constants'

// Set the value of the predicted sales for the current arrangement
function setPredictedSales(sales) {
    return {
        type: "SET_PREDICTED_SALES",
        sales
    };
}

// Get and then set the predicted Sales for the current arrangement
function calculateSales() {
    return function (dispatch, getState) {
        // Send the current arrangement
        const parameters = { arr:getState().session.arrangement };
        axios.get("/predictedSales", {params: parameters})
            .then(res => {
                dispatch(setPredictedSales(res.data.predicted_sales.toFixed(2)));
            })
            .catch(err => {
                
            });
    }
}

// Update the newspaper in a single cell of the newsdeck
export function updateArrangement(cellIndex, newspaperId) {
    return function (dispatch) {

        // Update the arrangement
        dispatch(updateArrangementNoRecalc(cellIndex, newspaperId));

        // Recalcuate the Sales
        dispatch(calculateSales());
    }
}

// Update the newspaper in a single cell of the newsdeck without recalculating Sales
export function updateArrangementNoRecalc(cellIndex, newspaperId) {
    return {
        type: "UPDATE_ARRANGEMENT",
        cellIndex,
        newspaperId
    };
}

// Set the inital arrangement of the newspapers in the newsdeck
export function setInitialArrangement() {
    return function (dispatch) {
        axios.get("/currentArrangement")
            .then(res => {
                for (let obj of res.data.arrangement) {
                    // Set all the newspapers without calculating predicted sales
                    dispatch(updateArrangementNoRecalc(obj.cell_number - 1, obj.newspaper_id))
                }
                // Calcuate the Sales
                dispatch(calculateSales());
            })
            .catch(err => {
                // If theres an error, use our predefined constants
                for (let obj of defaultArrangement) {
                    dispatch(updateArrangementNoRecalc(obj.cell_number - 1, obj.newspaper_id))
                }
            });
    }
}

// Set the newspapers object that gives an ID, name and price for each newspaper
function setNewspapers(newspapers) {
    return {
        type: "SET_NEWSPAPERS",
        newspapers
    };
}

// Get the newspapers object that gives and ID, name and price for each newspaper
export function getNewspapers() {
    return function (dispatch) {
        axios.get("/newspapers")
            .then(res => {
                dispatch(setNewspapers(res.data));
            })
            .catch(err => {
                // If theres an error, use our predefined constants
                dispatch(setNewspapers(defaultNewspapers));
            });
    }
}
