const fs = require('fs');
const data = fs.readFileSync(0, 'utf-8');

const [ a ] = data.split(' ').map(x => parseInt(x));

process.stdout.write( '' + a <= 40 && a >= 0 ? "outdoor activity" : "indoor activity" );