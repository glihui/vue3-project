<template>
  <div>
    <div @click="clickEvent">ss{{name}}--{{age}}</div>
    <div>{{title}}</div>
    <div>{{titlStr}}</div>
    <div @click="goto">{{storeData}}</div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home', // 组件名称
  // 接收父组件的数据
  props: {
    s: {
      type: String,
      default: 'ss'
    }
  },
  // 定义子组件
  components: {

  },
  setup(props, ctx) {
    console.log(props.s);
    let router = useRouter();
    let store = useStore();
    let title = ref('哈哈')
    let title2 = ref('哦哦')
    let data = reactive({
      name: 'xiaoMIng',
      age: 18
    })
    let clickEvent = () => {
      // console.log('点击事件')
      console.log(title.value)
      console.log(data.name)
    }
    let goto = () => {
      router.push({
        path:'/about',
        query: {
          a: 'ass'
        }
      });
    }
    let titlStr = computed(() => {
      return title.value + title2.value
    })
    let storeData = computed(() => {
      return store.state.list;
    })
    return {
      ...toRefs(data),
      title,
      title2,
      titlStr,
      clickEvent,
      storeData,
      goto
    }
  },
})
</script>
<style scoped lang="scss">

</style>

