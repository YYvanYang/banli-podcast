// pages/episode/episode.js
var { fromNow } = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    episode: {
      id: 1,
      imgUrl: "https://hw1.thisamericanlife.org/sites/default/files/styles/app_thumbnail/public/episodes/images/chip_in_the_brain-owen_freeman.jpg?itok=I3D2QBpq",
      date: fromNow(new Date()),
      title: "Harold",
      summary: "The story of Harold Washington",
      mp3: "https://podcast.thisamericanlife.org/podcast/635.mp3",
      total: "another 56"
    },
    text: `Ira Glass
From WBEZ Chicago, it's This American Life. I'm Ira Glass. I think the thing that gets to me the most about the story that we're doing today is I feel for the parents in this story.

Like when you're a parent, at some point you're in the situation where your kid is having experiences and friendships with people that are completely out of your reach, right? You don't know what's really happening between them. You don't really know what's going through your kid's head. You're powerless.

The parents in the story today, they thought they were close to their son, who was doing really well in school.Things seemed fine.Anyway, it's our whole hour today, a story we call Chip in My Brain. David Kestenbaum tells what happened, which begins with basketball.`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options)
  
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