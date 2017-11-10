import Response from 'ember-cli-mirage/response';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function() {
  this.get('/cars');

  this.get('/cars/:id', (schema, request) => {

    if (getRandomInt(1, 100) > 80) {
      console.log('ADAPTER ERROR');
      return new Response(500, {}, {errors: ['Извините, сервер недоступен']});
    }

    return schema.cars.find(request.params.id);
  });

  this.patch('/cars/:id');
}
