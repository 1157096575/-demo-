Page({
  data: {
    focus: false
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
    console.log(e)
  }
})
