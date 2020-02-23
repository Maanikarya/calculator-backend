import { Request, Response } from "express";
import * as express from "express";
import { MainController } from "../controllers/main.controller"

/**
 * Class to handle and manage all the routes.
 */
export class MainRoute
{
    mainController: MainController = new MainController();              // User controller.
    app: express.Application;                                           // Express app.

    constructor(app: express.Application)
    {
        this.app = app;
    }

    /**
     * Initializes all the routes.
     */
    public initRouters(): void
    {
        this.initBaseRoutes();
    }

    private initBaseRoutes(): void
    {
        this.app.route('/welcome')
            .post(this.mainController.showWelcomeMessageOnPost)                        // POST Request Received. 
            .get(this.mainController.showWelcomeMessageOnGet);                          // GET Request Received.
        
        this.app.route('/hello')
        .post(this.mainController.showWelcomeMessageOnPost);

        this.app.get("/" ,function(req,res)
        {
            res.send("got a get request");
        })

        this.app.post("/" , function(req,res)
        {
            console.log("hello "+ req.body.name + " " + req.body.lname);
            res.send("maanik post request");
        })

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

    }
}