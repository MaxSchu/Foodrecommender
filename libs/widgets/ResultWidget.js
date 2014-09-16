(function ($) {

AjaxSolr.ResultWidget = AjaxSolr.AbstractWidget.extend({
  afterRequest: function () {
    $(this.target).empty();
    for (var i = 0, l = this.manager.response.response.docs.length; i < l; i++) {
      var doc = this.manager.response.response.docs[i];
      $(this.target).append(this.template(doc));
    }
  },

  template: function (doc) {
    var snippet = '';
    console.log(doc.Instructions);
    if (doc.Instructions.length > 300) {
      snippet += doc.Instructions.substring(0, 300);
      snippet += '<span style="display:none;">' + doc.Instructions.substring(300);
      snippet += '</span> <a href="#" class="more">more</a>';
    }
    else {
      snippet += doc.Instructions;
    }

    var output = '<div><h2>' + doc.Title + '</h2>';
    output += '<p id="links_' + doc.id + '" class="links"></p>';
    output += '<p>' + snippet + '</p></div>';
    console.log(output );
    return output;
  }
});

})(jQuery);