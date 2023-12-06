import { Express } from 'express';
import userService from '../service/userService'
const loginPage = async (req, res) => {
    let userList = await userService.getUserList();
    // console.log('log userList: ', userList);
    return res.render("user.ejs", { userList })
}
const deleteUser = (req, res) => {
    console.log('>>> deleted user id is: ', req.params.id);
    userService.deleteUser(req.params.id)
    return res.redirect('/login');
}
module.exports = { loginPage, deleteUser }