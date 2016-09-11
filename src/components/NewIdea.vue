<template>
  <div class='row'>
    <div
      class='small-6 \
             small-centered \
             columns'
      id='new-idea'
    >
      <div class='input-filler'>
      </div>
      <div class='row'>
        <div class='small-8 \
                    small-centered
                    columns'
        >

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

          <div class='row'>
            <div class='small-4 \
                        small-centered \
                        columns \
                        btn-container'
            >

              <button
                v-on:click='sendInputs(title, body)'
                class='button \
                       success \
                       hollow'
              >
                <i class='fi-lightbulb'></i>
                save!
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
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
