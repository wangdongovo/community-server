import { log } from "console"
import query from "../../mysql/index"

async function getUser(uid: number) {
  try {
    const sql = `select * from duck.user where uid=${uid}`
    const result: any = await query(sql)
    return result.length === 0 ? null : result[0]
  } catch (error) {
    console.log(error, "getUser")
  }
}

async function getAllUser() {
  try {
    const sql = `select * from users`
    const result: any = await query(sql)

    console.log(`🍍🙏🍍👉: result`, result)
    return result.length === 0 ? null : result
  } catch (error) {
    console.log(error, "getAllUser")
  }
}

const createUser = async (userInfo: any) => {
  try {
    console.log(`🍍🙏🍍👉: userInfo`, userInfo)

    const { email, password } = userInfo
    const sql = `insert into users (email, password) values ('${email}', '${password}')`
    const result: any = await query(sql)

    console.log(`🍍🙏🍍👉: result`, result)
    return result
  } catch (error) {
    console.log(error, "createUser")
  }
}

// 用户信息更新

const updateUser = async (userInfo: any) => {
  try {
    console.log(
      `%c ${new Date().toLocaleString()} %c devtools %c`,
      "background: linear-gradient(to right, #8a2387, #e94057, #f27121); color: #fff; padding: 1px; border-radius: 3px 0 0 3px;",
      "background: linear-gradient(to right, #8a2387, #e94057, #f27121); padding: 1px; border-radius: 0; color: #fff;",
      "background:transparent",
      userInfo
    )

    const { email, password } = userInfo

    const sql = `update users set email = '${email}', password = '${password}' where uid = 9`
    console.log(`sql`, sql)

    const result: any = await query(sql)
    return result?.affectedRows > 0 ? true : false
  } catch (error) {}
}

export { getUser, getAllUser, createUser, updateUser }
