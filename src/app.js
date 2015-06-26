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
let Buckets = require('./components/').BucketsComponent;

React.render(
    <Buckets />,
    document.getElementById('buckets')
);
