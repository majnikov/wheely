import {
  validatePresence,
} from 'ember-changeset-validations/validators';
import carModelValidation from '../validators/custom/car-model';
import carYearValidation from '../validators/custom/car-year';
import locales from '../locales/ru/translations';

export default {
  number: [
    validatePresence({
      presence:    true,
      description: locales['cars.car.number']
    })
  ],
  model:  [
    validatePresence({
      presence:    true,
      description: locales['cars.car.model']
    }),
    carModelValidation()
  ],
  brand:  [
    validatePresence({
      presence:    true,
      description: locales['cars.car.brand']
    })
  ],
  year:   [
    validatePresence({
      presence:    true,
      description: locales['cars.car.year']
    }),
    carYearValidation()
  ],
  color:  [
    validatePresence({
      presence:    true,
      description: locales['cars.car.color']
    })
  ]
};
