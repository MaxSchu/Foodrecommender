doTheSearch("");
var flag = true;


function doTheSearch(inputText) {
var locate = window.location;
document.search.getContent.value = locate;
var text;
  
  if(inputText == ""){
    text = document.search.getContent.value;
  }else{
    text = inputText;
    flag = false;
  }
  queryString = delineate(text);

  if(queryString.indexOf("///") != -1){
    queryString = 0;
  }
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
      $('#pager-header').html($('<span></span>').text('Ergebnisse ' + Math.min(total, offset + 1) + ' bis ' + Math.min(total, offset + perPage) + ' von ' + total));
    }
  }));
    });
    

  })(jQuery);
}

function delineate(str)
{
  if(str[1] == '+' || str[1] == '-') {
      str = str.substring(3);
    }

  returnText = str.indexOf("=")+1;
  ingredientString = "" + str.substring(returnText);
  if(ingredientString.length == 0){
    
  if(getProfileTagString().indexOf("+") == 0){
    
    ingredientString = getProfileTagString().substring(1);
  } else {
    ingredientString = getProfileTagString();
  }
  } else {
    ingredientString += getProfileTagString();
  }
    ingredientString = ingredientString.replace(/\+/g, " AND " );
    ingredientString = ingredientString.replace(/\-/g, " NOT " );
    ingredientString = ingredientString.replace(/%C3/g, "" );
    ingredientString = ingredientString.replace(/%84/g, "Ä" );
    ingredientString = ingredientString.replace(/%9C/g, "Ü" );
    ingredientString = ingredientString.replace(/%96/g, "Ö" );
    ingredientString = ingredientString.replace(/%A4/g, "ä" );
    ingredientString = ingredientString.replace(/%BC/g, "ü" );
    ingredientString = ingredientString.replace(/%B6/g, "ö" );
    ingredientString = ingredientString.replace(/%3A/g, ":" );    

return(ingredientString);

}

function getProfileTagString() {
  var query = "";

  if(localStorage.getItem("taglist") != null && flag) {
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
  return query;
}

function getInputInput() {
  text = text.replace(/\+/g, " ");
  return text;
}
