const assert = require('assert');
const User = require('../src/user');

describe('Delete User test', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation.then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex');
                done();
            });
    }

    it('instance type using set and save', (done) => {

        joe.set('name', 'Alex');
        assertName(joe.save(), done);
    });

    it('instace type using update method', (done) => {
        assertName(joe.update({ name: 'Alex' }), done);
    });

    it('A model class can update', (done)=>{
        assertName(User.update({ name: 'Joe'}, {name: 'Alex'}), done);
    });

    it('A model class can update one record', (done)=>{
        assertName(User.findOneAndUpdate({ _id: joe._id}, {name: 'Alex'}), done);
    });

    it('A model class can find and update with id', (done)=>{
        assertName(User.findByIdAndUpdate(joe._id, {name: 'Alex'}), done);
    });
});