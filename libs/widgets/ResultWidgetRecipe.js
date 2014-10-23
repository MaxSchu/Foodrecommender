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

    string1 = doc.ingredient_name;
    string2 = doc.portion_type;
    string3 = doc.portion_value;
    console.log(string1 + string2 + string3 );

    ingredientArray = doc.ingredient_name.split(";");
    portionTypeArray = doc.portion_type.split(";");
    portionValueArray = doc.portion_value.split(";");

    console.log(ingredientArray.length );

    var output = "<h4 class=\"left-text\">Zutaten:</h4>" + "<ul>";
    for (var i = 0; i < ingredientArray.length -1; i ++) {
      output += "<li>" + portionValueArray[i] + portionTypeArray[i] + " " + ingredientArray[i] + "</li>"
      console.log("hi");
    };
    output +=   "</ul>"
   
    return output;
  }
});

})(jQuery);