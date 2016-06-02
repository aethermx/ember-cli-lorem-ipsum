# ember-cli-lorem-ipsum

[![Build Status](https://travis-ci.org/aethermx/ember-cli-lorem-ipsum.svg?branch=master)](https://travis-ci.org/aethermx/ember-cli-lorem-ipsum)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-lorem-ipsum.svg)](http://emberobserver.com/addons/ember-cli-lorem-ipsum)
[![Code Climate](https://codeclimate.com/github/aethermx/ember-cli-lorem-ipsum/badges/gpa.svg)](https://codeclimate.com/github/aethermx/ember-cli-lorem-ipsum)


## Addon Install

    ember install ember-cli-lorem-ipsum
    # if ember-cli <= 0.2.2
    ember install:addon ember-cli-lorem-ipsum

It provides a helper that makes it easy to add dummy text.

### Options
Option | Value | Description
--- | --- | ---
length | Number | The length of the text to return (number of characters). *Defaut* 0 (returns the default paragraph )
html | Boolean | Wrap the text in `<p>` tags. *Default* true


If the html option is true, the text will be returned inside a `<p>` tag like this:

    <p class="lorem_ipsum">Lorem ipsum.</p>  

Otherwise it will return as:

    Lorem ipsum.

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
