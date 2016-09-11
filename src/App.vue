<template>
  <div id="app">
    <new-idea
      :sendInputs='handleSubmit'
    >
    </new-idea>
    <ideas
      :ideas='ideas'
      :handleDelete='removeIdea'
    >
    </ideas>
  </div>
</template>

<script>
import Ideas from './components/Ideas.vue'
import NewIdea from './components/NewIdea.vue'
import ajaxCalls from './ajax.js'

const api = new ajaxCalls()

export default {
  components: {
    Ideas,
    NewIdea
  },
  data() {
    return {
      ideas: [],
      apiRootUrl: 'http://localhost:3000/api/v1'
    }
  },
  mounted() {
    api
     .fetchIdeas
     .call(this, this.apiRootUrl)
     .then(response => {
       this.ideas = response.ideas
     })
  },
  methods: {
    removeIdea(id) {
      let endpoint = `${this.apiRootUrl}/ideas/${id}.json`
      api
       .destroyIdea
       .call(this, endpoint)
       .then(response => {
         this.reloadIdeas()
       })
    },

    reloadIdeas() {
      api
       .fetchIdeas
       .call(this, this.apiRootUrl)
       .then(response => {
         this.ideas = response.ideas
       })
    },

    handleSubmit(title, body) {
      let endpoint = `${this.apiRootUrl}/ideas.json`
      let ideaData = { 'idea': { 'title': title, 'body': body } }
      api
       .createIdea
       .call(this, endpoint, ideaData)
       .then(response => {
         this.reloadIdeas()
       })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
