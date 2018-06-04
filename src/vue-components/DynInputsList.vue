<template>
  <div>
    <div class="form-row" v-bind:id="id" v-for="(inputValue, index) in values">
      <div class="col-10">
        <input v-bind:name="name + []" class="form-control" type="text" v-model="values[index]">
      </div>
      <div class="col-2">
        <a href='javascript:void(0);' @click="add">Add</a>
        <a href='javascript:void(0);' @click="remove(index)">Remove</a>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "dyn-inputs-list",
  props: {
    csv: Array,
    name: String,
    id: String,
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
#input-row {
  display: inline
}
</style>
