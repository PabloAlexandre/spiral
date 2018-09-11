var spacing = window.theme.spacing;
var container = document.getElementById('spacing');

var renderComponent = ({ size, name }) => (`
  <div style="
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    border: 1px dashed #777;
    "></div>
  <p>${name} - ${size}px</p>
`);

if(container && spacing) {
  for(var space in spacing) {
    var component = renderComponent({size: spacing[space], name: space});
    container.innerHTML = `${container.innerHTML} ${component}`;
  }
}

var spaceThemeLoader = document.getElementsByClassName('load-space');

for(var c of spaceThemeLoader) {
  c.innerHTML = `
    <div style="
    border-bottom: 1px dashed #777;
    margin-${c.getAttribute('data-margin')}: ${spacing[c.getAttribute('data-space')]}px;
    "></div>
  `
}
