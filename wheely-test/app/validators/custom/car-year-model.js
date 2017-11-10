import CAR_CLASSES from '../../const/car-classes';
import locales from '../../locales/ru/translations';


export default (carYear, carModel) => {

  const carClass = CAR_CLASSES.findBy('name', carModel);

  if (!carClass) {
    return true;
  }

  if (carClass.minYear >= carYear) {
    return locales['validation.errors.year-model'](carClass.minYear);
  }

  return true;

}
