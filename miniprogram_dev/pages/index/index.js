Page({
  data: {
    dialogvisible: false,
    inputs: [{
      text: '弹窗标题：',
      value: '我是弹窗标题'
    }, {
      text: '弹窗宽度：',
      value: '85%'
    }],
    switchs: [{
      text: '开启动画',
      value: true
    }, {
      text: '是否可以点击modal关闭Dialog',
      value: true
    }],
    buttonConf: [{
      title: '确认按钮',
      text: '确认',
      show: true,
      color: '#333333'
    }, {
      title: '取消按钮',
      text: '取消',
      show: true,
      color: '#999999'
    }],
    colors: [],
    opacity: '0.4'
  },
  handleSliderChange: function(e) {
    this.setData({
      opacity: e.detail.value
    })
  },
  handleInput: function(e) {
    let index = e.currentTarget.dataset.index
    let data = {}
    data['inputs[' + index + '].value'] = e.detail.value
    this.setData(data)
  },
  handleInputButtonText: function (e) {
    let index = e.currentTarget.dataset.index
    let data = {}
    data['buttonConf[' + index + '].text'] = e.detail.value
    this.setData(data)
  },
  handleSwitchChange: function(e) {
    let index = e.currentTarget.dataset.index
    let data = {}
    data['switchs[' + index + '].value'] = e.detail.value
    this.setData(data)
  },
  handleSwitchButton: function (e) {
    let index = e.currentTarget.dataset.index
    let data = {}
    data['buttonConf[' + index + '].show'] = e.detail.value
    this.setData(data)
  },
  handleInputButtonColor: function (e) {
    let index = e.currentTarget.dataset.index
    let data = {}
    data['buttonConf[' + index + '].color'] = e.detail.value
    this.setData(data)
  },
  showDialog: function() {
    this.setData({
      dialogvisible: true
    })
  },
  closeDialog: function() {
    this.setData({
      dialogvisible: false
    })
    this._toast('关闭')
  },
  handleOpen: function() {
    this._toast('打开')
  },
  confirm: function() {
    this._toast('confirm')
  },
  cancel: function() {
    this._toast('cancel')
  },
  _toast(msg) {
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  }
})
