/*
 * Author: simsir-lin
 * Github: https://github.com/simsir-lin
 * Email: 15986907592@163.com
 */

Component({
  properties: {
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
    },
    confirmBackgroundColor: {
      type: String,
      value: '#ffffff'
    },
    cancelBackgroundColor: {
      type: String,
      value: '#ffffff'
    },
    loading: {
      type: Boolean,
      value: false
    },
    gatherFormId: {
      type: Boolean,
      value: false
    }
  },
  data: {
    position: 'center'
  },
  methods: {
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
    },
    formSubmit(e) {
      let formid = e.detail.formId
      if (/requestFormId:fail/.test(formid)) {
        return
      }
      this.triggerEvent('getFormId', {
        formId: formid
      })
    }
  }
})
