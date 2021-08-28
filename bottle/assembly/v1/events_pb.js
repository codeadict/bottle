// source: bottle/assembly/v1/events.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var bottle_assembly_v1_build_pb = require('../../../bottle/assembly/v1/build_pb.js');
goog.object.extend(proto, bottle_assembly_v1_build_pb);
var bottle_inventory_v1_location_pb = require('../../../bottle/inventory/v1/location_pb.js');
goog.object.extend(proto, bottle_inventory_v1_location_pb);
var bottle_inventory_v1_part_pb = require('../../../bottle/inventory/v1/part_pb.js');
goog.object.extend(proto, bottle_inventory_v1_part_pb);
goog.exportSymbol('proto.bottle.assembly.v1.BuildCreated', null, global);
goog.exportSymbol('proto.bottle.assembly.v1.BuildPicked', null, global);
goog.exportSymbol('proto.bottle.assembly.v1.BuildUpdated', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bottle.assembly.v1.BuildCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bottle.assembly.v1.BuildCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bottle.assembly.v1.BuildCreated.displayName = 'proto.bottle.assembly.v1.BuildCreated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bottle.assembly.v1.BuildUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bottle.assembly.v1.BuildUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bottle.assembly.v1.BuildUpdated.displayName = 'proto.bottle.assembly.v1.BuildUpdated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bottle.assembly.v1.BuildPicked = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bottle.assembly.v1.BuildPicked.repeatedFields_, null);
};
goog.inherits(proto.bottle.assembly.v1.BuildPicked, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bottle.assembly.v1.BuildPicked.displayName = 'proto.bottle.assembly.v1.BuildPicked';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bottle.assembly.v1.BuildCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.bottle.assembly.v1.BuildCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bottle.assembly.v1.BuildCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.assembly.v1.BuildCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    build: (f = msg.getBuild()) && bottle_assembly_v1_build_pb.Build.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bottle.assembly.v1.BuildCreated}
 */
proto.bottle.assembly.v1.BuildCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bottle.assembly.v1.BuildCreated;
  return proto.bottle.assembly.v1.BuildCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bottle.assembly.v1.BuildCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bottle.assembly.v1.BuildCreated}
 */
proto.bottle.assembly.v1.BuildCreated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bottle_assembly_v1_build_pb.Build;
      reader.readMessage(value,bottle_assembly_v1_build_pb.Build.deserializeBinaryFromReader);
      msg.setBuild(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bottle.assembly.v1.BuildCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bottle.assembly.v1.BuildCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bottle.assembly.v1.BuildCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.assembly.v1.BuildCreated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bottle_assembly_v1_build_pb.Build.serializeBinaryToWriter
    );
  }
};


/**
 * optional Build build = 1;
 * @return {?proto.bottle.assembly.v1.Build}
 */
proto.bottle.assembly.v1.BuildCreated.prototype.getBuild = function() {
  return /** @type{?proto.bottle.assembly.v1.Build} */ (
    jspb.Message.getWrapperField(this, bottle_assembly_v1_build_pb.Build, 1));
};


/**
 * @param {?proto.bottle.assembly.v1.Build|undefined} value
 * @return {!proto.bottle.assembly.v1.BuildCreated} returns this
*/
proto.bottle.assembly.v1.BuildCreated.prototype.setBuild = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bottle.assembly.v1.BuildCreated} returns this
 */
proto.bottle.assembly.v1.BuildCreated.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bottle.assembly.v1.BuildCreated.prototype.hasBuild = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.bottle.assembly.v1.BuildUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bottle.assembly.v1.BuildUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.assembly.v1.BuildUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    old: (f = msg.getOld()) && bottle_assembly_v1_build_pb.Build.toObject(includeInstance, f),
    pb_new: (f = msg.getNew()) && bottle_assembly_v1_build_pb.Build.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bottle.assembly.v1.BuildUpdated}
 */
proto.bottle.assembly.v1.BuildUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bottle.assembly.v1.BuildUpdated;
  return proto.bottle.assembly.v1.BuildUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bottle.assembly.v1.BuildUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bottle.assembly.v1.BuildUpdated}
 */
proto.bottle.assembly.v1.BuildUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bottle_assembly_v1_build_pb.Build;
      reader.readMessage(value,bottle_assembly_v1_build_pb.Build.deserializeBinaryFromReader);
      msg.setOld(value);
      break;
    case 2:
      var value = new bottle_assembly_v1_build_pb.Build;
      reader.readMessage(value,bottle_assembly_v1_build_pb.Build.deserializeBinaryFromReader);
      msg.setNew(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bottle.assembly.v1.BuildUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bottle.assembly.v1.BuildUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.assembly.v1.BuildUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOld();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bottle_assembly_v1_build_pb.Build.serializeBinaryToWriter
    );
  }
  f = message.getNew();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bottle_assembly_v1_build_pb.Build.serializeBinaryToWriter
    );
  }
};


/**
 * optional Build old = 1;
 * @return {?proto.bottle.assembly.v1.Build}
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.getOld = function() {
  return /** @type{?proto.bottle.assembly.v1.Build} */ (
    jspb.Message.getWrapperField(this, bottle_assembly_v1_build_pb.Build, 1));
};


