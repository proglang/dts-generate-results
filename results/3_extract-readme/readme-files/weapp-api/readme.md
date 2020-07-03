[![NPM version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/weapp-api) 
[![NPM version](https://img.shields.io/node/v/passport.svg)](https://www.npmjs.com/package/weapp-api) 

# 微信小程序API
# 安装
```$ npm install weapp-api ```
# 更新日志
## 2018.01.16 基础库更新（1.9.0）
* `A` 新增 API tabBar 相关接口 
* `A` 新增 API wx.canvasGetImageData 可返回 `<canvas />` 的像素数据 
* `A` 新增 API wx.canvasPutImageData 可将像素数据绘制到 `<canvas />`
* `U` 更新 组件 `<swiper />` 增加 current-item-id、previous-margin、next-margin、display-multiple-items、skip-hidden-item-layout、bindanimationfinish 属性 
* `U` 更新 组件 `<input />` 支持 selection 选区 
* `U` 更新 组件 `<textarea />` 支持 selection 选区 
* `U` 更新 组件 `<live-player />` 增加 bindnetstatus 事件 
* `U` 更新 组件 `<live-pusher />` 增加 bindnetstatus 事件 
* `U` 更新 组件 `<video />` 可对控制栏进行更细粒度控制 
* `U` 更新 组件 `<slider /> `支持 block-size 设置滑块尺寸和 block-color 设置滑块颜色 
* `U` 更新 API 背景音频接口 backgroundAudioManager 支持直播流音频
* `U` 更新 API `canvasContext.drawImage` 支持从源图像裁剪后再画到 `<canvas />`
* `U` 更新 API `wx.showToast` 文本统一限制为 7 个汉字长度，并增加无 icon 类型 
* `F` 修复 API `wx.chooseVideo` 接口的 compressed 参数不生效的问题
* `F` 修复 API WebSocket 接口在 Android 下服务连接失败的时候，没有立刻触发 error 和 close 事件，而是等到超时
* `F` 修复 API Android 背景音频接口 backgroundAudioManager 不能播放本地文件的问题 
* `F` 修复 API `wx.setEnableDebug` 接口在 Android 下会导致小程序一直在重启的问题
* `F` 修复 API `wx.showToast `在 iOS 下连续调用两次再调用 wx.hideToast 时遮罩层没去掉的问题
* `F` 修复 API `wx.startPullDownRefresh` 在 iOS 下没有触发 onPullDownRefresh 事件的问题
* `F` 修复 API `wx.previewImage` 在 Android 下长按GIF发送后退出小程序的问题
* `F` 修复 API `wx.pageScrollTo` 导致 fixed 元素闪动的问题，并增加 duration 参数 
* `F` 修复 自定义组件通过动态设置的回调方法时会执行两遍的问题 
## 2017.12.07 基础库更新（1.7.0）
* `A` 新增 组件 `<camera />` 开发工具上的调试支持 
* `U` 更新 API `WebSocket` 支持创建多条 WebSocket 连接 
* `U` 更新 API `wx.request` 支持发送和接收 ArrayBuffer 类型的数据 
* `U` 更新 API `wx.createCanvasContext` 的 draw 接口，回调通知渲染完成 
* `U` 更新 API `wx.canvasToTempFilePath` 支持设置输出图片格式与质量参数 
* `U` 更新 API `wx.createInnerAudioContext` 去掉切到前台时恢复播放的策略
* `U` 更新 组件 `<slider />` 增加 bindchanging 事件 
* `U` 更新 组件 `<progress />` 增加 active-mode 属性 
* `U` 更新 组件 `<video />` 在 timeupdate 事件回调中新增返回 duration 参数 
* `U` 更新 组件 `<video />` 新增 direction 参数，支持全屏时设置画面方向 
* `U` 更新 组件 `<scroll-view />` 优化 scrolltoupper 与 scrolltolower 事件的触发频率
* `U` 更新 组件 `<cover-view />` 优化在安卓下的渲染性能
* `F` 修复 API `wx.createInnerAudioContext` 接口返回参数的时间单位不正确的问题
* `F` 修复 API `wx.hideLoading` 会把 wx.showToast 给隐藏掉的问题
* `F` 修复 API `wx.hideLoading` 一调用立即消失的问题 
* `F` 修复 API `wx.canvasToTempFilePath` 在 `<canvas />` 不可见时导出失败以及导致crash的问题 
* `F` 修复 API `wx.uploadFile` 文件格式的问题 
* `F` 修复 API `wx.getRecorderManager` 在 iOS 下设置最大时长10分钟失效的问题
* `F` 修复 API `wx.getRecorderManager` 在安卓下小程序退到后台时，将默认行为从停止录音调整为暂停录音
* `F` 修复 组件 `<input />` disabled 时字体样式无效的问题 
* `F` 修复 组件 `<navigator />` 快速点击时会新开两个页面的问题
* `F` 修复 组件 `<cover-view />` 在 iOS 下圆角半径的问题 
* `F` 修复 组件 `<cover-view />` 设置 text-align: center 在安卓上下也会居中的问题
* `F` 修复 组件 `<cover-image />` 总是显示在 `<cover-view />` 之上的问题
* `F` 修复 组件 `<audio /> `在播放结束的时候没有恢复背景音乐的问题
* `F` 修复 组件 `<picker />` 偶现需要点击两次才能收起的问题
* `F` 修复 组件 `<image />` mode 从 widthFix 改成其他值时高度没更新的问题
* `F` 修复 组件 `<scroll-view />` 滚动时出现闪动的问题
* `F` 修复 组件 `<video />` 在全屏后拉起系统控制面板时退出全屏的问题
* `F` 修复 trace 面板无法连接设备的问题
## 更新概述 2017.10.13
* 新增相机组件，支持自定义拍照及录像界面
* 录音功能优化，支持更多格式和操作方式，支持自定义录音时长、采样率码率，支持边录边传
* 小程序内音频播放功能升级，支持更多格式和操作方式
* video、map及canvas功能持续优化，cover-view支持简单的动画效果
* onLaunch 及 onShow 时部分跳转小程序场景增加返回 * referrerInfo.appId
## 基础库更新 (1.6.0)
* `A` 新增 API `checkIsSoterEnrolledInDevice`  判断设备是否录入指纹等生物信息的接口 
* `A` 新增 API `getRecorderManager` 获取全局唯一的录音管理器 
* `A` 新增 API `createInnerAudioContext` 创建并返回内部 audio 上下文 innerAudioContext 对象 
* `A` 新增 组件 `<camera />` 相机组件 
* `U` 更新 API `startRecord` 增加 duration 参数用于设置最长录音时间 
* `U` 更新 API `chooseVideo` 增加 compressed 参数，用于设置是否压缩用户选择的视频 
* `U` 更新 组件 `<map /> `polyline 支持 arrowIconPath 参数，用于更换箭头图标 
* `U` 更新 组件 `<map /> `marker 的 label 参数增加样式设置 
* `U` 更新 组件 `<map /> `新增渲染更新完成事件 bindupdated 
* `U` 更新 组件 `<video />` 支持 pageGesture 属性，控制非全屏模式下是否开启声音和亮度手势 
* `U` 更新 组件 `<video />` 在 bindfullscreenchange 的 detail 中返回横竖屏信息 
* `U` 更新 组件 `<video /> `支持 initial-time 属性用于指定初始化播放的位置 
* `U` 更新 组件 `<canvas />` 支持 clip 方法实现剪切 
* `U` 更新 组件 `<canvas /> `支持 setLineDash 方法实现设置虚线样式 
* `U` 更新 组件 `<cover-view />` 支持动画 
* `U` 更新 组件 `<cover-image />` iconPath 支持网络图片 
* `U` 更新 组件 `<textarea />` 支持 show-confirm-bar，用于设置是否显示键盘上方带有「完成」按钮那一栏 
* `U` 更新 组件 `<textarea />` 支持在 bindblur 回调中返回 cursor，收起键盘时返回光标位置 
* `U` 更新 组件 `<swiper />` 性能优化，支持隐藏当前页、前后页之外的页面，避免复杂页面切换卡顿
* `U` 更新 框架 `referrerInfo.appId onLaunch `及 `onShow` 时部分跳转小程序场景增加返回 referrerInfo.appId 
* `U` 更新 调试 `vConsole WXML `面板支持显示 Computed Styles
* `F` 修复 API `openDocument` 在 iOS 下打开带密码的 PDF 文件时无法输入密码的问题
* `F` 修复 API `openDocument` 在 iOS 下打开 Excel 无法切换 tab 的问题
* `F` 修复 API `authorize scope` 为数组时，三端回调行为不一致问题
* `F` 修复 API `showActionSheet cancel` 时会同时回调 success 和 fail 问题
* `F` 修复 API `getSystemInfo` 在开发者工具上未返回 brand 字段的问题
* `F` 修复 API `chooseInvoiceTitle` 在开发者工具上未返回 invoiceTitleInfo 字段的问题
* `F` 修复 API `pageScrollTo` 在开发者工具上失效问题
* `F` 修复 API `startPullDownRefresh` 在开发者工具上失效问题
* `F` 修复 API `getFileInfo `在开发者工具上只回调 complete 问题
* `F` 修复 API `startBluetoothDevicesDiscovery` 在开发者工具上返回值和真机不一致问题
* `F` 修复 API `onBluetoothDeviceFound` 在开发者工具 devices 错误返回二维数组问题
* `F` 修复 API `playBackgroundAudio` 在 iOS 下失败报 fail no current music，但音乐正常播放问题
* `F` 修复 API `request `被 abort 后仍然占据并发数问题
* `F` 修复 API `createAnimation backgroundColor `无法使用渐变背景色问题
* `F` 修复 API `setNavigationBarColor` 在 iOS 下会导致导航栏 title 和按钮变成透明问题
* `F` 修复 组件 `<image /> ` 在 devtools 提示 404 但不影响显示问题
* `F` 修复 组件 `<map />` 在初始化时在各端事件派发不一致问题
* `F` 修复 组件 `<map />` markers 的 callout 没有限制 borderRadius 取值范围问题
* `F` 修复 组件 `<map /> `markers 的 title 和 callout 在各端表现不一致问题
* `F` 修复 组件 `<map />` 在 Android 下 marker 的 callout 下方无三角形问题
* `F` 修复 组件 `<input />` 在开发者工具上，bindinput 派发的事件对象 timestamp 不为 timeStamp 的问题
* `F` 修复 组件 `<canvas />` longtap 事件在工具上触发类型为 binglongtap 的问题，应为 longtap
* `F` 修复 组件 `<video />` 在 iOS 下在全屏播放时会出现一部分下一个视频的内容的问题
* `F` 修复 组件 `<video />` 在开发者工具点击播放后 controls 无法进行控制问题
* `F` 修复 组件 `<input />` 在 Android 下输入汉字时，bindinput 会带上当前正在输入的英文字母问题
* `F` 修复 组件 `<textarea />` 在 Android 下使用 setData 设置 value，auto-height 失效问题
* `F` 修复 组件 `<picker /> `在 Android 下省市区选择器缺少中山市、东莞市地域信息
* `F` 修复 组件 `<picker />` 在 Android 下 year 小于 1970 不生效问题
* `F` 修复 组件 `<textarea />` 两个 textarea 连续切换未触发第一个 textarea 的 blur 问题
* `F` 修复 组件 `<swiper /> `只展示其中一部分的 bug 
* `F` 修复 框架 iOS8 下 Promise 不会执行 resolve 的问题
## 基础库更新 (1.5.3)
* `F` 修复 组件 `<swiper />` 在 iOS 下首张图片在某些情况下初始不显示的问题
* `F` 修复 API `canIUse` 无法判断 `getPhoneNumber` 可用情况的问题
## 基础库更新 (1.5.2)
* `F` 修复 组件 `<map />` markers 里同时没有设置 callout 和 title 属性时，点击时报 Cannot read property 'always' of null 错误的问题
* `F` 修复 组件 `<image />` bindload 被重复执行两次的问题
* `F` 修复 组件 `<image />` 连续更新 src 会显示图片错误
* `F` 修复 API `chooseInvoiceTitle` 在工具上报错问题
* `F` 修复 API `SelectorQuery.selectViewport` 失效问题
## 基础库更新 (1.5.1)
* `F` 修复 组件 `<image />` 覆盖兄弟节点或图片圆角不显示问题
## 基础库更新 (1.5.0)
* `A` 新增 API `checkIsSupportSoterAuthentication` `startSoterAuthentication` 生物认证接口 
* `A` 新增 API `startPullDownRefresh` 主动触发下拉刷新接口 
* `A` 新增 API `chooseInvoiceTitle` 选择发票抬头接口 
* `A` 新增 框架 触摸类事件增加 `capture` 阶段 
* `A` 新增 框架 长按事件 `longpress` 
* `A` 新增 框架 `page.json` 支持设置 `onReachBottom` 距离 
* `U` 更新 API `getSystemInfo` 增加 `fontSizeSetting` 支持读取用户字体大小设置 
* `U` 更新 API `getSystemInfo` 增加 brand 支持读取手机品牌字段 
* `F` 修复 API `getSystemInfo` 在华为或者魅族带虚拟按键的设备上获取 windowWidth 和 windowHeight 为 0 问题
* `U` 更新 API `writeBLECharacteristicValue` 根据写入属性特征值决定回调时机
* `U` 更新 API `shareAppMessage` 增加 imageUrl 参数支持分享自定义配图 
* `U` 更新 API `getBluetoothDevices onBluetoothDeviceFound` 设备信息增加 localName 字段 
* `F` 修复 API `switchTab` 在页面注册前调用会报错的问题
* `F` 修复 API `selectorQuery movable-view` 等组件无法在 selectorQuery 中被 class 选择器选中问题
* `F` 修复 API `setNavigationBarColor` 在 iOS 下被 app.json 里 navigationBarTextStyle 覆盖设置问题
* `F` 修复 API `getSetting openSetting `在 iOS 下部分生命周期函数中调用失效
* `F` 修复 API `canvasToTempFilePath `在 iOS 下导出的图片为白色背景的问题
* `F` 修复 API `captureScreen` 在 Android 下生成的文件扩展名为 unknown 问题
* `F` 修复 API `getBeacons` 在 Android 下未获取到设备时 beacons 字段缺失问题
* `F` 修复 API `chooseLocation` 在 Android 下回调函数 latitude、longitude 类型为 string 问题，应为 number
* `F` 修复 API `connectSocket` 在 Android 下接口的请求包 header 中没有 origin 问题
* `F` 修复 API `previewImage` 在 iOS 下导航栏没有显示当前图片索引位置(1/n)的问题
* `F` 修复 API `previewImage` 在 iOS 下横屏后退出，tabBar 漂移到页面中间问题
* `F` 修复 API `chooseImage `在 Android 下未处理图片旋转的情况
* `F` 修复 API `showToast` `showLoading` 在 iOS 下异步 hide 后重新调用 show，show 不生效问题
* `F` 修复 API `pageScrollTo `导致 video 组件错位问题
* `U` 更新 组件 `<picker />` 增加 custom-item，region 模式支持自定义项 
* `F` 修复 组件 `<picker />` 在 iOS 下 mode=year 时点击会 crash 问题
* `U` 更新 组件 `<picker-view />` 增加 mask-style、mask-class 支持自定义半透明蒙层的颜色 
* `F` 修复 组件 `<picker />` region 模式在 form submit 的 detail 没有应该返回省市区问题
* `U` 更新 组件 `<textarea />` `<input />` 增加 cursor 支持主动设置和读取光标位置 
* `F` 修复 组件 `<textarea />` 在 iOS 下编辑时切换键盘，光标会跳到最后的问题
* `F` 修复 组件 `<textarea />` 在 Android 下页面 onLoad 中设置 value 无效问题
* `F` 修复 组件 `<textarea />` 在 Android 下设置 cursor-spacing 无效问题
* `F` 修复 组件 `<form />` 在 textarea input 同时使用时，先点击 textarea，再点击 input 后，无法提交表单的问题
* `F` 修复 组件 `<input />` 在 Android 下 bindinput 事件回调函数缺少 detail.cursor 参数问题
* `F` 修复 组件 `<input /> `在 Android 下与 auto-height 的 textarea 同时使用，不会弹出数字键盘问题
* `F` 修复 组件 `<input />` bindfocus 中调用 chooseLocation 并 setData，导致所有 input 失效问题
* `U` 更新 组件 `<button />` 增加 show-message-card 等属性，支持客服会话分享卡片 
* `U` 更新 组件 `<image />` 支持图片懒加载
* `F` 修复 组件 `<image /> `传入本地文件路径在 iOS 上无法触发浏览器重绘的问题
* `F` 修复 组件 `<movable-view />`动态生成的 movable-view 定位不准确的问题 
* `F` 修复 组件 `<cover-view /> `通过 wx:if 控制不生效的问题
* `F` 修复 组件 `<map />` 在 iOS 下 bindcontroltap 事件同时会触发 bindtap 的问题
* `F` 修复 组件 `<canvas /> `在 iOS 下线条的渐变、宽度同时设置会丢掉线条宽度的问题
* `F` 修复 组件 `<cover-view />` 在 Android 下 border-radius 无效问题
* `F` 修复 组件 `<rich-text />` 自动 trim 问题
* `F` 修复 组件 `<video /> `在 Android 下，未开始播放时，组件上无法触发页面滑动问题
* `F` 修复 组件 `<cover-view />` 点击时会穿透到 map，触发 map 的 tap 事件问题
* `F` 修复 video 上下文 seek 秒数会被取整，无法精确定位问题
* `F` 修复 框架 `onReachBottom handler` 不存在的 warning 在某些情况下异常出现的问题
* `U` 更新 框架 `setData` 支持异步回调 
* `U` 更新 框架 `hover-stop-propagation` 支持拦截点击态 
* `U` 更新 框架 后台拉起小程序时` reLaunch` 优化
* `U` 更新 框架 页面跳转和弹窗授权类接口支持在 `App onLaunch` 时机调用
* `F` 修复 框架 在部分 Android 下出现页面放大的问题

## 其他版本更新参考官方说明
[官方历史更新记录](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/uplog.html)