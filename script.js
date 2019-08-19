const getHtmlStyle = async () => {
  const response = await fetch('structure.json');
  const scripts = await response.json();
  
  const html = document.createElement('div');
  html.innerHTML = scripts.html;
  document.body.appendChild(html);

  const style = document.createElement('style');
  style.textContent = scripts.styles;
  document.body.appendChild(style);
};
getHtmlStyle();


