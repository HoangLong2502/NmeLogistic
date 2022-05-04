@<template>
  <div class="order-list pl1 pr1 mt2">
      <div class="order__filter f aic">

            <div class="filter__item filter-select border-radius mr05 bg-red-2">
              <div class="filter-select-text h7"> Chờ nhận </div>
            </div>
            <div class="filter__item border-radius mr05 bg-red-2">
              <div class="filter__item-text h7"> Đang thực hiện </div>
            </div>
            <div class="filter__item border-radius mr05 bg-red-2">
              <div class="filter__item-text h7"> Hoàn thành </div>
            </div>
            <div class="filter__item border-radius mr05 bg-red-2">
              <div class="filter__item-text h7"> Đã huỷ </div>
            </div>
      </div>

      <div class="w100">
        <div 
          v-for="(item, key) in ListOrder"
          :key="key">
          <router-link :to="{ name: 'detail-order', params : { id : item.id }}">
            <div class="order__item mt15 border border-radius bg-white-1">
              <div class="item__header f jcb aic pt075 pb075 pr1 pl1 border-bottom">
                <div class="h7 blue">Mã đơn hàng</div>
                <div 
                  class="h7 border border-radius pt025 pb025 pl05 pr05"
                  v-if="item.status_order == 1">Chờ nhận</div>
                <div 
                  class="h7 border-radius pt025 pb025 pl05 pr05 orange bg-yellow"
                  v-if="item.status_order == 2 || item.status_order == 4">Đang thực hiện</div>
                <div 
                  class="h7 border-radius pt025 pb025 pl05 pr05 red-1 bg-red-faild"
                  v-if="item.status_order == 5">Đã huỷ</div>
              </div>
              <div class="item__info pt075 pr1 pl1">
                <div class="info__item f jcb ">
                  <div class="h6 gray">Địa chỉ khách </div>
                  <div class="h7 w50 align-e"> {{ item.customer_address }} </div>
                </div>
                <div class="info__item f jcb ">
                  <div class="h6 gray">Địa chỉ kho</div>
                  <div class="h7 w50 align-e"> {{item.warehouse_address}} </div>
                </div>
                <div class="info__item f jcb ">
                  <div class="h6 gray">Tổng tiền hàng</div>
                  <div class="title-price h7 w50 align-e"> {{item.deposit_amount}}</div>
                </div>
              </div>
              <div class="item__total f jcb aic pt1 pb1 pl1 pr1 bg-gray-3">
                <div class="item__total-price">
                  <div class="mb05 h6 gray">Lợi nhuận</div>
                  <div class="h3"> {{ item.shipper_profit }}</div>
                </div>
                <div class="item__total-btn h5 pt05 pb05 border border-radius">
                  Xem chi tiết
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { HTTP } from '../../http-default'
export default {
  props: {
    dataOrder : {
      type : Array,
      default() {
        return []
      }
    },
    dataStatusOrder : {
      type : Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      ListOrder : [],
      ListStatus : []
    }
  },
  methods: {
    getData() {
      HTTP.get('/v1/api/order/')
      .then((res) => {
        this.ListOrder = res.data.results
        for (let i = 0; i < this.ListOrder.length; i++) {
          this.ListOrder[i].deposit_amount = this.ListOrder[i].deposit_amount.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
          this.ListOrder[i].shipper_profit = this.ListOrder[i].shipper_profit.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        }
      })
      HTTP.get(this.dataStatusOrder[0]['props']['urlapi'])
      .then((res) => {
        this.ListStatus = res.data.results
      })
    },
    handleSelectFilter() {
      var filter = document.getElementsByClassName('filter__item')[0]
      filter.classList.add('filter-selec')
    }
  },
  created() {
    setTimeout(() => {
      this.getData()
      this.handleSelectFilter()
    }, 2000)
    console.log(this.dataOrder)
  }
}
</script>

<style scoped lang="scss">
  @import 'OrderList.scss';
</style>