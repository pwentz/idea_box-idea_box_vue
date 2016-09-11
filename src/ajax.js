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
}

export default ajaxCalls
