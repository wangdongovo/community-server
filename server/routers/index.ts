import Router from "@koa/router"


import UserController from "../controllers/user"

const router = new Router()
// users 相关的路由
router.get("/", UserController.listUsers)
router.post("/login", UserController.login)
router.post("/register", UserController.register)
router.get("/all-user", UserController.getAllUser)
router.post("/update", UserController.update)

export default router
