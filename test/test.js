// test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync("sessionid"));
    wx.request({
      url: "http://127.0.0.1/sysmanage/portAutocompleteJson?PortNameEN2_input=s&showname_input=NameEN&valuename_input=PortID",
      method: 'get',
      data: { 'showname_input': 'NameEN', 'valuename_input':'PortID'},
      header: {
        "Set-Cookie": "JSESSIONID=6B86FE21E2D80FE560AAE2F1EF1253BF"},
      success: function(res){
        console.log(res)
      }
    })
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

  },

  index: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  }
})