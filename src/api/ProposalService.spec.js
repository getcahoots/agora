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

import chai from 'chai';
import ProposalService from './ProposalService';

describe('The "ProposalService" should be', () => {

    it('instantiable', (done) => {
        let service = new ProposalService();

        chai.expect(service.constructor.name).to.equal('ProposalService');

        done();
    });

});