var displayTime = {{displayTime}}
var fadeTime = {{fadeTime}}

let discordOn;
window.addEventListener('onWidgetLoad', function (obj) {
    const fieldData = obj.detail.fieldData;
    discordOn=fieldData.discordOn.checked;
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function socialRotate() {
  var holder = document.getElementsByClassName("holder")
  while (true) {
    for (var i = 0; i < holder.length; i++) {
      if (holder[i].style.visibility != "hidden") {
        holder[i].style.transition = fadeTime + "ms"
        holder[i].style.opacity = 1
        await sleep(displayTime + fadeTime)
        holder[i].style.opacity = 0
        await sleep(fadeTime)
      }
    }
  }
}

async function loadTask() {
  var cailan = document.getElementById("cailan")
  if (discordOn == true) {document.getElementById("discord").style.visibility = "hidden"}
  cailan.style.opacity = 1
  await sleep(3000)
  cailan.style.opacity = 0
  await sleep(1000)
  socialRotate()
}
window.onload = loadTask()
