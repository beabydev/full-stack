 ⁡⁢⁣⁣KẾT NỐI DATABASE⁡

__1: Thêm đoạn code dưới đây vào file server.js 
⁡⁢⁣⁢/⁡
    // config bodyParser  -- lấy thông tin từ form, sử dụng tại controller
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 
⁡⁢⁣⁢/

__2: tại file controller

/
    ⁡⁢⁣⁢import mysql from 'mysql2';  // nạp thư viện kết nối database

    // create the connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'node-app' //kết nối tới database có tên là "node-app"
    });
/

__3: tại file web.js
/
    router.post('đường dẫn', tên được nạp.hàm xử lý)

/


export hàm xử lý tại file controller và import vào web.js