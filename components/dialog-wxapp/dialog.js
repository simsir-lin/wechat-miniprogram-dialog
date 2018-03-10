Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer: function (newVal) {
        if (newVal) {
          this.triggerEvent('open');
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 100
          })
        }
      }
    },
    animation: {
      type: Boolean,
      value: true
    },
    opacity: {
      type: Number,
      value: 0.4
    },
    title: {
      type: String,
      value: ''
    },
    showClose: {
      type: Boolean,
      value: true
    },
    showFooter: {
      type: Boolean,
      value: true
    },
    closeOnClickModal: {
      type: Boolean,
      value: true
    }
  },
  data: {
  },
  attached: function () {
  },
  moved: function () {
  },
  detached: function () {
  },

  methods: {
    touchstart: function () {
      if (this.data.closeOnClickModal) {
        this.triggerEvent('close');
      }
    },
    close: function () {
      this.triggerEvent('close');
    },
    confirm: function () {
      this.triggerEvent('confirm');
    }
  }
})