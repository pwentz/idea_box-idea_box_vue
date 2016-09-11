<template>
  <div>
    <h3>{{ idea.title }}</h3>
    <p>{{ idea.body }}</p>
    <p>{{ idea.id }}</p>
    <button
      type='submit'
      v-on:click='fireDelete(idea.id)'
    >
      Delete Idea
    </button>
  </div>
</template>

<script>
export default {
  props: ['idea', 'fireDelete'],
}
</script>
