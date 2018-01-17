// pages/home/home.js
var {fromNow} = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    podcasts: [
      {
        id: 1,
        imgUrl: "https://hw1.thisamericanlife.org/sites/default/files/styles/app_thumbnail/public/episodes/images/chip_in_the_brain-owen_freeman.jpg?itok=I3D2QBpq",
        date: fromNow(new Date()),
        title: "Harold",
        summary: "The story of Harold Washington",
        mp3: "https://podcast.thisamericanlife.org/podcast/635.mp3",
        total: "another 56"
      },
      {
        id: 2,
        imgUrl: "https://hw1.thisamericanlife.org/sites/default/files/styles/app_thumbnail/public/episodes/images/chip_in_the_brain-owen_freeman.jpg?itok=I3D2QBpq",
        date: fromNow(new Date(2017, 10, 11)),
        title: "Harold",
        summary: "The story of Harold Washington",
        mp3: "https://podcast.thisamericanlife.org/podcast/635.mp3",
        total: "another 56"
      },
      {
        id: 3,
        imgUrl: "https://hw1.thisamericanlife.org/sites/default/files/styles/app_thumbnail/public/episodes/images/chip_in_the_brain-owen_freeman.jpg?itok=I3D2QBpq",
        date: fromNow(new Date(2017, 12, 11)),
        title: "Harold",
        summary: "The story of Harold Washington",
        mp3: "https://podcast.thisamericanlife.org/podcast/635.mp3",
        total: "another 56"
      },
      {
        id: 4,
        imgUrl: "https://hw1.thisamericanlife.org/sites/default/files/styles/landscape/public/episodes/images/chip_in_the_brain-owen_freeman.jpg?itok=VH9SIDf6",
        date: fromNow(new Date(2017, 11, 11)),
        title: "Harold",
        summary: "The story of Harold Washington",
        mp3: "https://podcast.thisamericanlife.org/podcast/635.mp3",
        total: "another 56"
      },
      {
        id: 5,
        imgUrl: "https://hw1.thisamericanlife.org/sites/default/files/styles/landscape/public/episodes/images/chip_in_the_brain-owen_freeman.jpg?itok=VH9SIDf6",
        date: fromNow(new Date(2018, 1, 11)),
        title: "Harold",
        summary: "The story of Harold Washington",
        mp3: "https://podcast.thisamericanlife.org/podcast/635.mp3",
        total: "another 56"
      }
    ]
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
  
  },

  goEpisode: function (event) {
    console.log('event:', event)
    let id = event.currentTarget.dataset.episode.id
    wx.navigateTo({
      url: `../episode/episode?id=${id}`
    })
  }
})