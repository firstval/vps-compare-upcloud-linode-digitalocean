package main

import "github.com/gin-gonic/gin"
// v1.2

// production
// GIN_MODE=release

func main() {
  r := gin.New() // no Logger and no Recovery

  r.GET("/", func(c *gin.Context) {
    c.Header("Connection", "close")
    c.JSON(200, gin.H{"hello": "world",})
  })

  r.GET("/keep", func(c *gin.Context) {
    c.JSON(200, gin.H{"hello": "connected",})
  })

  r.Run(":3000")
}
