export default {
  cityChange (state, name) {
    state.city = name
    try {
      localStorage.setItem('city', name)
    } catch (err) {
      console.log(err)
    }
  }
}
