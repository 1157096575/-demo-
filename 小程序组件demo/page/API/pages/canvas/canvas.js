var example = require('./example.js')

Page({
  onLoad: function () {
    this.context = wx.createContext()

    var methods = Object.keys(example)
    //console.log(methods);
    this.setData({
      methods: methods
    })

    var that = this
    methods.forEach(function (method) {
      //console.log(method);
      
      that[method] = function () {
        example[method](that.context)
        var actions = that.context.getActions()

        wx.drawCanvas({
          canvasId: 'canvas',
          actions: actions
        })
        //console.log(example[method]);
        //console.log(that);
      }
    })
  },
  toTempFilePath: function () {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })
  }
})
