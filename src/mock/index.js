import Mock from 'mockjs'
import data from './data.js'

Mock.setup({
  timeout: 0 // 设置延迟响应，模拟向后端请求数据
})
Mock.mock('http://127.0.0.1/getLunbotu', 'get', () => {
  return data.lunbo
})
