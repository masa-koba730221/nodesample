
import * as Express from 'express';
import * as bodyParser from 'body-parser';
import * as Mongoose from 'mongoose';

export class Main {
    private app: Express.Application;
    private port = 3000;

    constructor() {
        this.app = Express();
        this.init();
        this.initMongoose();

        this.app.listen(this.port, '0.0.0.0', () => {
            console.log('http server listen to port:' + this.port);
        });
    }

    init() {
        this.app.use(bodyParser.urlencoded({ extended : true })); // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.json()); // parse application/json
        this.app.use(Express.static('./public'));
    }

    initMongoose() {
        Mongoose.connect('mongodb://mongodb:27017/user', { useNewUrlParser: true }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('connection success!');
            }
        });
    }
}

new Main();
