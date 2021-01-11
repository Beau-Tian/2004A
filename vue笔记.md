#### 今日大纲

1. 安装脚手架配置vue3的环境插件
2. 商品列表页面+商品详情页面数据请求渲染
3. 点击单个商品进入详情页面传递数据参数，完成详情页面的布局和数据渲染
4. 点击加入购物车，如果用户未登录跳转到登陆页面，登陆后返回，如果登陆后直接把商品加入购物车
5. 购物车列表数据使用vuex存储，完成购物车页面的简单功能



#### 今日内容

##### 考点分析

- 脚手架的安装/路由切换 
- 前端页面路由鉴权
- 未登录用户进行拦截
- 未登录用户进行拦截
- 首页模块布局
- css3样式
- vue路由传参/图片懒加载
- vuex



##### 安装vue的脚手架

- 创建脚手架的命令

  ```js
  vue3 create myapp //创建脚手架的名字
  ```

- 需要安装的依赖有哪些?

  > axios   element-ui   node-sass@4.14.1  sass-loader@7.3.1    echarts   vant  vuex-persist  vuex

  - axios安装和配置信息

    ```js
    //axios 
    cnpm install axios --save  
    //配置axios的信息
    utils/request.js配置拦截器的
    
    //main.js引入axios拦截器
    import  axios from "@/utils/request.js"
    Vue.prototype.$axios = axios;
    
    ```

  - element-ui

    ```js
    cnpm install element-ui --save 
    
    //main.js 配置信息
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);
    ```

  - node-sass@4.14.1  sass-loader@7.3.1

    ```js
    cnpm install node-sass@4.14.1  sass-loader@7.3.1 --save 
    
    //组件内容使用
    <style lang="scss" scoped>
    </style>
    ```

  - echarts 安装参考官网

    ```js
    cnpm install echarts --save 
    //main.js
    import * as echarts from "axios"
    Vue.prototype.$echats = echarts;
    ```

  - vuex-persist 安装

    ```js
    cnpm install --save vuex-persist
    
    //store.js配置信息
    
    //1.导入插件
    import VuexPersistence from 'vuex-persist'
    //2. 创建对象进行配置
    const vuexLocal = new VuexPersistence({
        storage: window.localStorage,//配置存储介质，默认持久化到本地存储中
    })
    
    //3. 引入插件
    const store = new Vuex.Store({
      state: { ... },
      mutations: { ... },
      actions: { ... },
      plugins: [vuexLocal.plugin],//引入插件
    }) 
    
    ```

  - vantUI 移动端的组件  https://youzan.github.io/vant/#/zh-CN/image

    ```js
    cnpm install vant --save   //安装vant组件
    
    //引入vant组件
    import Vant from 'vant';
    import 'vant/lib/index.css';
    
    Vue.use(Vant);
    ```

    



##### vantUI组件的使用

**重点**  一定多看文档  https://youzan.github.io/vant/#/zh-CN/quickstart

vant组件所有的标签都是以van开头的，使用方式可以参考element-ui

##### 商品列表页面数据请求渲染

- 首页页面的基本布局
- 底部路由的切换操作
  - 二级路由，vant中路由切换的操作
- 首页接口数据 参考网址地址  http://39.105.231.166:7000/api.html#8ba0bd02eb6e4968a2bb958faffb4289
  - 首页轮播图的接口  
  - 首页商品列表接口 https://api.it120.cc/small4/shop/goods/list 

##### 商品详情页面

- 动态路由传参，点击列表进入详情页面，/detail/1000   this.$route.params.id;
- 请求详情页的接口数据   https://api.it120.cc/small4/shop/goods/detail ?id = 1000
- 把请求到的数据，渲染到详情页面上.......

##### 用户登录及加入购物车鉴权，用户登录信息显示

点击我的按钮，判断用户是否登陆，token值是否存在，如果不存在重定向登陆页面

- 登陆页面  vant中form表单   请求登陆接口，

  ```js
  //格式化为formdata格式的数据
        let formdata = new FormData();
        formdata.append("mobile",this.mobile)
        formdata.append("pwd",this.pwd)
  
        //;
        this.$axios
          .post(
            "https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
           formdata
          )
          .then((res) => {
            console.log(res);
            if(res.code == 0){
                this.$toast.success("登陆成功");
                this.$store.commit("setToken",res.data);
  
                this.$router.go(-1);
            }else{
                 this.$toast.fail(res.msg);
                 return false;
            }
          });
  ```

  

- 登陆成功后，把用户数据存储到vuex中，同步到本地即可

- 用户中心获取用户的数据，显示到页面上，点击退出清楚vuex中的token，跳回首页

  - token传值需要转换为formdata数据

    

##### 购物车数据vuex存储及功能

- 点击加入购物车按钮，判断用户是否登陆，如果登陆直接加入购物车，否则提示错误信息

  ```js
   addCart() {
        //用户未登录时候去登陆页面
        if (this.$store.state.token == "") {
          this.$dialog
            .confirm({
              title: "提示",
              message: "您还没有登陆，请登录后再加入购物车吧",
            })
            .then(() => {
              // on confirm
              this.$router.push("/login");
            })
            .catch(() => {
              // on cancel
              this.$toast("你残忍的拒绝了我");
            });
        } else {
          //定义好的购物车数据
          let obj = {
            id: this.goodInfo.id,
            name: this.goodInfo.name,
            img: this.goodInfo.pic,
            price: this.goodInfo.originalPrice,
            num: this.num,
          };
  
          this.$store.commit("addCart", obj);
          this.$toast.success("加入购物车成功");
        }
      },
  ```

- vuex中存储购物车的数据操作

  ```js
  mutations:{
      //加入购物车数据
      addCart(state,goods){
        console.log(goods);
  
        state.cartList.push(goods);
      },
  
      remove(state,index){
        state.cartList.splice(index,1);
      }
  }
  //计算购物车的数据
  getters: {
      //统计商品总数量
      nums(state){
        let num = 0;
  
        state.cartList.forEach(item=>{
          num += item.num;
        })
  
        return num;
      }
    },
  ```

  





