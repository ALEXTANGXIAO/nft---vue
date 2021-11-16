package middleware

import (
	"net/http"
	"server/common"
	"server/model"
	"strings"

	"github.com/gin-gonic/gin"
)

func AuthMiddleWare() gin.HandlerFunc {

	return func(ctx *gin.Context) {
		//获取Authorization Header
		tokenString := ctx.GetHeader("Authorization")

		//validate token format
		if tokenString == "" || !strings.HasPrefix(tokenString, "Bearer ") {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "权限不足"})
			ctx.Abort() //抛弃这次请求
			return
		}
		//oauth2.0规定，Authorization的字符串开头必须要有Bearer 七位
		tokenString = tokenString[7:]

		token, claims, err := common.ParseToken(tokenString)
		if err != nil || !token.Valid {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "权限不足"})
			ctx.Abort()
			return
		}

		//验证通过后获取claim中的userId
		userId := claims.UserId
		DB := common.GetDB()
		var user model.User
		DB.First(&user, userId)

		//用户验证
		if user.ID == 0 {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "权限不足"})
			ctx.Abort()
			return
		}

		//用户存在 将user信息写入	用户标识,(不然每次登录都要请求)
		ctx.Set("user", user)
		ctx.Next()
	}
}
