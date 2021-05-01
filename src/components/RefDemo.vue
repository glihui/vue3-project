<template>
    <div v-for="item in 10" :ref="setItemRef">
      {{item}}
  </div>
</template>

<script>
import { defineComponent,onMounted} from 'vue'
export default defineComponent({
  setup() { 
    let itemRefs = [];
    const setItemRef = el => {
      if (el) {
        itemRefs.push(el)
      }
    } 
    onMounted(() => {
        console.log('结合组合式 API:',itemRefs);
    })
    return {
        setItemRef
    }
  }
})
</script>

