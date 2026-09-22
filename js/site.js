(function () {
  var search = document.getElementById('article-search');
  var filter = document.getElementById('category-filter');
  var list = document.getElementById('article-list');
  var status = document.getElementById('article-status');
  if (!search || !filter || !list || !status) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll('.article-card'));
  function update() {
    var term = search.value.trim().toLowerCase();
    var category = filter.value;
    var visible = 0;
    cards.forEach(function (card) {
      var matches = (!term || card.textContent.toLowerCase().indexOf(term) !== -1) &&
        (category === 'all' || card.dataset.category === category);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    status.textContent = visible + ' article' + (visible === 1 ? '' : 's') + ' shown.';
  }
  search.addEventListener('input', update);
  filter.addEventListener('change', update);
  update();
}());
