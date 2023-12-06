import userService from '../service/userService';

const homePage = (req, res) => {

    return res.render("home.ejs")
};


const handleCreateNewUser = (req, res) => {
    let email = req.body.email;  // lấy địa chỉ email
    let password = req.body.password; // lấy mật khẩu
    let username = req.body.username; // lấy username

    userService.createNewUser(email, password, username);
    return res.redirect('/login');
};

const getUpdateUser = async (req, res) => {   // lấy thông tin của user khi nhấn vào edit
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0]
    };
    return res.render('update-user.ejs', { userData })
};
const handleUpdateUser = async (req, res) => { // xử lý sự kiện khi update user
    let id = req.body.id;
    let email = req.body.email;
    let username = req.body.username;

    await userService.updateUserInfo(email, username, id);
    return res.redirect('/login');
}
module.exports = {
    homePage, handleCreateNewUser, getUpdateUser, handleUpdateUser
};