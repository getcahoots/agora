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

var Dispatcher = require('../dispatcher');
let EventEmitter = require('events').EventEmitter;

class DiscussionsStore extends EventEmitter {

    constructor() {
        super();
    }

}

module.exports = (() => {
    return new DiscussionsStore();
})();
