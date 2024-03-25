import { Context } from "koa"
import JwtUtil from "../utils/JwtUtil"

import {
  getUser,
  getAllUser,
  createUser,
  updateUser,
} from "../models/user-info/index"

export default class UserController {
  public static async listUsers(ctx: Context) {
    const result: any = { code: 500, userInfo: null, message: "操作失败" }

    try {
      let uid = 23678765
      // const userInfo = await getUser(Number(uid))
      result.code = 200
      result.message = "操作成功"
      result.userInfo = "李白"

      ctx.body = result
    } catch (error) {
      console.log(error, "获取用户信息出错")
    }
  }

  // 查询用户信息
  public static async getUser(ctx: Context) {
    const result: any = { code: 500, userInfo: null, message: "操作失败" }
    try {
      let uid = ctx.params.uid
      const userInfo = await getUser(Number(uid))
      result.code = 200
      result.message = "操作成功"
      result.userInfo = userInfo
      ctx.body = result
    } catch (error) {
      console.log(error, "获取用户信息出错")
    }
  }

  // 获取所有用户信息
  public static async getAllUser(ctx: Context) {
    const result: any = { code: 500, userInfo: null, message: "操作失败" }
    try {
      const userInfo = await getAllUser()

      console.log(`🍍🙏🍍👉: 所有用户信息`, userInfo)

      result.code = 200
      result.message = "操作成功"
      result.userInfo = userInfo
      ctx.body = result
    } catch (error) {
      console.log(error, "获取用户信息出错")
    }
  }

  // 注册
  public static async register(ctx: Context) {
    const result: any = { code: 500, userInfo: null, message: "操作失败" }
    try {
      const userInfo = ctx.request.body

      console.log(`🍍🙏🍍👉: 用户信息`, userInfo)

      const data = await createUser(userInfo)

      console.log(`🍍🙏🍍👉: data`, data)
      result.code = 200
      result.message = "操作成功"
      result.userInfo = userInfo
      ctx.body = result
    } catch (error) {
      console.log(error, "注册出错")
    }
  }

  // 登录
  public static async login(ctx: Context) {
    const result: any = { code: 500, userInfo: null, message: "操作失败" }
    try {
      const userInfo = ctx.request.body
      console.log(`🍍🙏🍍👉: 用户信息`, userInfo)
      // const data = await createUser(userInfo)
      // console.log(`🍍🙏🍍👉: data`, data)

      const { email, password } = userInfo

      if (email === "wangdongovo@gmail.com" && password === "yaocc521") {
        // 这里只是示例，实际应用中需要查询数据库
        const token = JwtUtil.generate({ email, password })
        ctx.body = { token }

        result.code = 200
        result.message = "操作成功"
      } else {
        result.code = 401
        result.message = "用户名或密码错误"
        ctx.body = result
      }
    } catch (error) {
      console.log(error, "登录出错")
    }
  }

  // 修改用户信息
  public static async update(ctx: Context) {
    const result: any = { code: 500, message: "操作失败" }
    try {
      const userInfo = ctx.request.body
     
      const data = await updateUser(userInfo)
      
      if (data === true) {
        result.code = 200
        result.message = "用户信息更新成功"
        ctx.body = result
      }
    } catch (error) {
      console.log(error, "更新用户信息出错")
    }
  }
}
