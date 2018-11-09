// pages/find music/find music.js
var sliderWidth = 93.75;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["个人推荐", "歌单", "主播电台","排行榜"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    imageList:[],  //轮播图
    rec_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 3,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });
    wx.request({  //首页轮播图
        url:"http://127.0.0.1:3000/indexFind/imglist",
        success:(res)=>{
            console.log(res);
            this.setData({
                imagelist:res.data.msg
               });
        }
    })
    wx.request({
        url:"http://127.0.0.1:3000/indexFind/recomentlist",
        success:(res)=>{
            console.log(res);
            this.setData({
                rec_list:res.data.msg
               });
        }
    })
  },
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
  
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})