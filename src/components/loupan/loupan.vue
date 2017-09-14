<template>
  <div id="loupan">
    <div class="select-wrapper">
      <!--<select name="" id="1" class="selectStyl1">
        <option  value="">选择房型</option>
      </select>
      <select name="" id="2" class="selectStyl1">
        <option  value="">房源状态</option>
        <option>A</option>
        <option>B</option>
      </select>
      <select name="" id="3" class="selectStyl1">
        <option  value="">房源类型</option>
        <option>A</option>
        <option>B</option>
      </select>
      <select name="" id="4" class="selectStyl2">
        <option value="">经纪人是否可见</option>
        <option>A</option>
        <option>B</option>
      </select>
      <button class="search">搜索</button>-->

    </div>
    <div class="content-wrapper">
      <div class="content-left">
        <div class="button-wrapper">
          <button class="active" @click="transcoldeShow">添加分区</button>
          <button @click="transcoldeShow1">添加楼栋</button>
          <button @click="transcoldeShow2">删除</button>
          <button>编辑</button>
        </div>
        <div class="list">

        </div>
      </div>
      <div class="content-right">
        <a v-link="{path:'/loudong'}">
          <div class="create-house">
            <img class="add-img" width="35" height="35" src="图标蓝色加号.png">
            <p class="create">生成房源</p>
          </div>
        </a>
      </div>
    </div>
    <div class="add-eara" v-show="showAdd">
      <h1 class="title"><img width="26" height="24" src="addfenqu.png" alt="">添加分区</h1>
      <div class="content">
        <div class="putin">
          <label for="fenqu">分区名称</label>
          <input type="text" id="fenqu">
        </div>
        <div class="buttons">
          <button class="cancel">取消</button>
          <button class="finish">完成</button>
        </div>
      </div>
    </div>
    <div class="add-house" v-show="showAddtwo">
      <h1 class="title"><img width="26" height="24" src="addfenqu.png" alt="">添加楼栋</h1>
      <div class="content">
        <div class="putin2">
          <div class="line">
            <label for="suoshu">所属分区</label>
            <select name="" id="suoshu">
              <option>东区</option>
            </select>
          </div>
          <div class="line">
            <label for="loudong">楼栋名称</label>
            <input type="text" id="loudong">
          </div>
        </div>
        <div class="buttons">
          <button class="cancel">取消</button>
          <button class="finish">完成</button>
        </div>
      </div>
    </div>
    <div class="delate-eara" v-show="showAddthree">
      <h1 class="title">提示</h1>
      <div class="content">
        <div class="putin">
          <p class="tip">是否继续“删除南区”操作，内容删除后 不可恢复！</p>
        </div>
        <div class="buttons">
          <button class="cancel">取消</button>
          <button class="finish">完成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export  default {
    data() {
      return {
        showAdd: false,
        showAddtwo:false,
        showAddthree:false
      }
    },
    methods: {
      transcoldeShow() {
        this.showAdd = ! this.showAdd;
      },
      transcoldeShow1() {
        this.showAddtwo = ! this.showAddtwo;
      },
      transcoldeShow2() {
        this.showAddthree = !this.showAddthree;
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .upDown-wrapper
    flex 1
    padding 100px 30px 70px 30px
    z-index 10
    background #f0f4fb
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
    .add-eara, .add-house ,.delate-eara
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
        .putin2
          width 80%
          margin 0 auto
          text-align center
          height 100px
          .line
            margin-bottom 20px
          input ,select
            width 125px
            height 32px
            border 1px solid #d6dfe6
            border-radius 4px
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
    .delate-eara
      .tip
        color #fe1e1e
        font-size 18px
        line-height 20px
</style>
