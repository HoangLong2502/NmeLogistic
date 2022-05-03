<template>
  <div class="home h100vh bg-gray-1">
    <div class="home__header mt25 pl1 pr1">
      <div class="h3">Đơn hàng</div>
      <div class="home__search relative w100">
        <div class="icon-search">
          <div class="icon icon--search"></div>
        </div>
        <input class="home__search-input w100 pt075 pb075 pr075" type="text" placeholder="Nhập mã đơn hàng bạn muốn tìm">
      </div>
    </div>
    <OrderListView :dataOrder="dataOrder" :dataStatusOrder="dataStatusOrder"></OrderListView>
    <NavBarView :dataNav="dataNav"></NavBarView>
  </div>
</template>

<script>
import OrderListView from '@/components/OrderView/OrderListView.vue'
import NavBarView from '@/components/NavBarView/NavBarView.vue'
import { HTTP } from '../http-default'

export default {
  data() {
    return {
      dataSystem : [],
      dataNav : [],
      dataStatusOrder : [],
      dataOrder : []
    }
  },
  components: {
    OrderListView,
    NavBarView
  },
  methods : {
    getData() {
      HTTP.get('v1/api/system/')
      .then((res) => {
        const setting = res.data.results[0].router.toLowerCase()
        const results = setting.replaceAll("'", '"')
        this.dataSystem = JSON.parse(results)
        for (let index = 0; index < this.dataSystem.length; index++) {
          if (this.dataSystem[index].levelmenu == 1) {
            this.dataNav.push(this.dataSystem[index])
          }
          if (this.dataSystem[index].path == this.$route.fullPath ) {
            this.dataOrder.push(this.dataSystem[index])
          }
          if (this.dataSystem[index].path == '/quan-ly-statusorder' ) {
            this.dataStatusOrder.push(this.dataSystem[index])
          }
        }
      })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped lang='scss'>
.home {
  width: 100vw;
}

.home__header {
  padding-top: 2.5em;
}

.home__search-input {
  padding-left: 2.25em;
}

.h3 {
  margin-bottom: 1em;
}

.icon-search {
    position: absolute;
    top: 28%;
    left: 0.5em
}
</style>