var colorContainer = document.getElementById('colors');
var colors = window.theme.colors;

if(colorContainer && window.theme) {
  for(var color in colors) {
    colorContainer.innerHTML = `${colorContainer.innerHTML}
    <span class="item">
      <div class="slot" style="
        height: 128px; 
        border: 1px solid #9a9a9a; 
        margin: 0;
        background: ${colors[color]}"
      ></div>
      <p style="margin: 5px 0 !important;">${color}</p>
      <p style="
        margin: 5px 0 !important;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
      "
      title="${colors[color]}">${colors[color]}</p>
    </span>
    `
  }
}

var colorThemeLoader = document.getElementsByClassName('load-color');

for(var c of colorThemeLoader) {
  if(c.style) {
    c.style.background = colors[c.getAttribute('data-color')].replace(';', '');
  }
}