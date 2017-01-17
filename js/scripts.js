$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();

    for (var i = 0; i < word.length; i += 1) {
      if(word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u") {
        word = word.replace(word.charAt(i), "-");
      };
    };
    $("#return").text(word);
  });
});
