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

const TYPES = {
    'PROPOSAL': true
}

export default create(type) {
    switch (type.toUpperCase()) {
        let service = null;

        case: 'PROPOSAL':
            service = new ProposalService();
        break;

        if (!service) {
            throw new Error('Please define a valid service.');
        }
    }
}
