var fonts = window.theme.fonts;
var container = document.getElementById('fonts');

var renderComponent = ({ text, fontFamily, fontSize, fontWeight, lineHeightPx, letterSpacing}) => (`
  <p style="
    font-family: '${fontFamily}'; 
    margin: 20px 0;
    padding: 0;
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: ${lineHeightPx}px;
    letter-spacing: ${letterSpacing};">${text}</p>
`);

if(container && fonts) {
  for(var font in fonts) {
    var component = renderComponent({text: font, ...fonts[font]});
    container.innerHTML = `${container.innerHTML} ${component}`;
  }
}

var fontThemeLoader = document.getElementsByClassName('load-font');

for(var c of fontThemeLoader) {
  c.innerHTML = renderComponent({
    text: c.getAttribute('data-text'), 
    ...fonts[c.getAttribute('data-font')]
  });
}
