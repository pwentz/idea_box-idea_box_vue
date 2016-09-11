<template>
  <div id="app">
    <new-idea
      :sendInputs='handleSubmit'
    >
    </new-idea>
    <ideas
      :ideas='ideas'
      :handleDelete='removeIdea'
      :sendUpdate='handleUpdate'
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
    },

    handleUpdate(id) {
      let ideaData = event.target.textContent.trim()
      let request = { 'idea': {} }
      if (event.target.className === 'idea-title') request.idea.title = ideaData
      if (event.target.className === 'idea-body') request.idea.body = ideaData
      this.finishUpdate(id, request)
    },

    finishUpdate(id, ideaData) {
      let endpoint = `${this.apiRootUrl}/ideas/${id}.json`
      api
       .updateIdea
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
