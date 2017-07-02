(function () {
  const el = document.querySelector('.entry')
  const href = el.querySelector('a.image').href
  const title = el.querySelector('img').title
  el.insertAdjacentHTML('beforeend', `<pre>title: ${title}</pre>
  <a href="${href}" download="${title}">download</a>`)
})()
