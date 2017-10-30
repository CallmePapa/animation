module.exports={
  entry:{
      animation:"./src/rabbit.js"//入口文件
  },
    output:{　　　//输出文件
      path:__dirname+"/build",
        filename:"[name].js",
        library:"aniamtion",
        libraryTarget:"umd"
    }
};