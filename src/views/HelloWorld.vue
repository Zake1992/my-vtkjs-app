<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <button @click="show('Spline')">Spline</button>
            <button @click="show('ConeSource')">ConeSource</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    methods: {
        show(index) {
            if (index == 'Spline') {
                this.$router.push('/Spline')
            }
            if (index == 'ConeSource') {
                this.$router.push('/ConeSource')
            }
        }
    }
}
</script>
  