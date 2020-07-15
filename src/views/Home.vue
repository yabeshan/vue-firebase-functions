<template>
  <div class="page">
    <Workers />
    <Tasks />
    <Processing />
    <WaitingList />
  </div>
</template>

<script>
import { Workers, Tasks, Processing, WaitingList } from '../components'
export default {
  components: {
    Workers,
    Tasks,
    Processing,
    WaitingList
  }
}
</script>
