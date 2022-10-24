
var converter = new showdown.Converter();
var textBox = document.getElementById('section1');

text = '# hello, markdown!';
html = converter.makeHtml(text);
textBox.innerHTML = html;

src = <input type="/markdown \file.md"></input>
