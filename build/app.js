"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = __importStar(require("body-parser"));
var main_route_1 = require("./routes/main.route");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.router = new main_route_1.MainRoute(this.app);
        this.router.initRouters();
    }
    App.prototype.config = function () {
        // support application/json
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map