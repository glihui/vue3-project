<template>
  <div>
    <div @click="clickEvent">ss{{name}}--{{age}}</div>
    <div>{{title}}</div>
    <div>{{titlStr}}</div>
    <div @click="goto">{{storeData}}</div>

    <FuntionalCom level='1'>jkkks</FuntionalCom>

    <plastic-button>自定义元素</plastic-button>

    <!-- <Attributes></Attributes> -->

    <AsyncComponent></AsyncComponent>

    <RefDemo></RefDemo>

    --------
    <RefDemo2></RefDemo2>

    
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent, ref, reactive, toRefs, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import RefDemo from '@/components/RefDemo';
import RefDemo2 from '@/components/RefDemo2';
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';
import Attributes from '@/components/Attributes';

import FuntionalCom from '@/components/FuntionalCom'
// import AsyncComponent from '@/components/AsyncComponent';
// const  AsyncComponent = defineAsyncComponent(() => import('@/components/AsyncComponent'))
const AsyncComponent = defineAsyncComponent({
  loader: () => import('@/components/AsyncComponent'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})

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
    RefDemo,
    RefDemo2,
    AsyncComponent,
    ErrorComponent,
    LoadingComponent,
    Attributes,
    FuntionalCom
  },
  setup(props, ctx) {
    // console.log(props.s);
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
    onMounted(() => {
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

