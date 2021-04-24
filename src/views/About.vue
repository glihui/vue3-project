<template>
  <div>
    about
    <child :msg="msg" @send="send"></child>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import Child from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'About', // 组件名称
  // 接收父组件的数据
  props: {
    s: {
      type: String,
      default: 'ss'
    }
  },
  // 定义子组件
  components: {
    Child
  },
  setup(props, ctx) {
    let msg = ref('我是')
    let route = useRoute();
    console.log('setup')
    
    onMounted(() => {
      console.log('onMounted')
    })
    onUnmounted(() => {

    })
    let send = (val) => {
      console.log(val)
    }
    return {
      msg,
      send
    }
  },
})
</script>
<style scoped lang="scss">

</style>

