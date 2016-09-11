<template>
  <div>
    <input
      type='text'
      v-model='title'
      placeholder='Title...'
    >
    </input>
    <input
      type='text'
      v-model='body'
      placeholder='Details...'
    >
    </input>
    <button
      v-on:click='sendInputs(title, body)'
    >
      Save Idea
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  props: ['sendInputs']
}
</script>
