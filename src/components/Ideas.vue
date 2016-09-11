<template>
  <div>
    <div v-for='idea in ideas'>
      <idea
        :idea='idea'
        :fireDelete='handleDelete'
        :fireUpdate='sendUpdate'
      >
      </idea>
    </div>
  </div>
</template>

<script>
import Idea from './Idea.vue'

export default {
  components: {
    Idea
  },
  props: ['ideas', 'handleDelete', 'sendUpdate']
}
</script>
