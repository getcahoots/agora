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

export default class AbstractService {

    constructor() {
        this.baseURL = `https://cahoots-agora-test.firebaseio.com`;
    }

    endpoint(resource) {
        return `${this.baseURL}${resource}.json`
    }

}