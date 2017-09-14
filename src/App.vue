<template>
  <div class="nav-wrapper">
    <div class="left-wrapper">
      <div class="logo">
        <img src="assets/logo.png" >
      </div>
      <div class="title">
        <img src="assets/people.png">
        <h1>案场助理个人中心</h1>
      </div>
      <ul class="tab border-1px">
        <li class="li-item">
          <a class="a-item" v-link="{path:'/indens'}">首页</a>
        </li>
        <li class="li-item" >
          <i class="icon-箭头"></i>
          <a class="a-item " v-link="{path:'/weihu'}">案场信息维护</a>
        </li>
        <li class="li-item" >
          <a class="a-item" >价格优惠条款</a>
        </li>
        <li class="li-item">
          <i class="icon-箭头"></i>
          <a class="a-item" @click="transcoldeShow">房源管理</a>
        </li>
        <li class="li-item" v-show="showCtrl" >
          <a class="a-item item-selected" v-link="{path:'/upDown'}">上下架管理</a>
        </li>
        <li class="li-item">
          <a class="a-item" v-link="{path:'/cusManage'}">客户管理</a>
        </li>
        <li class="li-item">
          <a class="a-item" v-link="{path:'/business'}">成交业务</a>
        </li>
        <li class="li-item">
          <a class="a-item" v-link="{path:'/check'}">对账单</a>
        </li>
        <li class="li-item">
          <a class="a-item" v-link="{path:'/numManage'}">账号管理</a>
        </li>
      </ul>
    </div>
    <div class="header-wrapper">
      <div class="notice">
        <img width="11" height="11" src="assets/remind.png" >
        <span>系统全局公告。</span>
        <img class="rightimg" width="10" height="10" src="assets/close.png">
      </div>
      <div class="right">
        <img class="head" width="32" height="32" src="assets/head.png">
        <span>欢迎你：</span>
        <span class="name">123</span>
        <img width="9" height="8" src="assets/0000.png">
      </div>


    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showCtrl: false
      }
    },
    methods: {
      transcoldeShow() {
        this.showCtrl = ! this.showCtrl;
      }
    },
    computed: {

    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import "./common/stylus/mixin.styl"
  @import "common/stylus/style.css"
  .nav-wrapper
    position relative
    display flex
    min-height 100%
    .left-wrapper
      flex  0 0 255px
      z-index 30
      background #616b88
      .logo
        height 80px
        background #565e78
        vertical-align middle
        text-align center
        img
          display inline-block
          margin-top 17px
          width 118px
          height 46px
      .title
        height 50px
        background #616b88
        border-bottom 1px solid #69738e
        img
          margin 14px 10px 0px 30px
          vertical-align top
          display inline-block
        h1
          line-height 50px
          display inline-block
          font-size 18px
          color #eaeaea

      .tab
        background #616b88
        .li-item
          position relative
          height 50px
          line-height 50px
          border-bottom 2px solid #69738e
          i
            :hover
              background transparent
              border-left none
          .icon-箭头
            display inline-block
            position absolute
            top 16px
            right 12px
            :hover
              background transparent
              border-left none
          :hover
            background #47506c
            color #46c1de
            border-left 4px solid #46c1de
          a
            padding-left 30px
            display block
            color #ffffff
            font-size 14px
            &.item-selected
              color #9d8ad3
              background #47506c
            &.active
              background #fff
              color #46c1de
              border-left 4px solid #46c1de
    .header-wrapper
      position fixed
      top 0
      left 0
      width 100%
      z-index 20
      padding-left 255px
      height 80px
      line-height 80px
      background #fff
      .notice
        float left
        height 38px
        line-height 38px
        background #fdf7f4
        color #ff915b
        font-size 14px
        width 60%
        margin-left 14px
        margin-top 22px
        border-radius 10px
        padding-left 28px
        .rightimg
          float right
          vertical-align top
          margin-top 14px
          margin-right 5px
      .right
        float left
        margin-right 35px
        padding-left 15%
        font-size 14px
        color #a9b3c7
        .head
          vertical-align top
          margin-top 24px
        .name
          margin-right 4px
      .tabs
        position relative
        float left
        width 100%
        height 180px
        background #f0f4fb
        .nav-wrap
          height 50px
          line-height 50px
          padding-left 30px
          .item-selected
            color #46c1de
            font-size 14px

</style>
