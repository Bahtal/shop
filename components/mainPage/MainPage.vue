<template>
  <div class="main-page-block">
    <div class="container">
      <Header />
      <Descr />
    </div>
  </div>
</template>

<script>
import Header from '~/components/mainPage/Header.vue'
import Descr  from "~/components/mainPage/Descr.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    Descr,
    Header,
  }
})


</script>