let chai = require('chai');
let chaiHTTP = require('chai-http');
let should = chai.should();
let server = require('../server');

chai.use(chaiHTTP);
console.log("starting tests");

describe('GET /api/events', () => {
    it('should get all events', (done) => {
        chai.request(server)
            .get('/api/events')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('GET /api/events/5c378fe15d78a6226090a6e0', () => {
   it('should get a specific event', (done) => {
       chai.request(server)
           .get('/api/events/5c378fe15d78a6226090a6e0')
           .end((err, res) => {
               res.should.have.status(200);
               res.body.should.be.a('object');
               console.log(res.body);
               done();
           });
   });
});




