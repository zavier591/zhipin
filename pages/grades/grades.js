// pages/grades/grades.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text1:"",
    clickstars: [
      { name: 'verybad', value: '非常差' },
      { name: 'bad', value: '差'},
      { name: 'justsoso', value: '一般',  },
      { name: 'good', value: '好' },
      { name: 'verygood', value: '非常好' }
    
    ]

  },
  textChange: function(e) {
    this.checkText(e.detail.value)
  },
  checkText: function(data) {
    var reg = /\S/;
    

    return this.check(data, reg, '评价不能为空！')
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var radio = e.detail.value
    this.setData({
      radio: radio
    })
    // console.log(radio)
    if(radio!=='非常差'&&radio!=='差'&&radio!=='一般'&&radio!=='好'&&radio!=='非常好'||radio=='') {
      
      wx.showToast({
        title: "提交失败",
       
        icon: 'none',
  
        duration: 3000
   })
    } 
    console.log(radio)
  },
  
  check: function(data, reg, errMsg) {
    if (!reg.test(data)) {
      wx.showToast({
        title: errMsg,
        icon: 'none',
        duration: 1500
      })
      return false
    }
    return true
  },


  formSubmit: function (e) {
      var text1 = e.detail.value.text1
      
      if (this.checkText(text1)) {
      
      wx.showToast({
        title: "提交成功",
       
        icon: 'success',

        duration: 3000



      }),
      wx.request({
        method: 'post',
        url: 'http://127.0.0.1:3000/',
        data: e.detail.value,
        success: function (res) {
          console.log(res)
        }
      })

        //跳转到index页面
        setTimeout(function () {

          wx.reLaunch({
            url: '../index/index'
          })
        }, 2000) }
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