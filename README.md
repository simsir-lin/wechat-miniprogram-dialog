# dialog-wxapp
微信小程序弹窗组件 wxapp dialog component

![dialog-wxapp](http://p2bkiq8gf.bkt.clouddn.com/18-3-10/69348094.jpg "dialog-wxapp")

### 下载
``` bash
git clone https://github.com/simsir-lin/dialog-wxapp.git
```

### 预览
打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，项目目录选择为 dialog-wxapp 的目录就可以了，添加项目后就可以进行组件源码的查看和预览demo了。

### 使用
1. 将 dialog-wxapp 目录下的components文件夹下的`dialog-wxapp`拷贝到你的小程序目录下

2. 在你要使用的页面的json文件中引入组件，如：index页面的index.json
```
{
  "navigationBarTitleText": "首页",
  "usingComponents": {
    "dialog": "/components/dialog-wxapp/dialog"
  }
}
```

3. 在wxml中即可使用组件
```
<dialog visible="{{dialogvisible}}" title="{{title}}" opacity="{{opacity}}" show-close="{{options.showclose}}" show-footer="{{options.showfooter}}" close-on-click-modal="{{options.closeonclickmodal}}" bindclose="handleClose" bindopen="handleOpen" bindconfirm="handleConfirm">
  <view style='height:20vh;'>
    这是插入的内容
  </view>
</dialog>
```

4. 如看不明白请直接参考项目实例(/pages/index/index)

### 注意
* 微信小程序基础库版本至少为1.6.4

### 贡献
如果你有好的意见或建议，欢迎给我提issue!
