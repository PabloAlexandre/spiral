var shadowContainer = document.getElementById('shadows');
var effects = window.theme.effects;

if(shadowContainer && window.theme) {
  for(var effect in effects) {
    shadowContainer.innerHTML = `${shadowContainer.innerHTML}
    <span class="item" >
      <div style="box-shadow: ${effects[effect]}; height: 128px;"></div>
      <p style="margin: 5px 0 !important;">${effect}</p>
    </span>
    `
  }
}

var shadowThemeLoader = document.getElementsByClassName('load-shadow');

for(var c of shadowThemeLoader) {
  if(c.style) {
    c.style.boxShadow = effects[c.getAttribute('data-shadow')];
  }
}