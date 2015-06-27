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

    it('to fetch all proposals with a given state', (done) => {
        let status = 'OPEN';
        let service = new ProposalService();

        return service
            .findAllByStatus(status)
            .then((proposals) => {
                chai.expect(proposals.length).not.to.equal(0);

                done();
            });
    });

});