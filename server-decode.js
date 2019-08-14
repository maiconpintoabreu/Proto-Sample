var protobuf = require("protobufjs");
protobuf.parse.defaults.keepCase = true;
let json = JSON.stringify({ "nested": { "Item": { 
    "fields": { 
        "field1": { "type": "string", "id": 1 },
        "field2": { "type": "string", "id": 2 },
        "field3": { "type": "string", "id": 3 }
    } 
} } });
let root = protobuf.Root.fromJSON(JSON.parse(json));
let messageDecode = root.lookupType("Item");

let buf = Buffer.from("0a0b74657374206669656c6431120b74657374206669656c64321a0b74657374206669656c6433", "hex");
console.log(messageDecode.decode(buf));