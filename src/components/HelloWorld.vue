<template>
  <div @click="send">
    child
    {{msg}}
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Child', // 组件名称
  // 接收父组件的数据
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  // 定义子组件
  components: {

  },
  setup(props, ctx) {
    console.log(props.msg)
    let route = useRoute();
    console.log('setup')
    let send = () => {
      ctx.emit('send','哈哈')
    }
    onMounted(() => {
      console.log('onMounted')
    })
    onUnmounted(() => {
      
    })
    return {
      send
    }
  },
})
</script>
<style scoped lang="scss">

</style>

