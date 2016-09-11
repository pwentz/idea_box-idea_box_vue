<template>
  <div
    class='small-6 \
           small-centered \
           columns \
           idea-container'
  >
    <div
      class='callout \
             primary \
             idea-info'
    >

      <h4
        contentEditable='true'
        v-on:blur='fireUpdate(idea.id)'
        class='idea-title'
      >
        {{ idea.title }}
      </h4>

      <p
        contentEditable='true'
        v-on:blur='fireUpdate(idea.id)'
        class='idea-body'
      >
        {{ idea.body }}
      </p>

      <div class='row'>
        <div class='small-2 \
                    small-offset-10 \
                    columns \
                    btn-container'
        >

          <button
            class='button \
                   alert \
                   hollow'
            type='submit'
            v-on:click='fireDelete(idea.id)'
          >
            <i class='fi-x'></i>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['idea', 'fireDelete', 'fireUpdate']
}
</script>
