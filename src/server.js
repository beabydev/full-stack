import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import webRoutes from './routes/web';

const app = express();
const port = process.env.PORT || 3002;

// config view engine -- định nghĩa các tuyến đường
configViewEngine(app);

// config bodyParser  -- lấy thông tin từ form, sử dụng tại controller
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config routes
webRoutes(app);


app.listen(port, () => { console.log(`Start web server in http://localhost:${port}/`); })



