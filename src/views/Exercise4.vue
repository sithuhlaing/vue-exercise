<template>
  <div id="exercise">
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <div>
      <button @click="startEffect">Start Effect</button>
      <div id="effect" :class="effectClass"></div>
    </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div :class="['float', 'blue', 'text-color']">I got no class :(</div>
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
      <input type="text" v-model="userClass" />
      <div :class="[{visible: true}, userClass]"></div>
    </div>
    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div>
      <input type="text" v-model="userClass"/>
      <input type="text" v-model="isVisible" />
      <div :class="[userClass, {visible: isVisible}]"></div>
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div>
      <input type="text" v-model="myStyle.backgroundColor" />
      <div :style="myStyle"></div>
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
      <button v-on:click="startProgress">Start Progress</button>
      <div :class="['progress-bar']" :style="progressBar"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      effectClass: {
        highlight: false,
        shrink: true
      },
      userClass: '',
      isVisible: false,
      myStyle: {
        width: '100px',
        height: '150px',
        backgroundColor: 'gray'
      },
      progressBar: {
        width: '0px',
        backgroundColor: 'red'
      }
    }
  },
  methods: {
    startEffect () {
      setInterval(() => {
        this.effectClass.highlight = !this.effectClass.highlight
        this.effectClass.shrink = !this.effectClass.shrink
      }, 3000)
    },
    startProgress () {
      let width = 0
      const intv = setInterval(() => {
        if (width === 200) {
          clearInterval(intv)
        }
        width += 10
        this.progressBar.width = width + 'px'
      }, 100)
    }
  }
}
</script>

<style scoped>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}

.blue {
  background: blue;
}

.text-color {
  color: yellow;
}

.float {
  float: right;
}

.visible {
  width: 100px;
  height: 50px;
}

.progress-bar {
  width: 200px;
  height: 20px;
  border: 1px solid black;
}

</style>
