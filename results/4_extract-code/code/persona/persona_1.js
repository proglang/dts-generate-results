const Persona = require('persona');
const client: Client = new Persona.Client({
  // This refers to a production demo blueprint owned by Persona
  blueprintId: 'persona-production_e1de83bf-e29f-48bb-9dae-568479b9edda',
  onLoad: () => client.open(),
  onStart: (inquiryId: string) => console.log(inquiryId),
  onSuccess: () => console.log('onSuccess'),
});
