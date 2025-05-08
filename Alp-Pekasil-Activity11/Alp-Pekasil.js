/* Activity11.js */
$(document).ready(function () {
  $("#nav_list").on("click", "a", function (e) {
      e.preventDefault();
      const file = "json_files/" + $(this).attr("title") + ".json"; // ← tek değişiklik

      $.getJSON(file)
          .done(function (data) {
              const sp = data.speakers[0];
              const html =
                  `<h1>${sp.title}</h1>
                   <img src="${sp.image}" alt="${sp.speaker}">
                   <h2>${sp.month}<br>${sp.speaker}</h2>
                   <p>${sp.text}</p>`;
              $("main").empty().append(html);
          })
          .fail(function () {
              console.error(`Unable to load ${file}`);
          });
  });
});
