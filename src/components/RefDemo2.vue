<template>
  <div>
    <div v-for="item in 10" :key="item" ref="setItemRef">
      {{item}}
    </div>
  </div>
</template>
<script>
 export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el)
      }
    }
  },
  mounted() {
    console.log('结合选项式',this.itemRefs)
    console.log('ppp',this.$refs.setItemRef)
  }
}
</script>

