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

let Dispatcher = require('../dispatcher');
let EventEmitter = require('events').EventEmitter;

class BucketsStore extends EventEmitter {

    constructor() {
        super();
    }

}

module.exports = (() => {
    return new BucketsStore();
})();
