# wechat-miniprogram-dialog

![预览图](https://raw.githubusercontent.com/simsir-lin/wechat-miniprogram-dialog/master/screenshot.jpg "预览图")

### 下载
``` bash
git clone https://github.com/simsir-lin/wechat-miniprogram-dialog.git
```

### DEMO
1. 打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，项目目录选择为 miniprogram_dev 目录

### 使用
1. 安装
```bash
npm install --save wechat-miniprogram-dialog
```
2. 在你的页面json中添加
``` javascript
{
  "usingComponents": {
    "dialog": "wechat-miniprogram-dialog"
  }
}
```
3. 每次引入或更新需先执行开发者工具的 npm 构建，[微信官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
4. 在wxml中即可使用组件
``` html
<dialog></dialog>
```

### 调试开发
1. 打开[微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，'本地小程序项目 - 添加项目'，项目目录选择为 miniprogram_dev 目录
2. 安装依赖 `npm install`
3. 构建命令 `npm run dev`
4. 更多帮助信息查看[帮助文档](https://github.com/wechat-miniprogram/miniprogram-custom-component)

### 注意
* 小程序基础库版本 2.2.1 或以上、及开发者工具 1.02.1808300 或以上开始

### Props

| name     | description              | type     | default value |
| :---------------- | :----------------------- | :------  | :------------ |
| visible            |  是否显示                | Boolean    | false        |
| title             | 标题                 | String    | 提示          |
| width             | 宽度                 | String    | 650rpx          |
| opacity             | 模态层的透明度                 | Number    | 0.4       |
| closeOnClickModal    | 是否可以通过点击模态层关闭弹窗     | Boolean    | true       |
| animation    | 开启动画     | Boolean    | true       |
| confirmText             | 确定按钮的文字                | String    | 确定          |
| cancelText             | 取消按钮的文字                 | String    | 取消          |
| confirmColor             | 确定按钮的文字颜色               | String    | #333333(支持RGBA)          |
| cancelColor            | 取消按钮的文字颜色                 | String    | #999999(支持RGBA)          |
| showConfirm    | 是否显示确定按钮     | Boolean    | true       |
| showCancel    | 是否显示取消按钮     | Boolean    | true       |
| confirmBackgroundColor    | 确定按钮背景颜色     | String    | #ffffff(支持RGBA)         |
| cancelBackgroundColor    | 取消按钮背景颜色     | String    | #ffffff(支持RGBA)         |
| loading    | 确认按钮是否带 loading 图标     | Boolean    | true       |
| gatherFormId    | 是否收集formId     | Boolean    | true       |

### events

| name     | description              | parameters     |
| :---------------- | :----------------------- | :------  |
| open            | 当窗口打开                 |     |
| close            | 当窗口关闭                 |     |
| cancel            | 点击取消                 |     |
| confirm            | 点击确认                 |     |
| getFormId            | 获取到formid                 |  event.detail.formId   |

### 贡献
如果你有好的意见或建议，欢迎给我提issue!
