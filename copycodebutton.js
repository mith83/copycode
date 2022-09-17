function addcopycodebutton() {
var codeboxes = document.getElementsByClassName('code-container');
var btn = [], rawcode = [], codetitle = [];
for (var i = 0; i < codeboxes.length; i++) {
 var showcopy = codeboxes[i];
 rawcode[i] = showcopy.querySelector('code').parentElement.textContent;
 codetitle[i] = showcopy.querySelector('p').textContent;
 btn[i]= document.createElement('SPAN');
 btn[i].className = 'copy-code';
 btn[i].innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path fill="#000000" d="M10 4v-4h-7l-3 3v9h6v4h10v-12h-6zM3 1.414v1.586h-1.586l1.586-1.586zM1 11v-7h3v-3h5v3l-3 3v4h-5zM9 5.414v1.586h-1.586l1.586-1.586zM15 15h-8v-7h3v-3h5v10z"></path></svg>';
 showcopy.prepend(btn[i]);
 btn[i].addEventListener('click', function(){
  var copyText = document.createElement("INPUT");
  copyText.type='text';
  copyText.value= rawcode[btn.indexOf(this)].replace(/ /g, " ");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  console.log('Copied code: ' + codetitle[btn.indexOf(this)] + ' to Clipboard');
 });

} }
