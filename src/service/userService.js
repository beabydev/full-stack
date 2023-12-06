import bcrypt from 'bcryptjs'; // -->  thư viện hash password
import mysql from 'mysql2/promise'; // --> thư viện kết nối tới database
import Bluebird from 'bluebird';



const salt = bcrypt.genSaltSync(10);    // lấy thuật toán băm mật khẩu


const hashPassword = (userPassword) => {        // hàm hash password
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    // với tham số là userPassword để nhận mật khẩu của người dùng và hash ra một đoạn mã khác "mã hóa" 
    return hashPassword;
    //sau đó trả ra "hashPassword" là 1 đoạn text mới
};

const createNewUser = async (email, password, username) => {  // hàm tạo người dùng  mới và lưu vào database
    let hashPassUser = hashPassword(password);  //gọi hàm "hashPasswoed" và chuyền tham số là password
    // tham số được truyền vào này chính là mật khẩu gốc của người dùng, sau đó sẽ được băm ra 
    // và lưu vào "hassPassUser";
    const connection =
        await mysql.createConnection({ host: 'localhost', user: 'root', database: 'node-app' });
    const [rows, fields] = await connection.execute('INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
        [email, hashPassUser, username],
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
        }
    );
    // connection.query(       // thêm người dùng vào database
    //     'INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, hashPassUser, username],
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //     }
    // );
};

const deleteUser = async (id) => {
    // DELETE FROM users WHERE id=?;
    const connection =
        await mysql.createConnection({ host: 'localhost', user: 'root', database: 'node-app' });
    try {
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]); // lấy dữ liệu từ database
        return rows;
    } catch (error) {
        console.log(error);
    }
}
const getUserList = async () => {
    const connection =
        await mysql.createConnection({ host: 'localhost', user: 'root', database: 'node-app' });
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `users`'); // lấy dữ liệu từ database
        return rows;
    } catch (error) {
        console.log(error);
    }
};
const getUserById = async (id) => {
    const connection =
        await mysql.createConnection({ host: 'localhost', user: 'root', database: 'node-app' });
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id=?', [id]); // lấy dữ liệu từ database
        return rows;
    } catch (error) {
        console.log(error);
    }
}
const updateUserInfo = async (email, username, id) => {
    const connection =
        await mysql.createConnection({ host: 'localhost', user: 'root', database: 'node-app' });
    try {
        const [rows, fields] = await connection.execute(
            'UPDATE users SET email = ?, username = ? WHERE id = ?',
            [email, username, id]
        ); // lấy dữ liệu từ database
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfo
}
