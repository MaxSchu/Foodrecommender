

var Manager;

(function ($) {

  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    
    Manager.addWidget(new AjaxSolr.ResultWidget({
      target: '#forMe'
    }));
    Manager.init();
    queryString = getProfileTagString();
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
   });
  

})(jQuery);

var Manager;
(function ($) {
  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      target: '#diff_easy'
    }));
    Manager.init();
    queryString = getProfileTagString() + " AND req_skill:0";
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
       });
})(jQuery);

var Manager;
(function ($) {
  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      target: '#diff_med'
    }));
    Manager.init();
    queryString = getProfileTagString() + " AND req_skill:25";
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
       });
})(jQuery);


var Manager;
(function ($) {
  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });    
    Manager.addWidget(new AjaxSolr.ResultWidget({
      target: '#diff_hard'
    }));
    Manager.init();
    queryString = getProfileTagString() + " AND req_skill:[50 TO 75]";
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
       });
})(jQuery);


var Manager;
(function ($) {
  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      target: '#time_easy'
    }));
    Manager.init();
    queryString = getProfileTagString() + " AND time_cook:[0 TO 19]";
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
       });
})(jQuery);


var Manager;
(function ($) {
  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      target: '#time_med'
    }));
    Manager.init();
    queryString = getProfileTagString() + " AND time_cook:[20 TO 40]";
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
       });
})(jQuery);


var Manager;
(function ($) {
  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidget({
      target: '#time_hard'
    }));
    Manager.init();
    queryString = getProfileTagString() + " AND time_cook:[41 TO 90]";
    Manager.store.addByValue('q', queryString);
    Manager.store.addByValue('rows', '3');
    Manager.doRequest();
       });
})(jQuery);




function reloadSliders() {
  slider1.reloadSlider();
  slider2.reloadSlider();
  slider3.reloadSlider();
  slider4.reloadSlider();
  slider5.reloadSlider();
  slider6.reloadSlider();
  slider7.reloadSlider();
}

function reloadTarget(target) {
  $(target).bxSlider({
    auto: true,
    slideWidth: 275,
    autoControls: true,
    pause: 10000,
    slideMargin: 10
  });
}
 

function getProfileTagString() {
  var query = "";

  if(localStorage.getItem("taglist") != null) {
    var tagArray = JSON.parse(localStorage.getItem("taglist"));
    var colorArray = JSON.parse(localStorage.getItem("colorlist"));

    for(var i = 0; i < tagArray.length; i++) {
      if(colorArray[i] == "red"){
        query += "-"+tagArray[i];
      }
      if(colorArray[i] == "green"){
        query += "+"+tagArray[i];
      }
    }
  } 

   if(query.indexOf("+") == 0){
    query = query.substring(1);
   }  
ingredientString = query;
ingredientString = ingredientString.replace(/\+/g, " AND " );
ingredientString = ingredientString.replace(/\-/g, " NOT " );
ingredientString = ingredientString.replace(/%C3/g, "" );
ingredientString = ingredientString.replace(/%84/g, "Ä" );
ingredientString = ingredientString.replace(/%9C/g, "Ü" );
ingredientString = ingredientString.replace(/%96/g, "Ö" );
ingredientString = ingredientString.replace(/%A4/g, "ä" );
ingredientString = ingredientString.replace(/%BC/g, "ü" );
ingredientString = ingredientString.replace(/%B6/g, "ö" );

  return ingredientString;
}