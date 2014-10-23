var locate = window.location
document.search.getContent.value = locate

var text = document.search.getContent.value

function delineate(str)
{
returnText = str.indexOf("=")+1;
ingredientString = str.substring(returnText);

ingredientString = ingredientString.replace(/\+/g, " AND " );
ingredientString = ingredientString.replace(/%C3/g, "" );
ingredientString = ingredientString.replace(/%84/g, "Ä" );
ingredientString = ingredientString.replace(/%9C/g, "Ü" );
ingredientString = ingredientString.replace(/%96/g, "Ö" );
ingredientString = ingredientString.replace(/%A4/g, "ä" );
ingredientString = ingredientString.replace(/%BC/g, "ü" );
ingredientString = ingredientString.replace(/%B6/g, "ö" );

return(ingredientString);

}
console.log(delineate(text));
queryString = delineate(text);
queryString = queryString.replace(/AND/g, "");
document.getElementById("query").innerHTML = "Suche nach: " + queryString;

var Manager;

(function ($) {

  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidgetSearch({
      id: 'result',
      target: '#docs'
    }));
    Manager.init();
    Manager.store.addByValue('q', delineate(text));
    Manager.store.addByValue('rows', '10');
    Manager.doRequest();
    Manager.addWidget(new AjaxSolr.PagerWidget({
    id: 'pager',
    target: '#pager',
    prevLabel: '&lt;',
    nextLabel: '&gt;',
    innerWindow: 1,
    renderHeader: function (perPage, offset, total) {
    $('#pager-header').html($('<span></span>').text('displaying ' + Math.min(total, offset + 1) + ' to ' + Math.min(total, offset + perPage) + ' of ' + total));
  }
}));
  });
  

})(jQuery);
