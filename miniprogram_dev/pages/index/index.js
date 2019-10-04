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
      value: false
    }, {
      text: '确认按钮是否带 loading 图标',
      value: false
    }, {
      text: '是否收集formId',
      value: false
    }],
    openTypes: ['', 'getUserInfo', 'contact', 'getPhoneNumber', 'openSetting', 'launchApp'],
    buttonConf: [{
      title: '确认按钮',
      text: '确认',
      show: true,
      color: '#333333',
      background: '#ffffff',
      openType: ''
    }, {
      title: '取消按钮',
      text: '取消',
      show: true,
      color: '#999999',
      background: '#ffffff',
      openType: ''
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
  handleInputButtonBackgroundColor: function (e) {
    let index = e.currentTarget.dataset.index
    let data = {}
    data['buttonConf[' + index + '].background'] = e.detail.value
    this.setData(data)
  },
  changeOpenType: function (e) {
    let index = e.currentTarget.dataset.index
    let data = {}
    wx.showActionSheet({
      itemList: this.data.openTypes.map((item) => {
        return item.length > 0 ? item : '无'
      }),
      success: (res) => {
        data['buttonConf[' + index + '].openType'] = this.data.openTypes[res.tapIndex]
        this.setData(data)
      }
    })
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
  confirm: function() {
    this._toast('confirm')
  },
  cancel: function() {
    this.closeDialog()
    this._toast('cancel')
  },
  getFormId: function(e) {
    setTimeout(() => {
      this._toast(`得到FormId：${e.detail.formId}`)
    }, 2000)
  },
  getUserInfo: function (e) {
    this.closeDialog()
    console.log(e)
    this._toast(`用户昵称：${e.detail.userInfo.nickName}`)
  },
  contact: function () {
    this._toast('contact')
  },
  getphonenumber(e) {
    this.closeDialog()
    console.log(e)
    this._toast(e.detail.errMsg)
  },
  openSetting() {
    this._toast('openSetting')
  },
  launchApp() {
    this._toast('launchApp')
  },
  _toast(msg) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
  }
})
