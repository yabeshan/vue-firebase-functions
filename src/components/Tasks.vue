<template>
  <div class="tasks">
    <h3>Tasks</h3>
    <span>Title:</span><input :value="task.title"/><br/>
    <span>Time:</span><input :value="task.time"/><br/>
    <button @click="add()">Add task</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      task: {
        title: 'New task',
        time: 100
      }
    }
  },
  methods: {
    add () {
      this.$store.commit('addTask', {
        title: this.task.title,
        time: this.task.time
      })

      const key = Math.floor(20 + Math.random() * 100)
      this.task.title = 'New task ' + key
      this.task.time = key
    }
  }
}
</script>
