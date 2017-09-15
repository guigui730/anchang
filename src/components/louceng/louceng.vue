<template>
  <div class="louceng">
    <div class="tip">
      <div class="title">设置单元楼层及户数</div>
    </div>
    <div class="setting">
      <div class="top">
        <div class="loucen">
          <img width="18" height="17" src="top1.png" alt="">
          <span>选择楼层数</span>
          <input type="text" v-model="setValue.loucen">
        </div>
        <div class="rules">
          <img width="17" height="19" src="top2.png" alt="">
          <span>更改房号生成规则</span>
          <input type="text" v-model="setValue.rules">
        </div>
        <div class="danyuan">
          <img width="17" height="17" src="top3.png" alt="">
          <span>选择单元数量</span>
          <input type="text" v-model="setValue.danyuan">
        </div>
        <div class="tips">
          <span class="hint">提示：</span>
          <span class="hint-con">选择0为独栋别墅</span>
        </div>
      </div>
      <div class="bottom">
        <div class="hushu">
          <div class="left">
            <img width="18" height="18" src="top4.png" >
            <span>楼层户数</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>单元名称</th>
                <th v-for="item in items">{{item}}单元</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th>每层户数</th>
                  <th v-for="item in items" track-by="$index">
                    <input type="text" v-model="hushuList[$index]">
                  </th>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="content">
      <table>
        <thead>
          <tr>
            <th rowspan="2" style="vertical-align: middle;width:105px ">楼层数</th>
            <th style="width:105px ">单元</th>
            <th v-for="item in items" track-by="$index" colspan="" v-el:cos>{{item}}单元</th>
          </tr>
          <tr>
            <th style="width:105px ">房号</th>
            <th v-for="item in lists" track-by="$index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ite in louList" track-by="$index">
            <td colspan="2">{{$index+1}}</td>
            <td v-for="item in lists" track-by="$index">{{$parent.$index+1}}{{item}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        setValue: {
          loucen:3,
          rules:1,
          danyuan:3,
          cosp:[]
        },

        hushuList: []
      }
    },
    computed: {
      items() {
       let result = [];
       if(this.setValue.danyuan>10) {
         return;
       }
       for(let i =1;i<=this.setValue.danyuan;i++){
         result.push(i);
       }
       return result;
      },
      louList() {
        let result = [];
        if(this.setValue.loucen>10) {
          return;
        }
        for(let i =1;i<=this.setValue.loucen;i++){
          result.push(i);
        }
        return result;
      },
      lists() {
        let result = [];
        this.hushuList.forEach((i) => {
          for(let a=1;a<= i;a++) {
            result.push(a)
          }
        });
        return result;
      },
      cosp() {

      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .louceng
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
    .setting
      width 1600px
      height 210px
      box-sizing border-box
      padding 26px 80px
      background #fff
      color #616b88
      font-size 16px
      .top
        height 50px
        line-height 50px
        input
          display inline-block
          height 30px
          background #f6f9fd
          border 1px solid #d6dfe6
          border-radius 5px
          padding-left 10px
        .loucen
          display inline-block
          margin-right 240px
          input
            width 80px
        .rules
          display inline-block
          margin-right 240px
          input
            width 100px
        .danyuan
          display inline-block
          margin-right 85px
          input
            width 80px
        .tips
          display inline-block
          .hint
            color #ff1722
            font-size 14px
          .hint-con
            color #616b88
            font-size 14px
      .bottom
        height 130px
        line-height 130px
        .hushu
          position relative
          .left
            float left
            width 10%
          table
            float left
            width 90%
            height 90px
            margin-top 20px
            tr ,th
              height 45px
              line-height 45px
              background #f6f9fd
              color #616b88
              font-size 14px
              border 1px solid #d6dfe6
              input
                width 60px
                height 24px
                border 1px solid #d6dfe6
                border-radius 5px
                padding-left 10px
                color #616b88
    .content
      width 1600px
      height 900px
      box-sizing border-box
      margin-top 30px
      background #fff
      color #616b88
      font-size 16px
      padding 60px 50px 130px 50px
      table
        width 100%
        thead
          width 100%
          tr
            width 100%
            th
              width 428px
        tr ,th ,td
          height 45px
          line-height 45px
          color #616b88
          font-size 14px
          border 1px solid #d6dfe6
          text-align center
        tr,th
          background #f6f9fd
        tbody
          tr:nth-child(odd)
            background #fff
</style>
