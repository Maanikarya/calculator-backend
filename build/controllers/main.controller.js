"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainController = /** @class */ (function () {
    function MainController() {
        var _this = this;
        this.sum = function (req, res) {
            var a = req.body.number1;
            var b = req.body.number2;
            if (_this.isEmpty(a) || _this.isEmpty(b)) {
                res.status(200).json({
                    "success": false,
                    "message": "One or more Params are empty."
                });
            }
            else if (!isNaN(a) && !isNaN(b)) {
                var c = Number(a) + Number(b);
                res.status(200).json({
                    "success": true,
                    "result": c,
                });
            }
            else {
                res.status(200).json({
                    "success": false,
                    "message": "Invalid value entered."
                });
            }
        };
        this.multiply = function (req, res) {
            var a = req.body.number1;
            var b = req.body.number2;
            if (_this.isEmpty(a) || _this.isEmpty(b)) {
                res.status(200).json({
                    "success": false,
                    "message": "One or more Params are empty."
                });
            }
            else if (!isNaN(a) && !isNaN(b)) {
                var c = Number(a) * Number(b);
                res.status(200).json({
                    "success": true,
                    "result": c,
                });
            }
            else {
                res.status(200).json({
                    "success": false,
                    "message": "Invalid value entered."
                });
            }
        };
        this.subtract = function (req, res) {
            var a = req.body.number1;
            var b = req.body.number2;
            if (_this.isEmpty(a) || _this.isEmpty(b)) {
                res.status(200).json({
                    "success": false,
                    "message": "One or more Params are empty."
                });
            }
            else if (!isNaN(a) && !isNaN(b)) {
                var c = Number(a) - Number(b);
                res.status(200).json({
                    "success": true,
                    "result": c,
                });
            }
            else {
                res.status(200).json({
                    "success": false,
                    "message": "Invalid value entered."
                });
            }
        };
        this.divide = function (req, res) {
            var a = req.body.number1;
            var b = req.body.number2;
            if (_this.isEmpty(a) || _this.isEmpty(b)) {
                res.status(200).json({
                    "success": false,
                    "message": "One or more Params are empty."
                });
            }
            else if (!isNaN(a) && !isNaN(b)) {
                var c = Number(a) / Number(b);
                res.status(200).json({
                    "success": true,
                    "result": c,
                });
            }
            else {
                res.status(200).json({
                    "success": false,
                    "message": "Invalid value entered."
                });
            }
        };
    }
    /**@
     * Shows the welcome message of the routed page when POST request is sent.
     * @param req Request received.
     * @param res Response to send.
     */
    MainController.prototype.showWelcomeMessageOnPost = function (req, res) {
        console.log("Data Received : First Name = " + req.body.name + " and Last Name : " + req.body.lname);
        res.status(200).send("Welcome on the POST page Mr. " + req.body.name + " " + req.body.lname);
    };
    /**
     * Shows the welcome message of the routed page when GET request is sent.
     * @param req Request received.
     * @param res Response to send.
     */
    MainController.prototype.showWelcomeMessageOnGet = function (req, res) {
        res.status(200).send("<h1>Welcome on the GET page</h1>");
    };
    MainController.prototype.isEmpty = function (str) {
        return str.length === 0 || str.trim().length == 0;
    };
    return MainController;
}());
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map