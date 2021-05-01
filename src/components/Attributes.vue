<template>
    <div style="width: 500px">
  非枚举非布尔属性:true:<input type="text" :foo="true" />
  非枚举非布尔属性:false:<input type="text" :foo="false" />
  非枚举非布尔属性:undefined:<input type="text" :foo="undefined" />
  非枚举非布尔属性:null:<input type="text" :foo="null" />
  非枚举非布尔属性:0:<input type="text" :foo="0" />

  <hr />
  枚举属性:true:<input type="text" :spellcheck="true" />
  枚举属性:false:<input type="text" :spellcheck="false" />
  枚举属性:undefined:<input type="text" :spellcheck="undefined" />
  枚举属性:null:<input type="text" :spellcheck="null" />
  枚举属性:0:<input type="text" :spellcheck="0" />

  <hr />
  布尔属性required:true:<input type="text" :required="true" />
  布尔属性required:false:<input type="text" :required="false" />
  布尔属性required:undefined:<input type="text" :required="undefined" />
  布尔属性required:null:<input type="text" :required="null" />
  布尔属性required:0:<input type="text" :required="0" />
</div>
</template>

<script>
import { defineComponent,onMounted} from 'vue'
export default defineComponent({
  setup() { 
    
    onMounted(() => {
    })
    return {
    }
  }
})
</script>

