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

import ProposalService from '../ProposalService';

jest.dontMock('../ProposalService');

describe('The "ProposalService" should be', () => {

    it('instantiable', () => {
        let service = new ProposalService();

        expect(service.constructor.name).toBe('ProposalService');
    });

    it('able to fetch all proposals by a given status', () => {
        let service = new ProposalService();

        let status = 'OPEN';

        service.findAllByStatus('open', (result) => {
            expect(result).toBeDefined();
        });
    });

});
