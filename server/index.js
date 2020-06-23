const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

// 处理POST请求
app.post('/', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})


// 处理GET请求
app.get('/', (req, res) => {
  res.json(data)
})

// 监听3000端口
app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})
