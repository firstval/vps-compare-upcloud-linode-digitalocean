package main

import "github.com/kataras/iris"
// v8.5.7

func main() {
  app := iris.New() // no Logger and no Recovery

  app.Handle("GET", "/", func(ctx iris.Context) {
    ctx.Header("Connection", "close")
    ctx.JSON(iris.Map{"hello": "world"})
  })

  app.Handle("GET", "/keep", func(ctx iris.Context) {
    ctx.JSON(iris.Map{"hello": "connected"})
  })

  app.Run(iris.Addr(":3000"))
}
