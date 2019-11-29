<template>
  <div id="exercise">
    <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button 
        class="btn btn-primary"
        @click="toggle = !toggle">
        Toggle
      </button>
      <p v-if="toggle">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="toggle">You either see me ...</p>
      <p v-show="!toggle">...or me</p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <ul class="list-group">
      <li class="list-group-item" v-for="(e, i) in array" :key="e">{{e}} - {{i}}</li>
    </ul>
    <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
    <ul class="list-group">
      <li class="list-group-item" v-for="(obj, key, i) in myObject" :key="key">
        {{obj}} - {{key}} - {{i}}
      </li>
    </ul>
    <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="data in testData" :key="data">
        <template v-if="Array.isArray(data)">
          <ul v-for="d in data" :key="d">
            <li>{{d}}</li>
          </ul>
        </template>
        <template v-else>
          {{data}}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData: {
        name: 'TESTOBJECT',
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21]
      },
      toggle: false
    }
  }
}
</script>
