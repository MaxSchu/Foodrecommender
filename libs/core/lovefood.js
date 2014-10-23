var locate = window.location
document.search.getContent.value = locate

var text = document.search.getContent.value

function delineate(str)
{
returnText = str.indexOf("=")+1;
return(str.substring(returnText ));

}
console.log(delineate(text));

//document.getElementById("query").innerHTML = "Suche nach: " + delineate(text);

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
