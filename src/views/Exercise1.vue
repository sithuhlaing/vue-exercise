<template>
  <div class="home">
    <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{ name }} ({{ age }})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>{{ ageMul3 }}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>{{ random() }}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
      <img style="width:100px;height:100px" :src="src" />
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
      <input type="text" placeholder="your name" v-model="name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ex1',
  data () {
    return {
      name: 'Si Thu Hlaing',
      age: 33,
      src: 'https://avatars1.githubusercontent.com/u/885830?s=460&v=4'
    }
  },
  computed: {
    ageMul3 () {
      return this.age * 3
    }
  },
  methods: {
    random () {
      return Math.round(Math.random() * 10)
    }
  }
}
</script>
