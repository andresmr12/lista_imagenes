<template>
    <div>
      <v-btn v-for=" ruta, i in rutas" :key="i" color="success" @click="InsertarRuta(ruta.rutas)" class="my-3" block>
        <span>{{ ruta.name }}</span>
    </v-btn>
     
    </div>
</template> 

<script>
 export default{
    name: 'BotNav',
    data:  ()=>({
        rutas:[
            {name: 'home',rutas:'/home'},
            {name: 'about',rutas:'/about'},
            {name: 'help', rutas:'/help'} ,
            {name: 'ConsulServe', rutas:'/Consul'} ,
            
        ]
     
    }),
    methods: {
        InsertarRuta(ruta){
            this.$router.push(ruta)
        }
    },
 }
</script>