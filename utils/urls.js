const globalUrls = {
  movieList: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  tvList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  showList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  musicList:"https://m.douban.com/rexxar/api/v2/subject_collection/music_hot/items",
  bookList:"https://m.douban.com/rexxar/api/v2/subject_collection/book_hot/items",
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  musicDetail: "https://m.douban.com/rexxar/api/v2/music/",
  bookDetail: "https://m.douban.com/rexxar/api/v2/book/",
  movieTags: function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/"+ id +"/tags?count=8"
  },
  tvTags: function(id){
    return "https://m.douban.com/rexxar/api/v2/tv/"+id+"/tags?count=8"
  },
  showTags: function(id){
    return this.tvTags(id);
  },
  musicTags: function(id){
    return "https://m.douban.com/rexxar/api/v2/music/"+id+"/tags?count=8"
  },
  bookTags: function(id){
    return "https://m.douban.com/rexxar/api/v2/book/"+id+"/tags?count=8"
  },
  movieComments: function(id,start=0,count=3){
    return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start=' + start;
  },
  tvComments: function(id,start=0,count=3){
    return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
  },
  musicComments: function(id,start=0,count=3){
    return 'https://m.douban.com/rexxar/api/v2/music/' + id + '/interests?count=' + count + '&start=' + start;
  },
  bookComments: function(id,start=0,count=3){
    return 'https://m.douban.com/rexxar/api/v2/book/' + id + '/interests?count=' + count + '&start=' + start;
  },
  showComments: function(id,start=0,count=3){
    return this.tvComments(id,start,count);
  },
  searchUrl: function (q) {
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q
  }
}

export {globalUrls}