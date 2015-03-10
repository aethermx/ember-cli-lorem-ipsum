# ember-cli-lorem-ipsum

[![Build Status](https://travis-ci.org/aethermx/ember-cli-lorem-ipsum.svg?branch=master)](https://travis-ci.org/aethermx/ember-cli-lorem-ipsum)

Provides a helper that makes it easy to add dummy text. The only option that the helper accepts is **length**.

The text will be returned inside a `<p>` tag like this:

    <p class="lorem_ipsum">Lorem ipsum.</p>  

## Examples

#### no length

    {{lorem-ipsum}}
    
<p class="lorem_ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

#### length 11

    {{lorem-ipsum length=11}}
    
<p class="lorem_ipsum">Lorem ipsum.</p>

#### length 500
    
    {{lorem-ipsum length=500}}
    
<p class="lorem_ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,.</p>
    
## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Legal

[Æther](http://aether.mx/)

hello@aether.mx

[Licensed under the MIT license](http://opensource.org/licenses/mit-license.php)
