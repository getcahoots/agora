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

let React = require('react');
let Store = require('../stores/').DiscussionsStore;
let Actions = require('../actions/').DiscussionsActions;

class DiscussionsComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="discussions">
                The discussionsasdas
            </div>
        );
    }

}

module.exports = DiscussionsComponent;
