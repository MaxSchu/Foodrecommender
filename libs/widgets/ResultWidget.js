(function ($) {

var count = 0;

AjaxSolr.ResultWidget = AjaxSolr.AbstractWidget.extend({
  afterRequest: function () {
    $(this.target).empty();
    for (var i = 0, l = this.manager.response.response.docs.length; i < l; i++) {
      var doc = this.manager.response.response.docs[i];
      $(this.target).append(this.template(doc));      
    }
    reloadTarget(this.target);
  },

  template: function (doc) {
    var snippet = '';
    if (doc.ingredient_name.length > 100) {
      snippet += doc.ingredient_name.substring(0, 100);
      snippet += '<span style="display:none;">' + doc.ingredient_name.substring(100);
      snippet += '</span> <a href="#" class="more">more</a>';
    }
    else {
      snippet += doc.ingredient_name;
    }



    var output = '<li><div class="slide-item"><h4 class = "slide-item-title center">' + '<a href="recipe.html?id='+ doc.id + '">' + doc.title + '</a></h4><img class="medium-image slide-item-imagel" src="res/img/foodtest.jpg"> <img class="medium-image" src="res/img/foodtest.jpg"><p>' + snippet + '</p></div></li>';


    //var output = '<div><h2><a href="recipe.html?id='+ doc.id + '">' + doc.title + '</a></h2>';
    //output += '<p id="links_' + doc.id + '" class="links"></p>';
    //output += '<p>' + snippet + '</p></div>';
    return output;
  }
});

})(jQuery);