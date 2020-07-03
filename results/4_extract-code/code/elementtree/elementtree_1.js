var et = require('elementtree');
var XML = et.XML;
var ElementTree = et.ElementTree;
var element = et.Element;
var subElement = et.SubElement;

var date, root, tenantId, serviceName, eventType, usageId, dataCenter, region,
checks, resourceId, category, startTime, resourceName, etree, xml;

date = new Date();

root = element('entry');
root.set('xmlns', 'http://www.w3.org/2005/Atom');

tenantId = subElement(root, 'TenantId');
tenantId.text = '12345';

serviceName = subElement(root, 'ServiceName');
serviceName.text = 'MaaS';

resourceId = subElement(root, 'ResourceID');
resourceId.text = 'enAAAA';

usageId = subElement(root, 'UsageID');
usageId.text = '550e8400-e29b-41d4-a716-446655440000';

eventType = subElement(root, 'EventType');
eventType.text = 'create';

category = subElement(root, 'category');
category.set('term', 'monitoring.entity.create');

dataCenter = subElement(root, 'DataCenter');
dataCenter.text = 'global';

region = subElement(root, 'Region');
region.text = 'global';

startTime = subElement(root, 'StartTime');
startTime.text = date;

resourceName = subElement(root, 'ResourceName');
resourceName.text = 'entity';

etree = new ElementTree(root);
xml = etree.write({'xml_declaration': false});
console.log(xml);
