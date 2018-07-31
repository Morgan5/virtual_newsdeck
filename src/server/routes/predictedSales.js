// Function to calculate the predicted sales

(function() {
    "use strict";

    // Load dependencies
    const axios = require("axios");

    // Create url
    const baseUrl = `https://secure-cliffs-25767.herokuapp.com/hivery/get_predicted_sales`;

    module.exports = (req, res, next) => {
        const arrangement = `?arrangement=${req.query.arr}`;

        axios.get(baseUrl + arrangement)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(null);
        });
    };
}());