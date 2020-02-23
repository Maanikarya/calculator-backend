import { Request, Response } from 'express';

export class MainController {
    /**@
     * Shows the welcome message of the routed page when POST request is sent.
     * @param req Request received.
     * @param res Response to send.
     */
    public showWelcomeMessageOnPost(req: Request, res: Response) {
        console.log("Data Received : First Name = " + req.body.name + " and Last Name : " + req.body.lname);
        res.status(200).send("Welcome on the POST page Mr. " + req.body.name + " " + req.body.lname);
    }

    /**
     * Shows the welcome message of the routed page when GET request is sent.
     * @param req Request received.
     * @param res Response to send.
     */
    public showWelcomeMessageOnGet(req: Request, res: Response) {
        res.status(200).send("<h1>Welcome on the GET page</h1>");
    }

    public sum = (req: Request, res: Response) => {
        var a = req.body.number1;
        var b = req.body.number2;

        if(this.isEmpty(a)|| this.isEmpty(b))
        {
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

    }

    public multiply = (req: Request, res: Response) => {
        var a = req.body.number1;
        var b = req.body.number2;

        if(this.isEmpty(a)|| this.isEmpty(b))
        {
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

    }

    public subtract = (req: Request, res: Response) => {
        var a = req.body.number1;
        var b = req.body.number2;

        if(this.isEmpty(a)|| this.isEmpty(b))
        {
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

    }

    public divide = (req: Request, res: Response) => {
        var a = req.body.number1;
        var b = req.body.number2;

        if(this.isEmpty(a)|| this.isEmpty(b))
        {
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

    }

    private isEmpty(str: string){
        return str.length === 0 || str.trim().length == 0;
    }
}