<template>
  <div id="app">
    <div class='filler'>
    </div>

    <h1 id='header'>
      Ideabox (with Vue.js!)
    </h1>

    <div class='filler'>
    </div>

    <new-idea
      :sendInputs='handleSubmit'
      :clearInputs='handleInputs'
      :passClear='handleClear'
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
       this.ideas = response.body.ideas
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
         this.ideas = response.body.ideas
       })
    },

    handleSubmit(newIdea) {
      let endpoint = `${this.apiRootUrl}/ideas.json`
      let ideaData = { 'idea': { 'title': newIdea.title, 'body': newIdea.body } }
      if (ideaData.idea.title && ideaData.idea.body) {
        api
         .createIdea
         .call(this, endpoint, ideaData)
         .then(response => {
           this.reloadIdeas()
         })
      }
      else {
        alert("Idea can't be blank")
      }
    },

    handleInputs(newIdea) {
      newIdea.title = ''
      newIdea.body = ''
    },

    handleUpdate(id) {
      let ideaData = event.target.textContent.trim()
      if (ideaData) {
        let params = { 'idea': {} }
        if (event.target.className === 'idea-title') params.idea.title = ideaData
        if (event.target.className === 'idea-body') params.idea.body = ideaData
        this.finishUpdate(id, params)
      }
      else {
        alert("field can't be blank!")
      }
    },

    finishUpdate(id, params) {
      let endpoint = `${this.apiRootUrl}/ideas/${id}.json`
      api
       .updateIdea
       .call(this, endpoint, params)
       .then(response => {
         this.reloadIdeas()
       })
    },

    handleClear() {
      let endpoint = `${this.apiRootUrl}/ideas/clear.json`
      if (confirm('Are you sure?')) {
        api
         .clearAllIdeas
         .call(this, endpoint)
         .then(response => {
           this.reloadIdeas()
         })
      }
    }
  }
}
</script>

<style>
.background {
  background-image: url('../forest-opacity.jpg');
  background-position: center;
  background-attachment: fixed;
}
#header {
  font-family: Pacifico;
  text-align: center;
  font-size: 64px;
}

body h4 {
  text-align: center;
}

.input-filler {
  height: 65px;
}

#new-idea {
  background-color: #def0fc;
  margin-bottom: 25px;
  border: 1px solid rgba(10, 10, 10, 0.25);
  border-radius: 12px;
}

#new-idea input {
  font-family: 'Oxygen', sans-serif;
}

.filler {
  height: 50px;
}

.idea-info p, .idea-info h5 {
  text-align: center;
  font-family: 'Oxygen', sans-serif;
}

.btn-container, .btn-container button {
  font-family: 'Oxygen', sans-serif;
}

.new-idea-btn button {
  width: 100%;
}
</style>
