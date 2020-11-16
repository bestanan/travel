let currentCity = ''
try {
  currentCity = localStorage.getItem('city') || '北京'
} catch (err) {
  console.log(err)
}

export default {
  city: currentCity
}
