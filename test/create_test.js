const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');

describe('Create user records', () => {
    // it('', () => {

    // });
    it('saves a user', (done) => {
        const joe = new User({ name: 'Pratik', lastName: 'Chaudhari' });
        joe.save()
            .then(() => {
                assert(!joe.isNew);
                done();
            });

    });
});