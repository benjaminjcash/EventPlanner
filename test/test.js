let chai = require('chai');
let chaiHTTP = require('chai-http');
let should = chai.should();
let expect = chai.expect;
let server = require('../server.js');

chai.use(chaiHTTP);

describe('GET /api/events', () => {
    it('should get all events', (done) => {
        chai.request(server)
            .get('/api/events')
            .end((err, res) => {
                res.should.have.status(200);
                console.log(res.body);
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
               expect(res).to.be.json;
               expect(res.body.eventid).to.eql('5c378fe15d78a6226090a6e0');
               done();
           });
   });
}); 