/**
 * @param {?proto.bottle.assembly.v1.Build|undefined} value
 * @return {!proto.bottle.assembly.v1.BuildUpdated} returns this
*/
proto.bottle.assembly.v1.BuildUpdated.prototype.setOld = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bottle.assembly.v1.BuildUpdated} returns this
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.clearOld = function() {
  return this.setOld(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.hasOld = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Build new = 2;
 * @return {?proto.bottle.assembly.v1.Build}
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.getNew = function() {
  return /** @type{?proto.bottle.assembly.v1.Build} */ (
    jspb.Message.getWrapperField(this, bottle_assembly_v1_build_pb.Build, 2));
};


/**
 * @param {?proto.bottle.assembly.v1.Build|undefined} value
 * @return {!proto.bottle.assembly.v1.BuildUpdated} returns this
*/
proto.bottle.assembly.v1.BuildUpdated.prototype.setNew = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bottle.assembly.v1.BuildUpdated} returns this
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.clearNew = function() {
  return this.setNew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bottle.assembly.v1.BuildUpdated.prototype.hasNew = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bottle.assembly.v1.BuildPicked.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.toObject = function(opt_includeInstance) {
  return proto.bottle.assembly.v1.BuildPicked.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bottle.assembly.v1.BuildPicked} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.assembly.v1.BuildPicked.toObject = function(includeInstance, msg) {
  var f, obj = {
    build: (f = msg.getBuild()) && bottle_assembly_v1_build_pb.Build.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && bottle_inventory_v1_location_pb.Location.toObject(includeInstance, f),
    partsList: jspb.Message.toObjectList(msg.getPartsList(),
    bottle_inventory_v1_part_pb.Part.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bottle.assembly.v1.BuildPicked}
 */
proto.bottle.assembly.v1.BuildPicked.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bottle.assembly.v1.BuildPicked;
  return proto.bottle.assembly.v1.BuildPicked.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bottle.assembly.v1.BuildPicked} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bottle.assembly.v1.BuildPicked}
 */
proto.bottle.assembly.v1.BuildPicked.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bottle_assembly_v1_build_pb.Build;
      reader.readMessage(value,bottle_assembly_v1_build_pb.Build.deserializeBinaryFromReader);
      msg.setBuild(value);
      break;
    case 2:
      var value = new bottle_inventory_v1_location_pb.Location;
      reader.readMessage(value,bottle_inventory_v1_location_pb.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 3:
      var value = new bottle_inventory_v1_part_pb.Part;
      reader.readMessage(value,bottle_inventory_v1_part_pb.Part.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bottle.assembly.v1.BuildPicked.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bottle.assembly.v1.BuildPicked} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bottle.assembly.v1.BuildPicked.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuild();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bottle_assembly_v1_build_pb.Build.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bottle_inventory_v1_location_pb.Location.serializeBinaryToWriter
    );
  }
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      bottle_inventory_v1_part_pb.Part.serializeBinaryToWriter
    );
  }
};


/**
 * optional Build build = 1;
 * @return {?proto.bottle.assembly.v1.Build}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.getBuild = function() {
  return /** @type{?proto.bottle.assembly.v1.Build} */ (
    jspb.Message.getWrapperField(this, bottle_assembly_v1_build_pb.Build, 1));
};


/**
 * @param {?proto.bottle.assembly.v1.Build|undefined} value
 * @return {!proto.bottle.assembly.v1.BuildPicked} returns this
*/
proto.bottle.assembly.v1.BuildPicked.prototype.setBuild = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bottle.assembly.v1.BuildPicked} returns this
 */
proto.bottle.assembly.v1.BuildPicked.prototype.clearBuild = function() {
  return this.setBuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.hasBuild = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bottle.inventory.v1.Location location = 2;
 * @return {?proto.bottle.inventory.v1.Location}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.getLocation = function() {
  return /** @type{?proto.bottle.inventory.v1.Location} */ (
    jspb.Message.getWrapperField(this, bottle_inventory_v1_location_pb.Location, 2));
};


/**
 * @param {?proto.bottle.inventory.v1.Location|undefined} value
 * @return {!proto.bottle.assembly.v1.BuildPicked} returns this
*/
proto.bottle.assembly.v1.BuildPicked.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bottle.assembly.v1.BuildPicked} returns this
 */
proto.bottle.assembly.v1.BuildPicked.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated bottle.inventory.v1.Part parts = 3;
 * @return {!Array<!proto.bottle.inventory.v1.Part>}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.bottle.inventory.v1.Part>} */ (
    jspb.Message.getRepeatedWrapperField(this, bottle_inventory_v1_part_pb.Part, 3));
};


/**
 * @param {!Array<!proto.bottle.inventory.v1.Part>} value
 * @return {!proto.bottle.assembly.v1.BuildPicked} returns this
*/
proto.bottle.assembly.v1.BuildPicked.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bottle.inventory.v1.Part=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bottle.inventory.v1.Part}
 */
proto.bottle.assembly.v1.BuildPicked.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bottle.inventory.v1.Part, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bottle.assembly.v1.BuildPicked} returns this
 */
proto.bottle.assembly.v1.BuildPicked.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};


goog.object.extend(exports, proto.bottle.assembly.v1);
