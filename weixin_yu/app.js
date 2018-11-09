//app.js   全局生命周期  4个
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //console.log("1:初始化完成");
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow  options是场景值
   */
  onShow: function (options) {
    //console.log("2:程序的启动");
    //console.log(options);
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    //console.log("3:程序进入到后台");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    //console.log("4:.....");
  }
})
