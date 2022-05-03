<template>
  <div class="Cus-container h100vh w100 bg-gray-2">
    <HeaderView></HeaderView>
    <div class="f">
      <SidebarView :sidebar="sidebar"></SidebarView>
      <router-view :data="data"/>
    </div>
    <AddFolderView></AddFolderView>
    <Login></Login>
    <AddMedicalView></AddMedicalView>

    <div class="hide">
      
    </div>
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView/HeaderView.vue'
import SidebarView from '@/components/SideBarView/SidebarView.vue'
import Login from '@/components/LoginView/LoginView.vue'
import AddFolderView from '@/components/ProductView/AddFolderPopup/AddFolderPopup.vue'
import AddMedicalView from "@/components/CustomerView/DetailCustomer/AddMedicalPopup/AddMedicalView.vue"
import { HTTP } from "../http-default"

export default {
  components: {

    HeaderView,
    SidebarView,
    Login,
    AddMedicalView,
    AddFolderView,

  },
  data() {
    return {
      data : [],
      sidebar : []
    }
  },
  methods: {
    getData() {
      HTTP.get('v1/api/systemsetting/')
      .then((res) => {
        const setting = res.data.results[0].router.toLowerCase()
        const results = setting.replaceAll("'", '"')
        this.data = JSON.parse(results)
        for (let i = 0; i < this.data.length; i++) {
          if(this.data[i]['levelmenu'] == 1) {
            this.sidebar.push(this.data[i])
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

<style>
.card {
  box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16);
}

.active {
  display: flex;
}

.popup-flow {
  overflow-y: hidden !important;

}
</style>