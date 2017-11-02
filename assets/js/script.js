/**
 * 外部链接图标
 */

document.getElementById('site-main').querySelectorAll('a').forEach(a => {
  if (a.host !== location.host && !a.querySelector('img')) {
    a.insertAdjacentHTML('afterBegin', '<svg aria-hidden="true" class="octicon octicon-link-external" width="14" height="14"><use xlink:href="#octicon-link-external"></use></svg>')
  }
})

/**
 * 标题锚点
 */
const reH = /^H[2-4]$/
Array.from(document.querySelector('.markdown-body').children).forEach(el => {
  if (reH.test(el.tagName)) {
    const id = el.id
    if (!id || el.childElementCount) return

    el.innerHTML = `<a href="#${id}" class="anchor" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" width="14" height="14"><use xlink:href="#octicon-link"></use></svg></a>` + el.textContent
  }
})

/**
 * 快捷键
 */

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) return

  // 't' goto top
  if (event.code === 'KeyT') {
    document.documentElement.scrollTop = 0;
  }

  // 'h' go home
  if (event.code === 'KeyH') {
    document.getElementById('home-link').click()
  }
})
