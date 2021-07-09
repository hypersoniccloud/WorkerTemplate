var event, context, data, hl7Obj, firstname;

const sender = require('./sender/sender')

var hl7parser = require('hl7parser')


function manageEvent(event, context, callback) {

  //var message = hl7parser.create("MSH|^~\&|||||20121031232617||ADT^A04|20381|P|2.3||||NE\rEVN|A04|20121031162617||01\rPID|1|16194|16194||Jones^Bob\r");
  //console.log(message.toString())
  //console.log(message.get("PID.5.1").toString())

  data = (Buffer.from((event['filecontent'].toString()),'base64').toString('utf8'));
  hl7Obj = hl7parser.create(data.replace(/(?:\\[rn]|[\r\n]+)+/g, "\r").trim());
  firstname = (hl7Obj.get('PID.5.1').toString());
  sender.sendEvent(1,  ({"fileName" : 'out.txt',"fileContent" : (Buffer.from(firstname).toString('base64'))}))
  sender.sendEvent(2,  ({"filename" : 'out.txt',"filecontent" : (Buffer.from(('Hello ' + String(firstname))).toString('base64'))}))
}


const worker = {
    "manageEvent" : manageEvent
}
module.exports = worker