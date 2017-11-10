import {get} from "@ember/object"
import validateCarYearModel from '../../validators/custom/car-year-model'

export default () => {
  return (key, newValue, oldValue, changes, content) => {

    const carModel = newValue || get(content, 'model');
    const carYear = get(changes, 'changedYear') || get(content, 'year');

    return validateCarYearModel(carYear, carModel);

  };
}
