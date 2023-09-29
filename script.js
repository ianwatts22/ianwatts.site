
var converter = new showdown.Converter();
var textBox = document.getElementById('section1');

text = '# hello, markdown!';
html = converter.makeHtml(text);
textBox.innerHTML = html;

src = <input type="/markdown \file.md"></input>

// HIGHLIGHT CURRENT PAGE IN MENU
window.onload = function() {
    var path = document.location.pathname;
    var page = path.split("/").pop();

    var nav = document.querySelector('nav');
    var menuItems = nav.getElementsByTagName('a');
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].href.includes(page)) {
            menuItems[i].parentNode.classList.add('selected');
        }
    }
}