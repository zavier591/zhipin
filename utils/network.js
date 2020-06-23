import { globalUrls } from "urls.js";

const network = {
  // 获取电影列表
  getMovieList: function (params) {
    params.type = "movie";
    this.getItemList(params);
  },

  // 获取电视剧列表
  getTVList: function (params) {
    params.type = "tv";
    this.getItemList(params);
  },

  // 获取综艺列表
  getShowList: function (params) {
    params.type = "show";
    this.getItemList(params);
  },

  //获取音乐列表
  getMusicList: function (params) {
    params.type = "music";
    this.getItemList(params);
  },

  //获取图书列表
  getBookList: function (params) {
    params.type = "book";
    this.getItemList(params);
  },

  // 获取item列表
  getItemList: function(params){
    var url = "";
    if(params.type === 'movie'){
      url = globalUrls.movieList;
    }else if(params.type === 'tv'){
      url = globalUrls.tvList;
    }else if(params.type === 'music'){
      url = globalUrls.musicList;
    }else if(params.type === 'book'){
      url = globalUrls.bookList;
    }
    else{
      url = globalUrls.showList;
    }
    var count = params.count ? params.count : 7;
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function (res) {
        var items = res.data.subject_collection_items;
        var itemsCount = items.length;
        var left = itemsCount%3;
        if(left === 2){
          items.push(null);
        }
        if (params && params.success) {
          params.success(items);
        }
      }
    });
  },

  // 获取详情
  getItemDetail: function(params){
    var type = params.type;
    var id = params.id;
    var url = "";
    if(type === 'movie'){
      url = globalUrls.movieDetail + id;
    }else if(type === 'tv'){
      url = globalUrls.tvDetail + id;
    }else if(type === 'music'){
      url = globalUrls.musicDetail + id;
    }else if(type === 'book'){
      url = globalUrls.bookDetail + id;
    }
    else{
      url = globalUrls.show + id;
    }
    wx.request({
      url: url,
      success: function(res){
        var item = res.data;
        if(params.success){
          params.success(item);
        }
      }
    })
  },

  // 获取标签
  getItemTags: function(params){
    var type = params.type;
    var id = params.id;
    var url = "";
    if(type === 'movie'){
      url = globalUrls.movieTags(id);
    }else if(type === 'tv'){
      url = globalUrls.tvTags(id);
    }else if(type === 'music'){
      url = globalUrls.musicTags(id);
    }else if(type === 'book'){
      url = globalUrls.bookTags(id);
    }
    else{
      url = globalUrls.showTags(id);
    }
    wx.request({
      url: url,
      success: function(res){
        var tags = res.data.tags;
        if(params.success){
          params.success(tags);
        }
      }
    })
  },

  // 获取短评
  getItemComments: function(params){
    var type = params.type;
    var id = params.id;
    var start = params.start?params.start:0;
    var count = params.count?params.count:3;
    var url = "";
    if(type === 'movie'){
      url = globalUrls.movieComments(id,start,count);
    }else if(type === 'tv'){
      url = globalUrls.tvComments(id,start,count);
    }else if(type === 'music'){
      url = globalUrls.musicComments(id,start,count);
    }else if(type === 'book'){
      url = globalUrls.bookComments(id,start,count);
    }
    else{
      url = globalUrls.showComments(id,start,count);
    }
    wx.request({
      url: url,
      success: function(res){
        var data = res.data;
        if(params.success){
          params.success(data);
        }
      }
    })
  },

  // 搜索item
  getSearch: function(params){
    var q = params.q;
    var url = globalUrls.searchUrl(q);
    wx.request({
      url: url,
      success: function(res){
        var subjects = res.data.subjects;
        if(params.success){
          params.success(subjects);
        }
      }
    })
  }
}

export { network }