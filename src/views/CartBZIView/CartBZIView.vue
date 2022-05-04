@<template>
    <div class="cart bg-gray-1">
        <div class="cart__header w100 f jcb aic pt075 pb075 pl1 pr1 bg-white-1"
            @click="handleBack">
            <div class="f aic">
                <div class="cart__header-back icon icon--back"></div>
                <div class="h5">Quay lại</div>
            </div>
        </div>
        <div class="cart__body pt2 pr1 pl1">
            <div class="cart__body-title f aic jcb mb15">
                <div class="h3">Ví BZI</div>
                <div class="cart__body-btn f aic border-radius bg-red-1">
                    <div class="icon icon--cart"></div>
                    <div class="h8 ml05 white">Nạp tiền</div>
                </div>
            </div>
            <div class="cart__body-search relative w100">
                <div class="icon-search">
                    <div class="icon icon--search"></div>
                </div>
                <input 
                    class="body__search-input w100 pt075 pb075 pr075" 
                    type="text" 
                    placeholder="Tìm kiếm">
            </div>
            <div class="cart__body-filter">
                
            </div>
        </div>
        <NavBarView></NavBarView>
    </div>
</template>

<script>
import NavBarView from '@/components/NavBarView/NavBarView.vue'

export default {
    components: {
        NavBarView
    },
    methods: {
        handleBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
    @import "CartBZI.scss";
</style>