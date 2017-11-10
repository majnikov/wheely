import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  model:  DS.attr('string'),
  brand:  DS.attr('string'),
  year:   DS.attr('string'),
  color:  DS.attr('string')
});
