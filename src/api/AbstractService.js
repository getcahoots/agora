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

import fetch from 'isomorphic-fetch';

export default class AbstractService {

    constructor() {
        this.baseURL = `https://flickering-heat-5385.firebaseio.com`;
    }

    endpoint(resource) {
        return `${this.baseURL}${resource}.json`
    }
}
