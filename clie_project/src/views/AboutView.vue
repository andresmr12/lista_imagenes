<template>
<div>
  <Nav />
</div>

</template>

<script>
import { defineComponent } from 'vue';

// Components

import Nav from '@/components/Nav.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    
    Nav,
    
    
    
  }
})
</script>
