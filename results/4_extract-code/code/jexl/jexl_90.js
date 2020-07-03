const xml2json = require('xml2json');

jexl.addTransform('xml', (val) => xml2json.toJson(val, { object: true }))

const context = {
  xmlDoc: `
    <Employees>
      <Employee>
        <FirstName>Cheryl</FirstName>
        <LastName>Tunt</LastName>
      </Employee>
      <Employee>
        <FirstName>Cyril</FirstName>
        <LastName>Figgis</LastName>
      </Employee>
    </Employees>`
}

var expr = 'xmlDoc|xml.Employees.Employee[.LastName == "Figgis"].FirstName';

jexl.eval(expr, context).then(console.log) // Output: Cyril
