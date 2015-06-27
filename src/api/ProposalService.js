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

import AbstractService from './AbstractService';

export default class ProposalService extends AbstractService {

    constructor() {
        super();
    }

    /**
     * Fetches all proposals with the given status.
     *
     * @param {string} status The proposal status (e.g. `OPEN`)
     *
     */
    findAllByStatus(status) {
        return new Promise((resolve, reject) => {
            fetch(this.endpoint('/proposals'))
                .then((response) => response.json())
                .then((proposals) => resolve(proposals))
                .catch((err) => {
                    reject(err);
                });
        });
    }

}
