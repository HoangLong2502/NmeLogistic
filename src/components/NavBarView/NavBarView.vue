@<template>
  <div class="Navbar f jcb aic pt05 pb05 pl1 pr1 bg-white-1">
    <div 
        class="Navbar-item f fdc aic jcc align-c"
        v-for="(item, index) in dataNav" 
        :key="index">
        <router-link to="/">
            <div 
                class="Navbar-item__logo icon mb025"
                v-bind:class="item.icon"></div>
            <div class="p-small red-text">{{ item.titlecontent }}</div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            dataNav : [
                {
                    titlecontent : 'Order',
                    icon: 'icon--order'
                },
                {
                    titlecontent : 'Ví BZI',
                    icon: 'icon--cart'
                },
                {
                    titlecontent : 'Thông báo',
                    icon: 'icon--noti'
                },
                {
                    titlecontent : 'Tài khoản',
                    icon: 'icon--account '
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    @import 'NavBar.scss';
</style>