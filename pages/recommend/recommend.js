// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gototvrecommend: function (options) {
    wx: wx.navigateTo({
      url: '../tvrecommend/tvrecommend',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  gotovideo: function (options) {
    wx: wx.navigateTo({
      url: '../video/video',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  gotohuaweip: function (options) {
    wx: wx.navigateTo({
      url: '../jingdong/huawei',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  gotoair: function (options) {
    wx: wx.navigateTo({
      url: '../jingdong/lenovo',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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