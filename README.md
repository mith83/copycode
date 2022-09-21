# Copycode JS Plugin

A easy to use plugin to add a copy code button to your HTML code snippets contained in div with class: 'code-container'.

![Preview](https://mith83.github.io/copycode/copycode.png)

## Demo

[Check out the demo](https://mith83.github.io/copycode/demo.html)

## Getting the Library

### Using a CDN

```html
<script src="https://cdn.jsdelivr.net/gh/mith83/copycode@latest/copycodebutton.js"></script> 
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mith83/copycode@latest/copycodebutton.css" />
```

## Usage

### Basic usage in HTML

```javascript 
<script>
 addcopycodebutton();
</script>
```

### Usage with HighlightJS Library and Line Numbers Plugin

This plugin can also be used with [highlightjs](https://github.com/highlightjs/highlight.js) Plugin and [Line numbers](https://github.com/wcoder/highlightjs-line-numbers.js) Plugin to add a copycode button to your codeblocks.

```javascript
 <script>
 addcopycodebutton();
 hljs.highlightAll();
 hljs.initLineNumbersOnLoad();
 </script>
```

## Useful links

[Detailed Instructions Guide](https://www.success-trending.club/2022/09/how-to-display-code-in-blogger-website.html) <br />
[HighlightJS Homepage](https://highlightjs.org/)

## Complete code display example

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/stackoverflow-light.min.css" integrity="sha512-RDtnAhiPytLVV3AwzHkGVMVI4szjtSjxxyhDaH3gqdHPIw5qwQld1MVGuMu1EYoof+CaEccrO3zUVb13hQFU/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/languages/go.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.6.0/highlightjs-line-numbers.min.js" integrity="sha512-nkjLcPbHjdAof51b8uUd+6q4YH7YrMwh+kfTwSBrg5T/yMKrz8GUxM4uJJ1xAL7Q1lfAMIEowDsTzfWskZ5RcQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

 <script src="https://cdn.jsdelivr.net/gh/mith83/copycode@V1.2/copycodebutton.js"></script>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mith83/copycode@V1.2/copycodebutton.css"></link>
 
 
   <div class="code-container">
   <p class="code-title">Insert code title here</p>
   <pre><code>
   //your escaped code here
   function say() {
   alert("hello world");
   }
   </code></pre>
   </div>
 
 
 <script>
 addcopycodebutton();
 hljs.highlightAll();
 hljs.initLineNumbersOnLoad();
 </script>
```

## Customization with CSS

| CSS selector           | Details                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `.code-container`   | Applied to the container of `<pre>` element that wraps the code. |
| `.code-container .copy-code`    | The copy button itself. |
| `.code-container .code-title` | The title of the code block  |


