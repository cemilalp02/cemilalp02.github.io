$(document).ready(function() {

  $("#birthday").datepicker({
    changeMonth: true,
    changeYear: true,
    yearRange: "1900:2025",
    dateFormat: "dd/mm/yy"
  });

  
  var cities = [
    "Charlotte",
    "New York",
    "Washington DC",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix"
  ];
  $("#city").autocomplete({
    source: cities
  });

  
  var languages = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "Bash",
    "C",
    "C#",
    "C++",
    "Clojure",
    "CoffeeScript",
    "D",
    "Dart",
    "Delphi",
    "Go",
    "Haskell",
    "Java",
    "JavaScript",
    "Julia",
    "Kotlin",
    "Lisp",
    "Lua",
    "Objective-C",
    "Perl",
    "PHP",
    "Python",
    "R",
    "Ruby",
    "Rust",
    "Scala",
    "Swift",
    "TypeScript"
  ];
  $("#language").autocomplete({
    source: languages,
    minLength: 1     
  });

  $("#activity10-form").on("submit", function(evt) {
    if (!this.checkValidity()) {
      $(this).find(":invalid").first().focus();
      return;
    }
    evt.preventDefault();
    alert("The form has been sent successfully!");
  });
});
