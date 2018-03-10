Page({
  data: {
    dialogvisible: false,
    options: {
      showclose: true,
      showfooter: true,
      closeonclickmodal: true,
      fullscreen: false
    },
    title: 'dialog title',
    opacity: '0.4',
    width: '85',
    position: 'center',
    positions: [{
      title: '居中',
      value: 'center'
    }, {
      title: '顶部',
      value: 'top'
    }, {
      title: '底部',
      value: 'bottom'
    }],
    positionIndex: 0
  },
  handlePickerChange: function (e) {
    this.setData({
      position: this.data.positions[e.detail.value].value,
      positionIndex: e.detail.value
    })
  },
  handleSliderChange: function (e) {
    this.setData({
      opacity: e.detail.value
    })
  },
  handleWidthInput: function (e) {
    this.setData({
      width: e.detail.value
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
      dialogvisible: true
    })
  },
  handleClose: function () {
    wx.showToast({
      title: 'close dialog',
      icon: 'none'
    })
  },
  handleOpen: function () {
    wx.showToast({
      title: 'open dialog',
      icon: 'none'
    })
  },
  handleConfirm: function () {
    wx.showToast({
      title: 'confirm',
      icon: 'none'
    })
  },
  onLoad: function (options) {
  },
  onShareAppMessage: function () {

  }
})
