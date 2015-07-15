var phantom = require('phantom');
var assert = require('assert');
var app = require('../support/app');
var port = 3001;
var baseURL = 'http://localhost:' + port.toString();

describe('Drop-in Integration', function() {

  var ph;
  var server;
  this.timeout(1e4);

  before(function(done) {
    phantom.create(function(phInstance) {
      ph = phInstance;
      server = app.listen(port, function() {
        done();
      });
    });
  });

  it('adds elements to the page on setup', function(done) {
    ph.createPage(function(page) {

      page.onConsoleMessage(function(msg) {
        console.log('page console -> ', msg);
      });

      page.open(baseURL + '/test-dropin.html', function(status) {
        page.evaluate(function() { return document.documentElement.innerHTML; }, function(result) {
          assert(result.indexOf('iframe') !== -1, 'adds an iframe to the page');
          var input = '<input type="hidden" name="payment_method_nonce" value="">';

          assert(result.indexOf(input) !== -1, 'adds nonce input');

          done();
        });
      });

    });
  });

  it('generates a React Component with a default Braintree classname', function(done) {
    ph.createPage(function(page) {

      page.onConsoleMessage(function(msg) {
        console.log('page console -> ', msg);
      });

      page.open(baseURL+'/test-dropin.html', function(status) {
        page.evaluate(function() { return document.querySelector('.__braintree-react__'); }, function(result) {

          assert(result, 'has __braintree-react__');

          done();
        });
      });
    });
  });

  after(function(done) {
    ph.exit();
    server.close();
    done();
  });
});
