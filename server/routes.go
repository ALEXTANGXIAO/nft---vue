package main

import (
	"server/controller"
	"server/middleware"

	"github.com/gin-gonic/gin"
)

func CollectRouter(r *gin.Engine) *gin.Engine {
	r.Use(middleware.CrosMiddleWare())
	r.POST("/api/auth/register", controller.Resigter)
	r.POST("/api/auth/login", controller.Login)
	r.GET("/api/auth/info", middleware.AuthMiddleWare(), controller.Info) //中间件保护用户信息接口
	r.GET("/api/music", controller.GetMusic)
	return r
}
