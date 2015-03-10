import {
  loremIpsum
} from '../../../helpers/lorem-ipsum';
import { module, test } from 'qunit';

module('LoremIpsumHelper');

test('it works', function(assert) {
  var result = loremIpsum();
  assert.ok(result);
});

test('lorem-ipsum with various lengths', function(assert) {
var text = 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '+
'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut '+
'aliquip ex ea commodo consequat. '+
'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore '+
'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, '+
'sunt in culpa qui officia deserunt mollit anim id est laborum';
  var oneParagraph = '<p class=\"lorem_ipsum\">'+text+'.</p>';

  var result = loremIpsum({length: 0});
  assert.equal(result.string, oneParagraph, 'length 0');

  result = loremIpsum({length: -1});
  assert.equal(result.string, oneParagraph, 'length -1');

  result = loremIpsum();
  assert.equal(result.string, oneParagraph, 'no length');

  result = loremIpsum({length: 444});
  assert.equal(result.string, oneParagraph, 'exact same length');

  result = loremIpsum({length: 11});
  assert.equal(result.string, '<p class=\"lorem_ipsum\">Lorem ipsum.</p>');

  var twoParagraphs = '<p class=\"lorem_ipsum\">'+text+'. '+text+'.</p>';
  result = loremIpsum({length: 888});
  assert.equal(result.string, twoParagraphs, 'two paragraphs');
});
