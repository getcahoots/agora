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
let Store = require('../stores/').BucketsStore;

class BucketsComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>Buckets</div>
        );
    }

}

module.exports = BucketsComponent;
