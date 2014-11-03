var locate = window.location;
document.search.getContent.value = locate;

var text = document.search.getContent.value;

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
var Manager;

(function ($) {

  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://localhost:8983/solr/foodRecommender/'
    });
    Manager.addWidget(new AjaxSolr.ResultWidgetRecipe({
      target: '#ingredients-content'
    }));
    Manager.init();
    Manager.store.addByValue('q', "id:"+delineate(text));
    Manager.store.addByValue('rows', '10');
    Manager.doRequest();
  });
  

})(jQuery);

/*

var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
//xmlhttp.open("GET","getRecipe.php?q="+delineate(text),true);  
xmlhttp.open("GET","http://localhost:8983/solr/foodRecommender/select?q=id%" +  delineate(text) + "%0A&wt=xml&indent=true",true);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
console.log(xmlDoc);
txt="";
x = xmlDoc.getElementsByTagName("title");
txt = x[0];
document.getElementById("recipe-title").innerHTML = "Hallo";

*/

function saveRecipe() {
  var idCount;

  if(localStorage.getItem("idCount") == null) {
    localStorage.setItem("idCount", 0);
    idCount = 0;
    localStorage.setItem("id" + idCount, delineate(text));
    localStorage.setItem("idTitle" + idCount, $("#recipe-title").html());
  } else {
    idCount = localStorage.getItem("idCount");
    idCount++;
    localStorage.setItem("id" + idCount, delineate(text));
    localStorage.setItem("idCount", idCount);
    localStorage.setItem("idTitle" + idCount, $("#recipe-title").html());
  }
  console.log(localStorage.getItem("idTitle" + idCount));
}