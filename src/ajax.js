class ajaxCalls {
  fetchIdeas(endpoint) {
    return this.$http.get(`${endpoint}/ideas.json`).then((response) => {
      return response.body
    }, (response) => {
      return false
    })
  }

  destroyIdea(endpoint) {
    return this.$http.delete(endpoint)
  }

  createIdea(endpoint, data) {
    return this.$http.post(endpoint, data)
  }

  updateIdea(endpoint, data) {
    return this.$http.put(endpoint, data)
  }
}

export default ajaxCalls
