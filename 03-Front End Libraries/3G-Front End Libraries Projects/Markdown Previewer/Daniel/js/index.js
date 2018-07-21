var DisplayContainer = React.createClass({
  displayName: "DisplayContainer",

  updateValue: function updateValue(modifiedValue) {
    this.setState({
      value: modifiedValue
    });
  },
  getInitialState: function getInitialState() {
    return {
      value: 'Heading\n=======\n\n Objective: \n\n ``` Build a CodePen.io app``` \n\n Sub-heading\n-----------\n \n ### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\n Text attributes: *italic*, **bold**, \n`mono-space`, ~~strike-through~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n \n\n &hellip; Want more? &hellip; \n\n ##Example Badges: ![NPM version](https://badge.fury.io/js/marked.png) \n\n ##BlockQuote \n\n > Here is another feature to display a full-featured markdown parser &amp; compiler, written in JavaScript which is &hellip; \n\n> Built for speed! \n\n ## Example Syntax: \n\n Type: `string` \n\n ### options \n\n Type: `object` \n\n ### callback \n\n Type: `function` \n\n## Block Chunk: \n\nThis code shall output the following HTML: \n\n```html \n\n<div itemscope> \n\n    <h1 class="intro">Example Header</h1>\n\n    <a name="ReactJSX" class="anchor" href="#ReactJSX">\n\n    <span class="ReactJSX-link"></span>\n\n        React JSX Syntax with Babel</a>\n\n     <p>A paragraph.</p>\n\n     <p class="important">This is an important paragraph.</p>\n\n     </div>\n\n ``` \n\n ## That\'s it for now! \n\n ### Thanks, \n\n \n\n Created by: *[Daniel Lim](https://freecodecamp.com/profoundhub "Daniel Lim\'s FreeCodeCamp Profile")* \n\n > ![equation](http://www.sciweavers.org/tex2img.php?eq=1%2Bsin%28mc%5E2%29&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=)'
    };
  },
  rawMarkup: function rawMarkup(value) {
    var rawMarkup = marked(value, {
      sanitize: true
    });
    return {
      __html: rawMarkup
    };
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "row boxes" },
      React.createElement(
        "div",
        { className: "col-md-6 MarkdownInput box1" },
        React.createElement(RawInput, { value: this.state.value, updateValue: this.updateValue })
      ),
      React.createElement(
        "div",
        { className: "col-md-6 MarkdownOutput box2" },
        React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup(this.state.value) })
      )
    );
  }
});

var RawInput = React.createClass({
  displayName: "RawInput",

  update: function update() {
    var modifiedValue = this.refs.inputValue.getDOMNode().value;
    this.props.updateValue(modifiedValue);
  },
  render: function render() {
    return React.createElement("textarea", { rows: "75", type: "text", ref: "inputValue", value: this.props.value, onChange: this.update, id: "code", name: "code", className: "form-control cm-s-icecoder code" });
  }
});

React.render(React.createElement(DisplayContainer, null), document.getElementById("containerMarkdown"));

$(document).ready(function () {
  $('#summernote1').summernote();
  $('#summernote2').summernote();
});

var editor = CodeMirror.fromTextArea(document.getElementByClass("code"), {
  lineNumbers: true,
  lineWrapping: true,
  mode: "markdown"
});