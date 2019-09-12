/*
 * Author: simsir-lin
 * Github: https://github.com/simsir-lin
 * Email: 15986907592@163.com
 */

Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer: function (newVal) {
        if (newVal) {
          this.open()
        }
      }
    },
    title: {
      type: String,
      value: '提示'
    },
    width: {
      type: String,
      value: '650rpx'
    },
    opacity: {
      type: Number,
      value: 0.4
    },
    closeOnClickModal: {
      type: Boolean,
      value: true
    },
    animation: {
      type: Boolean,
      value: true
    },
    confirmText: {
      type: String,
      value: '确定'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmColor: {
      type: String,
      value: '#333333'
    },
    cancelColor: {
      type: String,
      value: '#999999'
    },
    showConfirm: {
      type: Boolean,
      value: true
    },
    showCancel: {
      type: Boolean,
      value: true
    }
  },
  data: {
    position: 'center'
  },
  methods: {
    open() {
      this.triggerEvent('open')
    },
    close() {
      this.triggerEvent('close')
    },
    cancel() {
      this.triggerEvent('cancel')
    },
    confirm() {
      this.triggerEvent('confirm')
    },
    touchMask() {
      if (this.data.closeOnClickModal) {
        this.close()
      }
    }
  }
})
