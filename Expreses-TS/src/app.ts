import express from 'express';
import { Cat } from './routes/cats.mocking'
import catsRouter from './routes/cats';
import dotenv from 'dotenv';
dotenv.config();
const app: express.Express = express();

class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter)
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.send({ cats: Cat });
    })
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      const error: { message: string, status?: number } = new Error(`${req.method} ${req.url} 페이지가 없습니다.`);
      error.status = 404;
      next(error);
    });
  }
  private setMiddleWare() {
    this.app.use(express.json())

    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log(req.rawHeaders[1]);
      next();
    })

    this.app.use((err: { message: string; status: number; }, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.locals.message = err.message;
      res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};  //개발모드일땐 에러스택 넣어주기
      res.status(err.status || 500).send(err);    // err status가 없으면 500으로 반환 ,views에 있는 error.html로 렌더
    });
  }

  public listen() {
    const port: string = process.env.PORT || '3000';
    this.setMiddleWare();
    this.setRoute();
    this.app.listen(port, () => {
      console.log(`Server Run ${port}`)
    })
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init()