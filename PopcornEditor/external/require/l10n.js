/**
 l10n.js - meant to be used like so:

     require(['l10n!/some/url'], ...

  Depends on text.js plugin.
  **/
define( [ 'text' ], function ( text ) {
  return {
    load: function(name, req, onLoad, config) {
      // Do not bother with the work if a build and text will
      // not be inlined.
      if ( config.isBuild ) {
        onLoad();
        return;
      }
      name = name.replace( /{{lang}}/, 'en-US');
      text.load(name, req, onLoad, config);
    }
  };
});
