var str1 = "JavaScript";
log(str1.search(/script/i));

var text = "";
text.replace(/javascript/i, "JavaScript");

var quote = /"([^"]*)/g;

text.replace(quote, '“$1”');

text = "1 plus 2 equals 3";
log(text.match(/\d+/g));

var url ＝ /(\w+):\/\/([\w.]+)\/(\S*)/;
text = "Visit my blog at http://www.example.com/~david";
var result = text.match(url);
if(result != null){
    log(result);
}