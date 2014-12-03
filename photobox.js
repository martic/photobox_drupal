/*global Drupal: false, jQuery: false */
/*jslint devel: true, browser: true, maxerr: 50, indent: 2 */
(function ($) {
  "use strict";

  Drupal.behaviors.photobox = {
    attach: function(context, settings) {
      //$('a.photobox', context).parent().photobox('a'{ time:3000,thumbs:true,autoplay:false,counter:true,loop:true,zoomable:true }, callback);
      $('div .field-name-field-portfolio-images').photobox('a', { time:3000,thumbs:true,autoplay:false,counter:true,loop:true,zoomable:true }, callback);
      function callback(){
        console.log('callback for loaded content:', this);
      };
    }
  };

})(jQuery);
