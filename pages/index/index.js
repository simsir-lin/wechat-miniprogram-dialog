Page({
  data: {
    dialogvisible: false,
    options: {
      showclose: true,
      showfooter: true,
      closeonclickmodal: true
    },
    title: 'dialog title',
    opacity: '0.4'
  },
  handleSliderChange: function (e) {
    this.setData({
      opacity: e.detail.value
    })
  },
  handleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },
  handleChange: function (e) {
    this.data.options[e.currentTarget.dataset.model] = !this.data.options[e.currentTarget.dataset.model];
    this.setData({
      options: this.data.options
    })
  },
  showDialog: function () {
    this.setData({
      dialogvisible: !this.data.dialogvisible
    })
  },
  handleClose: function () {
    this.setData({
      dialogvisible: false
    })
  },
  handleOpen: function () {
    wx.showToast({
      title: 'open dialog',
      icon: 'none'
    })
  },
  handleConfirm: function () {
    this.setData({
      dialogvisible: false
    })
  },
  onLoad: function (options) {
  },
  onShareAppMessage: function () {

  }
})
