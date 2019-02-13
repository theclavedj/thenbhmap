export default function startsw.js() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(function(reg) {
      console.log('Registration succeeded!', reg);
    })
    .catch(function(error) {
      console.log('Registration failed with ' + error)
    });
  }
}
