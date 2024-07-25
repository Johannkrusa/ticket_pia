import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routers';
import path from 'path';

export default class App {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || '8000', 10);

    this.configureStaticFiles();
    this.configureMiddleware();
    this.configureRoutes();
    this.configureErrorHandling();
  }

  private configureMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  private configureStaticFiles() {
    // Serve static files from the "src/public" directory
    this.app.use('/public', express.static(path.join(__dirname, 'public')));
  }
  
  private configureRoutes() {
    this.app.use(router);
    this.app.get('/', (req: Request, res: Response) => {
      res.send('App.get is in working condition');
    });
  }

  private configureErrorHandling() {
    this.app.use((error: any, req: Request, res: Response, next: NextFunction) => {
      res.status(error.status || 500).send({
        error: true, 
        message: error.message || 'Something Went Wrong!', 
        data: {}
      });
    });
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server⚡: API Server is running on http://localhost:${this.port}`);
    });
  }
}
