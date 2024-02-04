const Koa = require("koa")
import { Context } from "koa"
import router from "./routers"
import cors from "@koa/cors"
import bodyParser from "@koa/bodyparser"

import jwt from 'koa-jwt';

import JwtUtil from "./utils/JwtUtil"

//初始化应用实例
const app = new Koa()

// //中间件
// app.use(logger())
app.use(cors())
app.use(bodyParser())


// jwt
app.use(jwt({ secret: `KwOr0W4HGTsaokU0` }).unless({ path: [/^\/login/] }));

// 响应用户请求
app.use(router.routes()).use(router.allowedMethods())

// 运行服务器
app.listen(3001)
