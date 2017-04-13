var sendmail = require('sendmail')();
 
sendmail({
    from: 'gs99100@getnada.com',
    to: 'gs99100@getnada.com ',
    subject: 'test sendmail',
    html: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
