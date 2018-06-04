<template>
  <div>
    <div v-for="(inputValue, index) in values">
      <input type="text" v-model="values[index]">
      <!--input type="text" v-bind:value="value" v-bind:name="name + '[]'"-->
      <a href='javascript:void(0);' @click="add">Add</a>
      <a href='javascript:void(0);' @click="remove(index)">Remove</a>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "dyn-inputs-list",
  props: {
    csv: Array,
    name: String,
  },
  data: function() {
    return {
      values: this.csv || [''],
    }
  },
  methods: {
    add: function () {
      this.values.push( '' )
    },
    remove: function (index) {
      this.values.splice(index, 1)
    }
  }
}
</script>

<style scoped>
</style>
