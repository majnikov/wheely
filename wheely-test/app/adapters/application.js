import DS from 'ember-data';
import {inject} from "@ember/service"

export default DS.JSONAPIAdapter.extend({

  notify: inject(),

  handleResponse(status, ignore, payload) {
    switch (status) {
      case 500:
        const errors = payload.errors;

        if (errors && errors.length) {
          errors.forEach(error => this.get('notify')
                                      .alert(error, {closeAfter: 5000}));
        }
        break;
      default:
        break;
    }

    return this._super(...arguments);
  }

});
