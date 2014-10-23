var Manager;

(function ($) {

  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      id: 'fastfood',
      target: '#result'
    }));
    Manager.init();
    queryString = "req_skill:[0 TO 50] AND vegan:true";
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
  
  });
  

})(jQuery);
