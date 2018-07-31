// Some constants such as rows and columns
import { defaultRows, defaultColumns}  from '../constants'

const initialState = {
    rows: defaultRows,
    columns: defaultColumns,
    arrangement: Array(defaultRows * defaultColumns).fill(null),
    newspapers: null,
    predictedSales: null
};

export function session(state = initialState, action) {
    switch (action.type) {
    case "SET_PREDICTED_SALES":
        return {
            ...state,
            predictedSales: action.sales
        };
    case "SET_NEWSPAPERS":
        return {
            ...state,
            newspapers: action.newspapers
        };
    case "UPDATE_ARRANGEMENT":
        return {
            ...state,
            arrangement: state.arrangement.map((newspaper, index) => {
                if (index === action.cellIndex) {
                    newspaper = action.newspaperId;
                }
                return newspaper;
            })
        };
    case "RESET_SESSION":
        return initialState;
    default:
        return state;
    }
}