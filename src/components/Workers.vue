<template>
  <div class="workers">
    <h3>Workers</h3>
    Total {{total}}
    <button @click="change(false)">Remove</button>
    <button @click="change(true)">Add</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      total: 10
    }
  },
  methods: {
    change (flag) {
      if (flag) {
        this.total = this.total + 1
      } else {
        this.total = (this.total === 1) ? 1 : this.total - 1
      }
    }
  }
}
</script>
