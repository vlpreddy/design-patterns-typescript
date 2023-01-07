"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.getInstance = function () {
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient();
        }
        return HttpClient.instance;
    };
    HttpClient.prototype.get = function (url) {
        return (0, node_fetch_1["default"])(url).then(function (response) { return response.json(); });
    };
    HttpClient.prototype.post = function (url, data) {
        return (0, node_fetch_1["default"])(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    return HttpClient;
}());
var starwars = HttpClient.getInstance();
starwars.get('http://swapi.dev/api/people/1/').then(function (response) {
    console.log(response);
});
