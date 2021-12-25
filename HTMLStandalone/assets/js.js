function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
WebFont.load({
  google: {
    families: [settings[1]]
  }
});
let holder = document.getElementsByClassName('holder')
async function rotateSocial() {
  while (true) {
    for (var i = 0; i < holder.length; i++) {
      if (holder[i].style.visibility != 'hidden') {
        holder[i].style.transition = settings[13] + 'ms'
        holder[i].style.opacity = 1
        await sleep(settings[12] + settings[13])
        holder[i].style.opacity = 0
        await sleep(settings[13])
      }
    }
  }
}
async function introTask() {
  let cailan = document.getElementById('cailan')
  await sleep(100)
  cailan.style.opacity = 1
  await sleep(3000)
  cailan.style.opacity = 0
  await sleep(1000)
  rotateSocial()
}
function updateSettings() {
  let root = document.documentElement
  const options = ['--bgColor','--font','--iconColor','--textColor','--fontWeight','--iconSize','--textSize','--textDistance','--dropShadowX','--dropShadowY','--dropShadowBlur','--dropShadowColor']
  let label = document.getElementsByClassName('label')
  for (var i = 0; i < options.length; i++) {
    root.style.setProperty(options[i], settings[i])
  }
  for (var i = 0; i < label.length; i++) {
    if (labelText[i] != '') {
      label[i].innerHTML = labelText[i]
    } else {
      holder[i].style.visibility = 'hidden'
    }
  }
}
window.onload = function() {
  updateSettings()
  introTask()
}
