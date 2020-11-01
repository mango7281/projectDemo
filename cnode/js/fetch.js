// 服务器地址
var baseUrl = 'https://cnodejs.org/api/v1'

function fetch(url, method, data, callback) {
  $.ajax({
    url: baseUrl+url,//拼接url
    method: method,
    data: data,
    //回调函数
    success: function(res) {
      if (res.success) {
        callback && callback(res.data)
      } else {
        console.log('ajax 异常',res)
      }
    },
    fail: function(err) {
      console.log('ajax error', err)
    }
  })
}
