@<template>
  <div class="successful pt15 pl1 pr1">
      <div class="successful-header f fdc aic mb1">
          <div class="successful-noti"></div>
          <div class="info h2">Thông báo</div>
          <div class="pick-up h2">Bạn đã nhận hàng</div>
      </div>
      <div class="successful-media f aic mb1 border-radius bg-gray-5">
          <div class="h5 mr1 pt05 pb05 pl1 pr1 border-radius bg-blue white">Tải ảnh lên</div>
          <div class="f fdc jcb">
              <div class="h7">Thêm ảnh</div>
              <div class="h6 gray">Dung lượng tối đa 2MB</div>
          </div>
      </div>
      <div class="successful-note mb15">
          <div class="successful-note__title p4">
              Chú thích
          </div>
          <textarea class="h7 pt05 pb05 pl075 pr075" name="" id="" cols="30" rows="10" placeholder="Thêm ghi chú cho đơn hàng của bạn"></textarea>
      </div>
      <div class="successful-rating mb1">
            <div class="successful-rating__title h8 mb1">
                Vui lòng đánh giá dịch vụ kho
            </div>
            <div class="f jcb aic mb05">
                <div class="h6">Tiêu chí 1</div>
                <RatingStarView></RatingStarView>
            </div>
            <div class="f jcb aic mb05">
                <div class="h6">Tiêu chí 2</div>
                <RatingStarView></RatingStarView>
            </div>
            <div class="f jcb aic mb05">
                <div class="h6">Tiêu chí 3</div>
                <RatingStarView></RatingStarView>
            </div>
      </div>
      <div class="successful-comment mb1">
          <div class="successful-comment__title p4">
              Ghi chú
          </div>
          <textarea class="h7 pt05 pb05 pl075 pr075" name="" id="" cols="30" rows="10" placeholder="Thêm nhận xét"></textarea>
      </div>
      <div class="successful-action">
          <div class="successful-action__rules h6 mb15 align-c gray">
              Bạn có trách nhiệm bảo quản và chuyển giao kiện hàng, theo <span class="blue h7">Điều khoản và Điều kiện</span> của chúng tôi  
          </div>
          <div class="successful-action__btn f jcb aic mb15">
              <div class="w50 h8 pt1 pb1 border align-c border-radius">Huỷ bỏ</div>
              <div @click="handleBack" class="w50 h8 pt1 pb1 ml05 align-c border-radius bg-red-1 white">Tôi đã hiểu</div>
          </div>
      </div>
  </div>
</template>

<script>
import RatingStarView from "@/components/RatingStarView/RatingStarView.vue"
export default {
    components: {
        RatingStarView
    },
    methods: {
        handleBack() {
            this.$router.go(-1)
        },
    }
}
</script>

<style scoped lang="scss">
    @import "SuccessfulPickUp.scss";
</style>