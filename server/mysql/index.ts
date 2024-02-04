const mysql = require("mysql")
const config = {
  //启动端口
  port: 3000,
  //数据库配置
  database: {
    DATABASE: "duck",
    USERNAME: "root",
    PASSWORD: "yaocc521",
    PORT: "3306",
    HOST: "localhost",
  },
}

// createPool 创建连接池
// 在开发web应用程序时，连接池是一个很重要的概念。建立一个数据库连接所消耗的性能成本是很高的。在服务器应用程序中，如果为每一个接收到的客户端请求都建立一个或多个数据库连接，将严重降低应用程序性能。
// 因此在服务器应用程序中通常需要为多个数据库连接创建并维护一个连接池，当连接不再需要时，这些连接可以缓存在连接池中，当接收到下一个客户端请求时，从连接池中取出连接并重新利用，而不需要再重新建立连接。
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
})

/*
  mysql模块的操作都是异步操作，每次操作的结果都是在回调函数中执行，使用的时候一般封装起来，提供一个接口，使用的时候用async/await，就可以用同步的写法去操作数据库。
  */
const query = (sql: any, values?: any) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err: any, connection: any) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err: any, rows: any) => {
          if (err) {
            console.log("Mysql-error", err)
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

export default query
