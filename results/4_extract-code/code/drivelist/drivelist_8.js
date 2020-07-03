const drivelist = require('drivelist');

const drives = await drivelist.list();
drives.forEach((drive) => {
  console.log(drive);
});
