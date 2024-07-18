document.getElementById('search').addEventListener('click', function() {
    var query = document.getElementById('query').value;
    var url = 'https://www.lddb.com/search.php?search=' + encodeURIComponent(query) + '&sort=title';
    browser.tabs.create({ url: url });
  });
  