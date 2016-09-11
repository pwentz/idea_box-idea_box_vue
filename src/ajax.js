class ajaxCalls {
  fetchIdeas(endpoint) {
    return this.$http.get(`${endpoint}/ideas.json`)
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

  clearAllIdeas(endpoint) {
    return this.$http.get(endpoint)
  }
}

export default ajaxCalls
