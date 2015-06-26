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

import ProposalService from '../ProposalService';

jest.dontMock('../ProposalService');

describe('The "ProposalService" should be', () => {

    it('instantiable', () => {
        let service = new ProposalService();

        expect(service.constructor.name).toBe('ProposalService');
    });

    it('able to fetch all proposals by a given status', () => {

    });

});
