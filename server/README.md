2021/9/22学习日记
```

1.//自动创建数据表
db.AutoMigrate()

2. gorm 连接数据库得引入	_ "github.com/go-sql-driver/mysql"

3.登录步骤
参数校验等等
过了发放token

4.使用jwt包实现用户认证，发放token令牌登录

5.中间件
需要中间件来阻止未登录的用户操作

6.类型断言(类型强制转换)
类型断言 dto.ToUserDto(user.(model.User)) []Interfaces{}类型向其他类型转换

7.使用Viper管理配置文件



```

```
搭建前端vue
cnpm install -g vue
cnpm install -g vue-cli
cnpm install -g @vue-cli

cnpm install bootstrap@4.5.3

```

```
数据库相关
https://www.topgoer.com/%E6%95%B0%E6%8D%AE%E5%BA%93%E6%93%8D%E4%BD%9C/gorm/gorm%E7%94%A8%E6%B3%95%E4%BB%8B%E7%BB%8D.html

 db, err := gorm.Open("mysql", "root:root@(127.0.0.1:3306)/db1?charset=utf8mb4&parseTime=True&loc=Local")
    if err!= nil{
        panic(err)
    }
    defer db.Close()

    // 自动迁移
    db.AutoMigrate(&UserInfo{})

    u1 := UserInfo{1, "枯藤", "男", "篮球"}
    u2 := UserInfo{2, "topgoer.com", "女", "足球"}
    // 创建记录
    db.Create(&u1)
    db.Create(&u2)
    // 查询
    var u = new(UserInfo)
    db.First(u)
    fmt.Printf("%#v\n", u)
    var uu UserInfo
    db.Find(&uu, "hobby=?", "足球")
    fmt.Printf("%#v\n", uu)
    // 更新
    db.Model(&u).Update("hobby", "双色球")
    // 删除
    db.Delete(&u)
``