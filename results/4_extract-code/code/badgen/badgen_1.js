const badgen = require('badgen')

const svgString = badgen({
  subject: 'npm',   // <Text>
  status: 'v1.2.3', // <Text>
  color: 'blue',    // <Color RGB> or <Color Name>, optional
  style: 'flat',    // 'flat' or undefined, optional
  icon: 'data:image/svg+xml;base64,...', // Use icon, optional
  iconWidth: 13     // Use this if icon is not square.
})
