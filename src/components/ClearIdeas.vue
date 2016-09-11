<template>
  <div class='row'>
    <div class='small-3 \
                small-centered \
                columns \
                new-idea-btn \
                btn-container'
    >
      <button class='button \
                     alert'
              v-on:click='sendClear'
      >
        <i class='fi-skull'></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sendClear']
}
</script>

