Handlebars.registerHelper('formatDate', function(options) {

  var cdate = new Date(options);
  var options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  date = cdate.toLocaleDateString();
  return date;
});
