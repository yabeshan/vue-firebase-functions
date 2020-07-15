<template>
  <div class="waitingList">
    <h3>WaitingList ( {{this.$store.state.tasks.length}} )</h3>
    <div>
      <div
        v-for="(item, key) in this.$store.state.tasks"
        :key="key"
      >
        {{key+1}} {{item}}
        <!-- <Card :key="key" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  component: {
    Card
  }
}
</script>
