/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Part } from "../../../bottle/inventory/v1/part";
import { Location } from "../../../bottle/inventory/v1/location";

export const protobufPackage = "bottle.inventory.v1";

export interface Movement {
  id: string;
  part: Part | undefined;
  fromLocation: Location | undefined;
  toLocation: Location | undefined;
  createdAt: string;
}

const baseMovement: object = { id: "", createdAt: "" };

export const Movement = {
  encode(message: Movement, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.part !== undefined) {
      Part.encode(message.part, writer.uint32(18).fork()).ldelim();
    }
    if (message.fromLocation !== undefined) {
      Location.encode(message.fromLocation, writer.uint32(26).fork()).ldelim();
    }
    if (message.toLocation !== undefined) {
      Location.encode(message.toLocation, writer.uint32(34).fork()).ldelim();
    }
    if (message.createdAt !== "") {
      writer.uint32(42).string(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Movement {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMovement } as Movement;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.part = Part.decode(reader, reader.uint32());
          break;
        case 3:
          message.fromLocation = Location.decode(reader, reader.uint32());
          break;
        case 4:
          message.toLocation = Location.decode(reader, reader.uint32());
          break;
        case 5:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Movement {
    const message = { ...baseMovement } as Movement;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.part !== undefined && object.part !== null) {
      message.part = Part.fromJSON(object.part);
    } else {
      message.part = undefined;
    }
    if (object.fromLocation !== undefined && object.fromLocation !== null) {
      message.fromLocation = Location.fromJSON(object.fromLocation);
    } else {
      message.fromLocation = undefined;
    }
    if (object.toLocation !== undefined && object.toLocation !== null) {
      message.toLocation = Location.fromJSON(object.toLocation);
    } else {
      message.toLocation = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = String(object.createdAt);
    } else {
      message.createdAt = "";
    }
    return message;
  },

  toJSON(message: Movement): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.part !== undefined &&
      (obj.part = message.part ? Part.toJSON(message.part) : undefined);
    message.fromLocation !== undefined &&
      (obj.fromLocation = message.fromLocation
        ? Location.toJSON(message.fromLocation)
        : undefined);
    message.toLocation !== undefined &&
      (obj.toLocation = message.toLocation
        ? Location.toJSON(message.toLocation)
        : undefined);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Movement>): Movement {
    const message = { ...baseMovement } as Movement;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.part !== undefined && object.part !== null) {
      message.part = Part.fromPartial(object.part);
    } else {
      message.part = undefined;
    }
    if (object.fromLocation !== undefined && object.fromLocation !== null) {
      message.fromLocation = Location.fromPartial(object.fromLocation);
    } else {
      message.fromLocation = undefined;
    }
    if (object.toLocation !== undefined && object.toLocation !== null) {
      message.toLocation = Location.fromPartial(object.toLocation);
    } else {
      message.toLocation = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = "";
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
