angular.module("scopedStyle", [])
  .directive("scopedStyle", function () {
    return {
      link : function (scope, elm, attrs) {
        var css = elm.html(),
            parentId = elm.parent().attr("id");

        // Add the parentId before each selector, including multiple comma-separated selectors
        css = css.replace(/(([\},]|^)\s*)([^\s\{])/g, "$1 #" + parentId + " $3");
        elm.html(css);
      }
    };
  });
