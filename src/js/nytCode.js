var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


url += '?' + $.param({
  'api-key': "c670650ac9d24c17b4d4e82682212b0d"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});