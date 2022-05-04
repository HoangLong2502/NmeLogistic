@<template>
    <div class="order-detail relative bg-gray-1">
        <div class="orer-detail__header w100 f jcb aic pt075 pb075 pl1 pr1 bg-white-1"
            @click="handleBack">
            <div class="f aic">
                <div class="orer-detail__header-back icon icon--back"></div>
                <div class="h5">Quay lại</div>
            </div>
            <div 
                class="order-detail__header-call f aic"
                v-if="Order.status_order != 1 || Order.status_order == 2">
                <div class="h8 blue mr05">Gọi khách</div>
                <div class="icon icon--phone"></div>
            </div>
        </div>
        <div class="order-detail__body pt15 pl1 pr1">
            <div class="order-body__title h3">
                Chi tiết đơn hàng
            </div>

            <!-- Order-body__code -->
            <div class="order-body__code border-radius mt15 mb1 pt15 pb1 pr1 pl1 bg-white-1">
                <div class="order-body__code-header h5">
                    Mã đơn hàng
                </div>
                <div class="order-body__code-number f jcb aic border border-radius mt1 mb1">
                    <div class="h6 gray">Mã đơn hàng</div>
                    <div class="f aic">
                        <div class="code-number h8 blue">#123456789</div>
                        <div class="icon icon--copy ml075"
                            @click="handleCopyCode"></div>
                    </div>
                </div>
                <div class="code-number__info">
                    <div class="f jcb mb05">
                        <div class="h6 gray">Kho lấy hàng</div>
                        <div class="h5 align-e">BZI Supply</div>
                    </div>
                    <div class="f jcb">
                        <div class="h6 gray">Địa chỉ kho</div>
                        <div class="h5 align-e w60"> {{ Order.warehouse_address }} </div>
                    </div>
                </div>
            </div>

            <!-- Order-body__status -->
            <div class="Order-body__status-container">

                <!-- Chờ nhận -->
                <div 
                    v-if="Order.status_order == 1"
                    class="order-body__status f aic jcb mb1 border-radius bg-red-2">
                    <div class="red-2-text h7">Chờ nhận</div>
                    <div class="icon icon--back"></div>
                </div>

                <!-- Đang thực hiện (Đang lấy hàng) -->
                <div 
                    v-if="Order.status_order == 2"
                    class="order-body__status f aic jcb mb1 border-radius bg-yellow">
                    <div class="orange h7">Đang thực hiện (Đang lấy hàng)</div>
                    <div class="icon icon--back"></div>
                </div>

                <!-- Đang thực hiện (Đã lấy hàng) -->
                <div 
                    v-if="Order.status_order == 4"
                    class="order-body__status f aic jcb mb1 border-radius bg-yellow">
                    <div class="orange h7">Đang thực hiện (Đã lấy hàng)</div>
                    <div class="icon icon--back"></div>
                </div>

                <!-- Đã huỷ (Đang trả hàng về kho) -->
                <div 
                    v-if="Order.status_order == 5"
                    class="order-body__status f aic jcb mb1 border-radius bg-red-faild">
                    <div class="red-1 h7">Đã huỷ (Đang trả hàng về kho)</div>
                    <div class="icon icon--back"></div>
                </div>
            </div>
            <!-- Order-body__info-buyer -->
            <div class="order-body__info-buyer border-radius mb1 bg-white-1">
                <!-- <div 
                    v-for="(item, key) in Order" 
                    :key="key">
                    <div class="info-buyer__item"
                        v-if="key == 'full_name'">

                    </div>
                </div> -->
                <div class="info-buyer__title h5 mb1">
                    Thông tin người mua
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Tên người mua</div>
                    <div class="info-buyer__item-right h7 align-e">Nguyễn Thị Bill</div>
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Số điện thoại</div>
                    <div class="info-buyer__item-right h7 align-e">0123 456 789</div>
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Email</div>
                    <div class="info-buyer__item-right h7 align-e">nguyenthibill@gmail.com</div>
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Địa chỉ</div>
                    <div class="info-buyer__item-right h7 align-e">Ngõ xx đường yy, phố zz, Hà Nội</div>
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Ghi chú</div>
                    <div class="info-buyer__item-right h7 align-e">Giao hàng giờ hành chính</div>
                </div>
            </div>

            <!-- Order-body__package-information -->
            <div class="order-body__package-information border-radius mb1 bg-white-1">
                <div class="info-buyer__title h5 mb1">
                    Thông tin kiện hàng
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Cân nặng</div>
                    <div class="info-buyer__item-right h7 align-e">1500g</div>
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Kích thước</div>
                    <div class="info-buyer__item-right h7 align-e">15x25x7</div>
                </div>
                <div class="info-buyer__item w100 f jcb aic mb05">
                    <div class="info-buyer__item-left h6 gray">Ghi chú</div>
                    <div class="info-buyer__item-right h7 align-e">Hàng dễ vỡ</div>
                </div>
            </div>

            <!-- Order-body__info-billing -->
            <div class="order-body__info-billing mb1 border-radius bg-white-1">
                <div class="h5 mb1">
                    Thông tin thanh toán
                </div>
                <div class="info-billing__list-product">
                    <div class="propduct__item pb1 mb1 border-bottom">
                        <div class="propduct__item-header f aic mb1">
                            <img src="../../assets/imgUser.png" alt="">
                            <div class="f fdc jcb ml075">
                                <div class="h7">Áo thun Hàn Quốc</div>
                                <div class="h6 gray">SKU987654321</div>
                            </div>
                        </div>
                        <div class="propduct__item-info">
                            <div class="info-buyer__item w100 f jcb aic mt05">
                                <div class="info-buyer__item-left h6 gray">Số lượng</div>
                                <div class="info-buyer__item-right h7 align-e">2</div>
                            </div>
                            <div class="info-buyer__item w100 f jcb aic mt05">
                                <div class="info-buyer__item-left h6 gray">Đơn giá</div>
                                <div class="info-buyer__item-right h7 align-e">95.000VNĐ</div>
                            </div>
                            <div class="info-buyer__item w100 f jcb aic mt05">
                                <div class="info-buyer__item-left h6 gray">Thành tiền</div>
                                <div class="info-buyer__item-right h7 align-e">190.000VNĐ</div>
                            </div>
                        </div>
                    </div>
                    <div class="propduct__item pb1 mb1 border-bottom">
                        <div class="propduct__item-header f aic mb1">
                            <img src="../../assets/imgUser.png" alt="">
                            <div class="f fdc jcb ml075">
                                <div class="h7">Áo thun Hàn Quốc</div>
                                <div class="h6 gray">SKU987654321</div>
                            </div>
                        </div>
                        <div class="propduct__item-info">
                            <div class="info-buyer__item w100 f jcb aic mt05">
                                <div class="info-buyer__item-left h6 gray">Số lượng</div>
                                <div class="info-buyer__item-right h7 align-e">2</div>
                            </div>
                            <div class="info-buyer__item w100 f jcb aic mt05">
                                <div class="info-buyer__item-left h6 gray">Đơn giá</div>
                                <div class="info-buyer__item-right h7 align-e">95.000VNĐ</div>
                            </div>
                            <div class="info-buyer__item w100 f jcb aic mt05">
                                <div class="info-buyer__item-left h6 gray">Thành tiền</div>
                                <div class="info-buyer__item-right h7 align-e">190.000VNĐ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-billing__total">
                    <div class="info-buyer__item w100 f jcb aic mt05">
                        <div class="info-buyer__item-left h6 gray">Tổng tiền</div>
                        <div class="info-buyer__item-right h7 align-e">95.000VNĐ</div>
                    </div>
                    <div class="info-buyer__item w100 f jcb aic mt05">
                        <div class="info-buyer__item-left h6 gray">Phí vận chuyển</div>
                        <div class="info-buyer__item-right h7 align-e">190.000VNĐ</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Order-detail__action -->
        <div>
            
            <!-- Chờ nhận -->
            <div 
                class="order-detail__action"
                v-if="Order.status_order == 1">
                <div class="order-detail__action-total f aic jcb pt1 pb1 pr1 pl1 bg-gray-1">
                    <div class="w50 border-right">
                        <div class="h6 gray">Tiền cần thu</div>
                        <div class="h6"> {{ Order.deposit_amount }} </div>
                    </div>
                    <div class="w50 align-e">
                        <div class="h6 gray">Lợi nhuận</div>
                        <div class="total-profit h7"> {{ Order.shipper_profit}} </div>
                    </div>
                </div>
                <div class="order-detail__action-btn pt1 pb1 pl1 pr1 bg-white-1">
                    <div class="btn btn-action w100 h5 pt1 pb1 border-radius align-c bg-red-1 white"
                        @click="handleGetOrder">
                        Nhận đơn
                    </div>
                    <div class="mt05 h6 align-c gray">
                        Bằng việc chọn “Nhận đơn”, bạn đồng ý với các <br> <span class="h7 blue">Điều khoản và Điều kiện</span> của chúng tôi
                    </div>
                </div>
            </div>

            <!-- Đang thực hiện (Đang lấy hàng) -->
            <div 
                class="order-detail__action bg-gray-1"
                v-if="Order.status_order == 2">
                <div class="order-detail__action-total f aic jcb mb1 pt1 pb1 pr1 pl1 bg-gray-2">
                    <div class="w50 border-right">
                        <div class="h6 gray">Tiền cần thu</div>
                        <div class="h6"> {{ Order.deposit_amount }} </div>
                    </div>
                    <div class="w50 align-c border-right">
                        <div class="h6 gray">Lợi nhuận</div>
                        <div class="total-profit h7"> {{ Order.shipper_profit}} </div>
                    </div>
                    <div class="w50 align-e">
                        <div class="h6 gray">Lợi nhuận</div>
                        <div class="total-profit h7"> {{ Order.shipper_profit}} </div>
                    </div>
                </div>
                <div class="pl1 pr1">
                    <div class="btn-help w100 h5 pt1 pb1 border-radius border align-c bg-white-1">
                        Hỗ trợ
                    </div>
                </div>
                <div class="order-detail__action-btn f aic jcb pt1 pb1 pl1 pr1 bg-gray-1">
                    <div class="btn-cancel w100 h5 pt1 pb1 border-radius border align-c bg-white-1">
                        Huỷ nhận đơn
                    </div>
                    <div class="btn-action w100 h5 ml1 pt1 pb1 border-radius align-c bg-red-1 white"
                        @click="handlePickUpOrder">
                        Đã lấy hàng
                    </div>
                </div>
            </div>

            <!-- Đang thực hiện (Đã lấy hàng)-->
            <div 
                class="order-detail__action bg-gray-1"
                v-if="Order.status_order == 4">
                <div class="order-detail__action-total f aic jcb mb1 pt1 pb1 pr1 pl1 bg-gray-2">
                    <div class="w50 border-right">
                        <div class="h6 gray">Tiền cần thu</div>
                        <div class="h6"> {{ Order.deposit_amount }} </div>
                    </div>
                    <div class="w50 align-c border-right">
                        <div class="h6 gray">Tiền cần thu</div>
                        <div class="h6"> {{ Order.shipper_profit}} </div>
                    </div>
                    <div class="w50 align-e">
                        <div class="h6 gray">Lợi nhuận</div>
                        <div class="total-profit h7"> {{ Order.shipper_profit}} </div>
                    </div>
                </div>
                <div class="pl1 pr1">
                    <div class="btn-help w100 h5 pt1 pb1 border-radius border align-c bg-white-1">
                        Hỗ trợ
                    </div>
                </div>
                <div class="order-detail__action-btn f aic jcb pt1 pb1 pl1 pr1 bg-gray-1">
                    <div 
                        class="btn-cancel w100 h5 pt1 pb1 border-radius border align-c bg-white-1">
                         <router-link :to="{ name: 'delivery-fail', params : { id : Order.id }}">
                            Giao thất bại
                         </router-link>
                    </div>
                    <div class="btn-action w100 h5 ml1 pt1 pb1 border-radius align-c bg-red-1 white"
                        >
                        Giao thành công
                    </div>
                </div>
            </div>

            <!-- Đã huỷ (Đang trả hàng về kho) -->
            <div 
                class="order-detail__action bg-gray-1"
                v-if="Order.status_order == 5">
                <div class="order-detail__action-total f aic jcb pt1 pb1 pr1 pl1 bg-gray-2">
                    <div class="w50 border-right">
                        <div class="h6 gray">Tiền cần thu</div>
                        <div class="h6"> {{ Order.deposit_amount }} </div>
                    </div>
                    <div class="w50 align-c border-right">
                        <div class="h6 gray">Tiền cần thu</div>
                        <div class="h6"> {{ Order.shipper_profit}} </div>
                    </div>
                    <div class="w50 align-e">
                        <div class="h6 gray">Lợi nhuận</div>
                        <div class="total-profit h7"> {{ Order.shipper_profit}} </div>
                    </div>
                </div>
                <div class="order-detail__action-btn f aic jcb pt1 pb1 pl1 pr1 bg-gray-1">
                    <div 
                        class="btn-cancel w100 h5 pt1 pb1 border-radius border align-c bg-white-1">
                         <router-link :to="{ name: 'delivery-fail', params : { id : Order.id }}">
                            Hỗ trợ
                         </router-link>
                    </div>
                    <div class="btn-action w100 h5 ml1 pt1 pb1 border-radius align-c bg-red-1 white">
                        Đã trả về kho
                    </div>
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
            ListOrder : [],
            Order : []
        }
    },
    methods: {
        handleCopyCode() {
            var copyText = document.getElementsByClassName('code-number')[0].innerText
            console.log(copyText)
            var TempText = document.createElement("input");
            TempText.value = copyText;
            document.body.appendChild(TempText);
            TempText.select();
            document.execCommand("copy");
            document.body.removeChild(TempText);
            alert("Copied the text: " + TempText.value);
        },
        getData() {
            HTTP.get('/v1/api/order/')
            .then((res) => {
                this.ListOrder = res.data.results
                for (let i = 0; i < this.ListOrder.length; i++) {
                    if (this.ListOrder[i].id == this.$route.params.id) {
                        this.Order = this.ListOrder[i]
                    }
                this.ListOrder[i].deposit_amount = this.ListOrder[i].deposit_amount.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                this.ListOrder[i].shipper_profit = this.ListOrder[i].shipper_profit.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                }
            })
        },
        handleBack() {
            this.$router.go(-1)
        },
        handleGetOrder() {
            var statusOrder = { "status_order" : 2}
            HTTP.put('/v1/api/order/' + this.$route.params.id + '/', statusOrder) 
            .then((res) => {
                location.reload()
            })
            .catch((error) => {
                alert(error)
            })
        },
        handlePickUpOrder() {
            var statusOrder = { "status_order" : 4}
            HTTP.put('/v1/api/order/' + this.$route.params.id + '/', statusOrder) 
            .then((res) => {
                this.$router.push({ path: "/quan-ly-order/" + this.Order.id + "/successful-pick-up" })

            })
            .catch((error) => {
                alert(error)
            })
        },
    },
    created() {
        this.getData()
    }
}
</script>

<style scoped lang="scss">
    @import "OrderDetail.scss";
</style>