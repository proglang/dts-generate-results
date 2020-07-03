const si = require('systeminformation');

async function cpuData() {
    try {
        const data = await si.cpu();
        console.log('CPU Information:');
        console.log('- manufucturer: ' + data.manufacturer);
        console.log('- brand: ' + data.brand);
        console.log('- speed: ' + data.speed);
        console.log('- cores: ' + data.cores);
        console.log('- physical cores: ' + data.physicalCores);
        console.log('...');
    } catch (e) {
        console.log(e)
    }
}
