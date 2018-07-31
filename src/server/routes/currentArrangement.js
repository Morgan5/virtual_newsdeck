// Function to get the current arrangement

(function() {
    "use strict";

    // Load dependencies
    const axios = require("axios");

    // Create url
    const url = `https://secure-cliffs-25767.herokuapp.com/hivery/current_arrangement`;

    module.exports = (req, res, next) => {

        axios.get(url)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(null);
        });
    };
}());