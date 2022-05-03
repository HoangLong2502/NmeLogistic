<template>
    <div class="register relative f fdc jcb pt2 pb1 pl1 pr1 border-radius bg-white-1">
        <div>
            <svg @click="handleClose" class="absolute cursor" style="top: 2em; right: 1em" viewBox="0 0 18 16" width="18" height="16">
                <use xlink="http://www.w3.org/2000/svg" href="#close" x="0" y="0"></use>
            </svg>
            <div class="align-c mt2 mb2">
                <img src="../../assets/LogoDrMom.png" alt="">
            </div>
            <div class="title h2 w100 mb1">Đăng ký</div>
            <form action="">
                <div class="f fdc mb1">
                    <label class="h7 mb05" for="">Số điện thoại</label>
                    <input class="h6" type="text" placeholder="Nhập số điện thoại vào đây">
                </div>
                <div class="f fdc mb1">
                    <label class="h7 mb05" for="">Mật khẩu</label>
                    <input class="h6" type="password" placeholder="Nhập mật khẩu vào đây">
                </div>
                <div class="f fdc mb4">
                    <label class="h7 mb05" for="">Xác nhận lại mật khẩu</label>
                    <input class="h6" type="password" placeholder="Nhập lại mật khẩu">
                </div>
                <button class="w100 h5 pt075 pb075 align-c border-radius bg-brown white">Đăng ký</button>
            </form>
        </div>
        <div class="mt1 align-c pl05 pr05">
            Bằng việc chọn "Đăng ký", bạn đồng ý với các <a class="blue" href="">Điều khoản và Điều kiện</a>của chúng tôi
        </div>
        <div class="w100 align-c mt15">
            <span class="gray h5">Đã có tài khoản?</span>
            <span @click="handleLogin" class="cursor blue h5">Đăng nhập ngay</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>