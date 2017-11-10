import {get} from "@ember/object"
import validateCarYearModel from '../../validators/custom/car-year-model'

export default () => {
  return (key, newValue, oldValue, changes, content) => {

    const carYear = newValue || get(content, 'year');
    const carModel = get(changes, 'changedModel') || get(content, 'model');

    return validateCarYearModel(carYear, carModel);

  };
}
