import Component from '@ember/component';
import {inject} from "@ember/service"

export default Component.extend({
  i18n: inject(),

  timers:            [],
  isShowAlert:       false,
  isButtonsDisabled: false,

  transitionToCars() {
    this.get('router')
        .transitionTo('cars');
  },

  actions: {

    setYear(year) {
      this.set('car.year', year);
      this.set('car.changedYear', year);
      this.get('car')
          .validate();
    },

    setModel(model) {
      this.set('car.model', model);
      this.set('car.changedModel', model);
      this.get('car')
          .validate();
    },

    save() {
      const car = this.get('car');
      const isDirty = car.get('isDirty');
      const hasErrors = car.get('errors.length');

      if (!isDirty && !hasErrors) {
        this.transitionToCars();
        return;
      }

      const notify = this.get('notify');

      car.validate()
         .then(() => {
             if (car.get('isInvalid')) {
               notify.error(this.get('i18n')
                                .t('alerts.validation-errors'));
               return;
             }

             this.set('isButtonsDisabled', true);

             car.save()
                .then(() => {
                  notify.success(this.get('i18n')
                                     .t('alerts.saved'));
                  this.set('isButtonsDisabled', false);
                  this.transitionToCars();
                })
                .catch(() => {
                  notify.alert(this.get('i18n')
                                     .t('alerts.error'));
                  this.set('isButtonsDisabled', false);
                });
           }
         );
    },

    cancel() {
      this.get('car')
          .rollback();
      this.transitionToCars();
    }

  }

});
