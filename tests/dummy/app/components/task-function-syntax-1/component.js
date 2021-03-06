import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  status: null,

// BEGIN-SNIPPET task-function-syntax-1
  waitAFewSeconds: task(function * () {
    this.set('status', "Gimme one second...");
    yield timeout(1000);
    this.set('status', "Gimme one more second...");
    yield timeout(1000);
    this.set('status', "OK, I'm done.");
  }),
// END-SNIPPET
});

