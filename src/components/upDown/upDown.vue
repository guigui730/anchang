<template>
  <div class="upDown-wrapper">
    <div class="tabs">
      <div class="nav-wrap">
        <img width="10" height="10" src="../../assets/star.png">
        <span>房源管理></span>
        <a class="a-item item-selected" v-link="{path:'/upDown'}">上下架管理</a>
      </div>
      <div class="root">
        <li class="li-item">
          <a class="a-item" v-link="{path:'/upDown/loupan'}">楼盘表视图</a>
        </li>
        <li class="li-item">
          <a class="a-item" v-link="{path:'/upDown/list'}">列表视图</a>
        </li>
        <div class="portGrop">
          <div class="export">
            <span>导入房源</span>
            <img width="17" height="17" src="../../assets/export.png" >
          </div>
          <div class="import">
            <span>导出房源</span>
            <img width="17" height="17" src="../../assets/import.png" >
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import loupan from '../../components/loupan/loupan.vue';
  import list from '../../components/list/list.vue';

  export  default {
    data() {
      return {
        showAdd: false
      }
    },
    methods: {
      transcoldeShow() {
        this.showAdd = ! this.showAdd;
      }
    },
    components: {
      loupan
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .upDown-wrapper
    flex 1
    padding px 30px 70px 30px
    z-index 10
    background #f0f4fb
    .tabs
      .root
        height 110px
        .portGrop
          height 50px
          margin-top 28px
          .export, .import
            float left
            width 130px
            height 36px
            box-sizing border-box
            line-height 36px
            border 1px solid #d6dfe6
            border-radius 5px
            padding-left 12px
            margin-right 24px
            background #f6f9fd
            span
              margin-right 24px
            img
              vertical-align top
              margin-top 10px
        .li-item
          display inline-block
          margin-right 20px
          a
            color #616b88
            font-size 14px
            &.active
              border-bottom 2px solid #ff3b3b
    .nav-wrap
      color #626873
      font-size 14px
      margin-bottom 20px
      a
        color #46c1de

    .select-wrapper
      /*margin-bottom 24px
      .selectStyl1
        width 128px
        height 36px
        border 2px solid #d6dfe6
        border-radius 4px
        margin-right 12px
      .selectStyl2
        width 156px
        height 36px
        border 2px solid #d6dfe6
        border-radius 4px
        margin-right 12px
      .search
        width 80px
        height 36px
        background #46c1de
        color #fff
        font-size 14px
        border-radius 4px*/
    .content-wrapper
      display flex
      background #fff
      .content-left
        flex 0 0 380px
        .button-wrapper, .list
          box-sizing border-box
          float left
          width 190px
        .list
          padding-top 40px
          border 2px solid #d6dfe6
          .hright1
            height 40px
        .button-wrapper
          padding-top 28px
          padding-left 40px
          button
            width 108px
            height 34px
            border 2px solid #d6dfe6
            color #616b88
            font-size 14px
            background #f6f9fd
            border-radius 5px
            margin-bottom 30px
            &.active
              color #fff
              background #46c1de
      .content-right
        flex 1
        position relative
        min-height 610px
        .create-house
          position absolute
          left 150px
          top 200px
          width 540px
          height 240px
          display block
          border 1px solid #d6dfe6
          border-radius 5px
          text-align center
          .add-img
            margin-top 80px
            margin-bottom 20px
          .create
            color #616b88
            font-size 24px
            text-align center
    .add-eara
      position fixed
      top 315px
      left 480px
      width 420px
      height 340px
      background #f0f4fb
      border 1px solid #f0f4fb
      border-radius 5px
      .title
        position relative
        width 100%
        height 60px
        line-height 60px
        background #fff
        color #616b88
        font-size 16px
        font-weight 700
        padding-left 60px
        img
          position absolute
          top 20px
          left 20px
      .content
        padding 74px 40px 0 40px
        label
          color #616b88
          font-size 14px
          margin-right 32px
        #fenqu
          width 126px
          height 30px
          border 1px solid #d6dfe6
          border-radius 5px
          color #616b88
          font-size 14px
        .putin
          width 80%
          margin 0 auto
          text-align center
          padding-bottom 60px
        .buttons
          width 100%
          margin 0 auto
          .cancel
            color #616b88
            font-size 14px
            background #d6dfe6
            margin-right 60px
          .finish
            color #fff
            font-size 14px
            background #46c1de
          button
            width 130px
            height 36px
            border none
            border-radius 5px
            text-align center
</style>
