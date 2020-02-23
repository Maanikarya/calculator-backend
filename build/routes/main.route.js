"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_controller_1 = require("../controllers/main.controller");
/**
 * Class to handle and manage all the routes.
 */
var MainRoute = /** @class */ (function () {
    function MainRoute(app) {
        this.mainController = new main_controller_1.MainController(); // User controller.
        this.app = app;
    }
    /**
     * Initializes all the routes.
     */
    MainRoute.prototype.initRouters = function () {
        this.initBaseRoutes();
    };
    MainRoute.prototype.initBaseRoutes = function () {
        this.app.route('/welcome')
            .post(this.mainController.showWelcomeMessageOnPost) // POST Request Received. 
            .get(this.mainController.showWelcomeMessageOnGet); // GET Request Received.
        this.app.route('/hello')
            .post(this.mainController.showWelcomeMessageOnPost);
        this.app.get("/", function (req, res) {
            res.send("got a get request");
        });
        this.app.post("/", function (req, res) {
            console.log("hello " + req.body.name + " " + req.body.lname);
            res.send("maanik post request");
        });
        this.app.route('/sum')
            .get(this.mainController.sum);
        this.app.route('/subtract')
            .get(this.mainController.subtract);
        this.app.route('/multiply')
            .get(this.mainController.multiply);
        this.app.route('/divide')
            .get(this.mainController.divide);
        this.app.route('/name')
            .all(this.mainController.divide);
    };
    return MainRoute;
}());
exports.MainRoute = MainRoute;
//# sourceMappingURL=main.route.js.map