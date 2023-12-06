import express from 'express';
import handleHomeRoute, { homePage } from '../controllers/homeController';
import handleLoginRoute from '../controllers/loginController';

const router = express.Router();

const webRoutes = (app) => {
    router.get("/", handleHomeRoute.homePage);
    router.get('/login', handleLoginRoute.loginPage);
    router.get('/about', (req, res) => {
        return res.send(`<h1>About</h1>`)
    });
    router.get('/update-user/:id', handleHomeRoute.getUpdateUser);
    router.post('/delete-user/:id', handleLoginRoute.deleteUser);
    router.post('/user/update-user', handleHomeRoute.handleUpdateUser);
    router.post('/update-user', handleHomeRoute.handleUpdateUser)
    router.post('/login', handleHomeRoute.handleCreateNewUser);

    return app.use("/", router)
}

export default webRoutes;