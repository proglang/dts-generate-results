const frisby = require('frisby');

it('should be user 1', function () {
  return frisby.get('https://api.example.com/users/1')
    .then(function (res) {
      expect(res.json.id).toBe(1);
      expect(res.json.email).toBe('testy.mctesterpants@example.com');
    });
});
