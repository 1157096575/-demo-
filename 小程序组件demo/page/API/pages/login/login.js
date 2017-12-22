var app = getApp()
Page({
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        console.log(res.code);
        wx.getUserInfo({
          success: function(res) {
            console.log(res);
          }
        })
        


        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        that.update()

        //通过code获取openID
        if (res.code) {
          //发起网络请求
          wx.request({
            url: "https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code",
            data: {
              appid:"wx3d04b9305afa4ea5",
              secret:"d33cee285d5d3a1450e516760445468b",
              js_code: res.code,
              grant_type:"authorization_code"
            },
          header: {
              'content-type': 'application/json'
          },
            success:function(res){
              console.log(res);
            }
          })
        }
      }
    })
  }
})
