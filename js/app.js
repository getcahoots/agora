/*
 * @getcahoots/agora
 *
 * Copyright Cahoots.pw
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

let React = require('react');

let Discussions = require('./components/').Discussions;

React.render(
  <Discussions />,
  document.getElementById('discussions')
);
