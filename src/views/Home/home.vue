<template>
  <div>
<!--    //三级导航栏-->
    <TypeNav></TypeNav>
<!--    轮播图-->
    <listContainer></listContainer>
<!--    今日推荐-->
    <TodyRecommend></TodyRecommend>
<!--    商品排行-->
    <Rank></Rank>
<!--    猜你喜欢-->
    <like></like>
<!--    楼层-->
    <Floor></Floor>
<!--    商标-->
    <Brand></Brand>
  </div>
</template>

<script>
import listContainer from '@/views/Home/listContainer/listContainer'
import TodyRecommend from '@/views/Home/TodayRecommend/TodayRecommend'
import Rank from '@/views/Home/Rank/Rank'
import like from '@/views/Home/like/like'
import Floor from '@/views/Home/Floor/Floor'
import Brand from '@/views/Home/Brand/Brand'
export default {
  name: "home",
  components: {
    listContainer,
    TodyRecommend,
    Rank,
    like,
    Floor,
    Brand
  }
}
</script>

<style scoped>

</style>