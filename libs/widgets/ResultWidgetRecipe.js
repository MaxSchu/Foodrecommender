(function ($) {

AjaxSolr.ResultWidgetRecipe = AjaxSolr.AbstractWidget.extend({
  afterRequest: function () {
    $(this.target).empty();
    for (var i = 0, l = this.manager.response.response.docs.length; i < l; i++) {
      var doc = this.manager.response.response.docs[i];
      $(this.target).append(this.template(doc));
    }
  },

  template: function (doc) {
    

    document.getElementById("recipe-title").innerHTML = doc.title;
    document.getElementById("recipe-description").innerHTML = doc.instructions; 

  

    ingredientArray = doc.ingredient_name.split(";");
    portionTypeArray = doc.portion_type.split(";");
    portionValueArray = doc.portion_value.split(";");


    var output = "<h4 class=\"left-text\">Zutaten:</h4>" + "<ul>";
    for (var i = 0; i < ingredientArray.length - 1; i ++) {
      output += "<li>" + portionValueArray[i] + portionTypeArray[i] + " " + ingredientArray[i] + "</li>"
    };
    output +=   "</ul>"
   
    return output;
  }
});

})(jQuery);