@<template>
    <div class="delivery-fail bg-gray-1 h100vh">
        <div class="delivery-fail__header w100 f jcb aic pt075 pb075 pl1 pr1 bg-white-1">
            <div 
                class="f aic"
                @click="handleBack">
                <div class="delivery-fail__header-back icon icon--back"></div>
                <div class="h5">Quay lại</div>
            </div>
            <div 
                class="delivery-fail__header-call f aic">
                <div class="h8 blue mr05">Gọi khách</div>
                <div class="icon icon--phone"></div>
            </div>
        </div>

        <div class="delivery-fail__body pt15 pl1 pr1">
            <div class="body__title f fdc jcc aic mb15">
                <div class="body__title-code p6 mb05">
                    Đơn hàng #12345678
                </div>
                <div class="body__title-status h2 red-2-text">
                    không thành công
                </div>
            </div>
            <div class="body__select mb1">
                <select class="w100 h6 pt075 pb075 pl075 pr075">
                    <option value="">Chọn một lý do ...</option>
                    <option value="">Khách không nghe máy</option>
                    <option value="">Khách từ chối nhận hàng</option>
                </select>
            </div>
            <div class="body__media f aic mb1 border-radius bg-gray-5">
                <div class="h5 mr1 pt05 pb05 pl1 pr1 border-radius bg-blue white">Tải ảnh lên</div>
                <div class="f fdc jcb">
                    <div class="h7">Thêm ảnh</div>
                    <div class="h6 gray">Dung lượng tối đa 2MB</div>
                </div>
            </div>
            <div class="body__note mb15">
                <div class="body__note-title p4">
                    Chú thích
                </div>
                <textarea class="h7 pt05 pb05 pl075 pr075" name="" id="" cols="30" rows="10" placeholder="Thêm ghi chú cho đơn hàng của bạn"></textarea>
            </div>
        </div>

        <div class="delivery-fail__btn w100 f jcb aic bg-white-1">
            <div class="w50 h8 pt1 pb1 border align-c border-radius">Huỷ bỏ</div>
            <div @click="handleSubmit" class="w50 h8 pt1 pb1 ml05 align-c border-radius bg-red-1 white">Tôi đã hiểu</div>
        </div>

        <!-- Pop-up Noti -->
        <div class="pop-up f jcc aic">
            <div class="noti f fdc aic border-radius bg-white-1">
                <div class="noti__img successful-noti mb1"></div>
                <div class="noti__header h2 mb05">Thông báo</div>
                <div class="noti__title p6 mb1">Gửi thông tin thành công. Bạn cần gửi <br> hàng về kho</div>
                <div class="noti__btn w100 f jcb aic">
                    <div @click="handlePopUp" class="w50 h8 pt1 pb1 border align-c border-radius">Quay lại</div>
                    <div @click="handleConfirm" class="w50 h8 pt1 pb1 ml05 align-c border-radius bg-red-1 white">Xác nhận</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { HTTP } from '../../http-default'

export default {
    data() {
        return {
            data : [],
            dataOrder: []
        }
    },
    methods: {
        getData() {
            HTTP.get('/v1/api/order/')
            .then((res) => {
                this.data = res.data.results
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].id == this.$route.params.id) {
                        this.dataOrder = this.data[i]
                    }
                }
            })
        },
        handleBack() {
            this.$router.go(-1)
        },
        handlePopUp() {
            var popUp = document.getElementsByClassName('pop-up')[0]
            popUp.classList.toggle('active')
        },
        handleSubmit() {
            var statusOrder = { "status_order" : 5}
            HTTP.put('/v1/api/order/' + this.$route.params.id + '/', statusOrder) 
            .then((res) => {
                this.handlePopUp()
            })
            .catch((error) => {
                alert(error)
            })
        },
        handleConfirm() {
            this.$router.push({ path: "/quan-ly-order/" + this.dataOrder.id })
        }
    },
    created() {
        this.getData()
    }
}
</script>

<style scoped lang="scss">
    @import "DeliveryFail.scss";
</style>    