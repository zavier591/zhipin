// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "111",
    password: "111",
  },
  usernameinput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  passwordinput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //点击登陆的时候触发的事件
  loginBtnClick: function () {
    var that = this;
    //登陆的时候要传过来的参数
    var name = that.data.username
    var pwd = that.data.password
    if (that.data.username == "") {
      wx.showModal({
        title: "信息提示",
        content: "用户名不能为空!"
      })
    } else if (that.data.password == "") {
      wx.showModal({
        title: "信息提示",
        content: "请输入密码!"
      })
    }
    console.log("用户名：" + name + "密码：" + pwd)
    
    if (that.data.username == "111" || that.data.password == "111") {
      wx.showModal({
        title: "信息提示",
        content: "登录成功!",
        icon: 'loading',

        duration: 1500
    

      
      }),

      
          //跳转到index页面
        setTimeout(function () {
         
          wx.reLaunch({
            url: '../index/index'
          })
        }, 1000)
        }
      },
   
    
  //点击注册的时候触发的事件
  resetBtnClick: function (options) {
    wx: wx.navigateTo({
      url: '../register/register',
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