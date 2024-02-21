const createBlocker = () => {
  const blocker = document.createElement('div')
  blocker.style.width = `50%`
  blocker.style.height = `80px`
  blocker.style.backgroundColor = '#151515'
  blocker.style.position = 'fixed'
  blocker.style.right = `0`
  blocker.style.borderLeft = '2px solid #434343'
  blocker.style.borderTop = '2px solid #434343'
  blocker.style.borderRight = '2px solid #434343'
  blocker.style.resize = 'horizontal'
  blocker.style.transform = 'rotate(180deg)'
  blocker.style.overflow = 'auto'
  blocker.style.top = `101px`
  blocker.style.zIndex = 9999
  document.body.appendChild(blocker)
}

createBlocker()
