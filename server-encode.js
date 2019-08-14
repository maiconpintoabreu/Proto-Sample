var protobuf = require("protobufjs");
protobuf.parse.defaults.keepCase = true;
let test = {field1:"test field1",field2:"test field2",field3:"test field3"}
let json = JSON.stringify({ "nested": { "Item": { 
    "fields": { 
        "field1": { "type": "string", "id": 1 },
        "field2": { "type": "string", "id": 2 },
        "field3": { "type": "string", "id": 3 }
    } 
} } });
let root = protobuf.Root.fromJSON(JSON.parse(json));
var messageEncode = root.lookupType("Item");

let protoBufHex = messageEncode.encode(messageEncode.create(test)).finish().toString("hex");
console.log(protoBufHex);