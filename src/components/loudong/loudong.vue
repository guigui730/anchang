<template>
  <div class="loudong">
    <div class="tip">
      <div class="title">设置楼栋参数</div>
    </div>
    <div class="main">
      <div class="left">
        <ul>
          <li class="left-item">
            <img width="18" height="17" src="tip1.png" alt="">
            <span>选择楼栋租售类型:</span>
          </li>
          <li class="left-specil">
            <div class="left-item">
              <img width="18" height="18" src="tip2.png" alt="">
              <span>选择楼栋物业类型:</span>
            </div>
            <ul>
              <li class="left-item">
                <input type="radio" name="houseType" id="zhu">
                <label for="zhu">住宅物业类型:</label>
              </li>
              <li class="left-item">
                <input type="radio" name="houseType" id="shang">
                <label for="shang">商业物业类型:</label>
              </li>
              <li class="left-item">
                <input type="radio" name="houseType" id="xie">
                <label for="xie">写字楼物业类型:</label>
              </li>
            </ul>
          </li>
          <li class="left-item margin-left">
            <img width="17" height="17" src="tip3.png" alt="">
            <span>选择产权年限:  </span>
          </li>
          <li class="left-item margin-left">
            <img width="17" height="17" src="tip4.png" alt="">
            <span>选择楼栋户型:  </span>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="line">
          <div class="wrapper" v-for="item in zushouType">
            <input type="radio" name="zoushouType" id="{{item.name}}">
            <label for="{{item.name}}">{{item.text}}</label>
          </div>
        </div>
        <div class="line margin-top">
          <div class="wrapper" v-for="item in zhuzhaiwuye">
            <input type="radio" name="zhuzhaiwuye" id="{{item.name}}">
            <label for="{{item.name}}">{{item.text}}</label>
          </div>
        </div>
        <div class="line">
          <div class="wrapper" v-for="item in shangyewuye">
            <input type="radio" name="shangyewuye" id="{{item.name}}">
            <label for="{{item.name}}">{{item.text}}</label>
          </div>
        </div>
        <div class="line mar">
          <div class="wrapper" v-for="item in xieziType">
            <input type="radio" name="xieziType" id="{{item.name}}">
            <label for="{{item.name}}">{{item.text}}</label>
          </div>
        </div>
        <div class="line">
          <div class="wrapper">
            <select name="" id="">
              <option value="70年">70年</option>
            </select>
          </div>
        </div>
        <div class="line">
          <div class="wrapper" v-for="item in loudongType">
            <input type="checkbox" name="loudongType" id="{{item.name}}" value="{{item.text}}">
            <label for="{{item.name}}">{{item.text}}</label>
          </div>
        </div>
      </div>
      <div class="bottom">
        <a class="prev" v-link="{path:'/upDown/loupan'}">上一步</a>
        <a class="next" v-link="{path:'/louceng'}">下一步</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return{
        zushouType:[
          {
            name:'chuzu',
            text:'出租'
          },
          {
            name:'chushou',
            text:'出售'
          },
          {
            name:'zushou',
            text:'租售'
          }
        ],
        zhuzhaiwuye:[
          {
            name:'bieshu',
            text:'别墅'
          },
          {
            name:'xiaogao',
            text:'小高层'
          },
          {
            name:'gaoceng',
            text:'高层'
          },
          {
            name:'chaogaoceng',
            text:'超高层'
          },
          {
            name:'dieceng',
            text:'叠加'
          },
          {
            name:'duoceng',
            text:'多层'
          },
          {
            name:'paiwu',
            text:'排屋'
          }
        ],
        shangyewuye:[
          {
            name:'shnagyejie',
            text:'商业街'
          },
          {
            name:'jizhong',
            text:'集中商业'
          },
          {
            name:'jiudian',
            text:'酒店公寓'
          },
          {
            name:'dishang',
            text:'底商'
          }
        ],
        xieziType:[
          {
            name:'soho',
            text:'soho'
          },
          {
            name:'xiezilou',
            text:'写字楼'
          }
        ],
        loudongType:[
          {
            name:'00',
            text:'00户型'
          },
          {
            name:'12',
            text:'12户型'
          },
          {
            name:'test',
            text:'test户型'
          },
          {
            name:'B',
            text:'B户型'
          },
          {
            name:'A1',
            text:'A1户型'
          },
          {
            name:'A2',
            text:'A2户型'
          }
        ]
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .loudong
    flex 1
    background #f0f4fb
    padding 80px 30px 60px 30px
    .tip
      margin-top 60px
      margin-bottom 20px
      .title
        width 138px
        height 36px
        line-height 36px
        text-align center
        background #ff9666
        color #fff
        font-size 14px
        border-radius 5px
    .main
      position relative
      width 100%
      height 710px
      border-radius 5px
      background #fff
      .left
        float left
        width 240px
        height 490px
        background #f7f8fb
        .left-item
          width 100%
          height 65px
          line-height 65px
          text-align center
          color #616b88
          font-size 16px
          img
            vertical-align middle
        .margin-left
          box-sizing border-box
          margin-left -15px
        .left-specil
          width 100%
          height 285px
      .right
        box-sizing border-box
        position absolute
        left 240px
        top 0
        padding-left 45px
        padding-top 20px
        .margin-top
          margin-top 58px
          margin-bottom 8px
        .mar
          margin-bottom 26px
        .line
          height 65px
          .wrapper
            display inline-block
            width 126px
            height 32px
            line-height 32px
            background #f6f9fd
            border 1px solid #d6dfe6
            border-radius 5px
            color #616b88
            font-size 14px
            text-align center
            margin-right 30px
      .bottom
        position absolute
        left 0
        bottom 20px
        width 100%
        text-align center
        .prev ,.next
          display inline-block
          width 130px
          height 36px
          line-height 36px
          border-radius 5px
          color #fff
          text-align center
        .prev
          background #cccccc
          margin-right 250px
        .next
          background #46c1de
</style>
