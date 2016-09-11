<template>
  <div>
    <h3
      contentEditable='true'
      v-on:blur='fireUpdate(idea.id)'
      class='idea-title'
    >
      {{ idea.title }}
    </h3>
    <p
      contentEditable='true'
      v-on:blur='fireUpdate(idea.id)'
      class='idea-body'
    >
      {{ idea.body }}
    </p>
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
  props: ['idea', 'fireDelete', 'fireUpdate']
}
</script>
