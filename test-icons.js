const icons = require('simple-icons');
const list = ["Java", "Javascript", "Html5", "React", "Tailwindcss", "Bootstrap", "Django", "Nodedotjs", "Mysql", "Mongodb", "Pandas", "Scikitlearn", "Streamlit", "Github", "Beautifulsoup"];
list.forEach(name => {
  const icon = icons[`si${name}`];
  console.log(`${name}: ${icon ? 'FOUND' : 'MISSING'}`);
});
