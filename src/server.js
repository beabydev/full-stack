import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';

const app = express();
const port = process.env.PORT || 3000;

configViewEngine(app);

initWebRoutes(app);


app.listen(port, () => { console.log(`DANG CHAY TREN CONG http://localhost:${port}`); })



