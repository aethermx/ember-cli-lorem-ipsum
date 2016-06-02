import Ember from 'ember';

var originalText =
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '+
'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '+
'aliquip ex ea commodo consequat. '+
'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore '+
'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, '+
'sunt in culpa qui officia deserunt mollit anim id est laborum';

export function loremIpsum(params, hash) {
  var text = originalText;

  if ( ! hash || ! hash.length || hash.length < 0 ) {
    // return the whole paragraph
  } else {
    if ( hash.length < text.length ) {
      text = text.substring(0, hash.length);
    } else {
      var result = '',
          repeatN = hash.length / text.length;

      for (var i = 0; i < repeatN; i++) {
        result += text;
        result += (i === repeatN-1) ? '' : '. ';
      }
      var remainder = hash.length % text.length;
      result += text.substring(0, remainder);
      text = result;
    }
  }

  text += '.';

  if (hash && hash.html === false) {
      return text;
  }

  return new Ember.Handlebars
                  .SafeString('<p class="lorem_ipsum">' + text + '</p>');
}

export default Ember.HTMLBars.makeBoundHelper(loremIpsum);
