var ru = require('convert-layout/ru');

bankcardName.keyup(function () {
  bankcardName.value = ru.toEn(bankcardName.value);
});
