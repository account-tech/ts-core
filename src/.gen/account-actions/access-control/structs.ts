import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== CapKey =============================== */

export function isCapKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::access_control::CapKey` + '<'); }

export interface CapKeyFields<Cap extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type CapKeyReified<Cap extends PhantomTypeArgument> = Reified< CapKey<Cap>, CapKeyFields<Cap> >;

export class CapKey<Cap extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::access_control::CapKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = CapKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::access_control::CapKey<${PhantomToTypeStr<Cap>}>`; readonly $typeArgs: [PhantomToTypeStr<Cap>]; readonly $isPhantom = CapKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<Cap>], fields: CapKeyFields<Cap>, ) { this.$fullTypeName = composeSuiType( CapKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::access_control::CapKey<${PhantomToTypeStr<Cap>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<Cap extends PhantomReified<PhantomTypeArgument>>( Cap: Cap ): CapKeyReified<ToPhantomTypeArgument<Cap>> { return { typeName: CapKey.$typeName, fullTypeName: composeSuiType( CapKey.$typeName, ...[extractType(Cap)] ) as `${typeof PKG_V1}::access_control::CapKey<${PhantomToTypeStr<ToPhantomTypeArgument<Cap>>}>`, typeArgs: [ extractType(Cap) ] as [PhantomToTypeStr<ToPhantomTypeArgument<Cap>>], isPhantom: CapKey.$isPhantom, reifiedTypeArgs: [Cap], fromFields: (fields: Record<string, any>) => CapKey.fromFields( Cap, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CapKey.fromFieldsWithTypes( Cap, item, ), fromBcs: (data: Uint8Array) => CapKey.fromBcs( Cap, data, ), bcs: CapKey.bcs, fromJSONField: (field: any) => CapKey.fromJSONField( Cap, field, ), fromJSON: (json: Record<string, any>) => CapKey.fromJSON( Cap, json, ), fromSuiParsedData: (content: SuiParsedData) => CapKey.fromSuiParsedData( Cap, content, ), fromSuiObjectData: (content: SuiObjectData) => CapKey.fromSuiObjectData( Cap, content, ), fetch: async (client: SuiClient, id: string) => CapKey.fetch( client, Cap, id, ), new: ( fields: CapKeyFields<ToPhantomTypeArgument<Cap>>, ) => { return new CapKey( [extractType(Cap)], fields ) }, kind: "StructClassReified", } }

 static get r() { return CapKey.reified }

 static phantom<Cap extends PhantomReified<PhantomTypeArgument>>( Cap: Cap ): PhantomReified<ToTypeStr<CapKey<ToPhantomTypeArgument<Cap>>>> { return phantom(CapKey.reified( Cap )); } static get p() { return CapKey.phantom }

 static get bcs() { return bcs.struct("CapKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, fields: Record<string, any> ): CapKey<ToPhantomTypeArgument<Cap>> { return CapKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, item: FieldsWithTypes ): CapKey<ToPhantomTypeArgument<Cap>> { if (!isCapKey(item.type)) { throw new Error("not a CapKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return CapKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, data: Uint8Array ): CapKey<ToPhantomTypeArgument<Cap>> { return CapKey.fromFields( typeArg, CapKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, field: any ): CapKey<ToPhantomTypeArgument<Cap>> { return CapKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, json: Record<string, any> ): CapKey<ToPhantomTypeArgument<Cap>> { if (json.$typeName !== CapKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(CapKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return CapKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, content: SuiParsedData ): CapKey<ToPhantomTypeArgument<Cap>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCapKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CapKey object`); } return CapKey.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, data: SuiObjectData ): CapKey<ToPhantomTypeArgument<Cap>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCapKey(data.bcs.type)) { throw new Error(`object at is not a CapKey object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return CapKey.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CapKey.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<Cap extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: Cap, id: string ): Promise<CapKey<ToPhantomTypeArgument<Cap>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CapKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCapKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CapKey object`); }

 return CapKey.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== BorrowAction =============================== */

export function isBorrowAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::access_control::BorrowAction` + '<'); }

export interface BorrowActionFields<Cap extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type BorrowActionReified<Cap extends PhantomTypeArgument> = Reified< BorrowAction<Cap>, BorrowActionFields<Cap> >;

export class BorrowAction<Cap extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::access_control::BorrowAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BorrowAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::access_control::BorrowAction<${PhantomToTypeStr<Cap>}>`; readonly $typeArgs: [PhantomToTypeStr<Cap>]; readonly $isPhantom = BorrowAction.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<Cap>], fields: BorrowActionFields<Cap>, ) { this.$fullTypeName = composeSuiType( BorrowAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::access_control::BorrowAction<${PhantomToTypeStr<Cap>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<Cap extends PhantomReified<PhantomTypeArgument>>( Cap: Cap ): BorrowActionReified<ToPhantomTypeArgument<Cap>> { return { typeName: BorrowAction.$typeName, fullTypeName: composeSuiType( BorrowAction.$typeName, ...[extractType(Cap)] ) as `${typeof PKG_V1}::access_control::BorrowAction<${PhantomToTypeStr<ToPhantomTypeArgument<Cap>>}>`, typeArgs: [ extractType(Cap) ] as [PhantomToTypeStr<ToPhantomTypeArgument<Cap>>], isPhantom: BorrowAction.$isPhantom, reifiedTypeArgs: [Cap], fromFields: (fields: Record<string, any>) => BorrowAction.fromFields( Cap, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowAction.fromFieldsWithTypes( Cap, item, ), fromBcs: (data: Uint8Array) => BorrowAction.fromBcs( Cap, data, ), bcs: BorrowAction.bcs, fromJSONField: (field: any) => BorrowAction.fromJSONField( Cap, field, ), fromJSON: (json: Record<string, any>) => BorrowAction.fromJSON( Cap, json, ), fromSuiParsedData: (content: SuiParsedData) => BorrowAction.fromSuiParsedData( Cap, content, ), fromSuiObjectData: (content: SuiObjectData) => BorrowAction.fromSuiObjectData( Cap, content, ), fetch: async (client: SuiClient, id: string) => BorrowAction.fetch( client, Cap, id, ), new: ( fields: BorrowActionFields<ToPhantomTypeArgument<Cap>>, ) => { return new BorrowAction( [extractType(Cap)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BorrowAction.reified }

 static phantom<Cap extends PhantomReified<PhantomTypeArgument>>( Cap: Cap ): PhantomReified<ToTypeStr<BorrowAction<ToPhantomTypeArgument<Cap>>>> { return phantom(BorrowAction.reified( Cap )); } static get p() { return BorrowAction.phantom }

 static get bcs() { return bcs.struct("BorrowAction", {

 dummy_field: bcs.bool()

}) };

 static fromFields<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, fields: Record<string, any> ): BorrowAction<ToPhantomTypeArgument<Cap>> { return BorrowAction.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, item: FieldsWithTypes ): BorrowAction<ToPhantomTypeArgument<Cap>> { if (!isBorrowAction(item.type)) { throw new Error("not a BorrowAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BorrowAction.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, data: Uint8Array ): BorrowAction<ToPhantomTypeArgument<Cap>> { return BorrowAction.fromFields( typeArg, BorrowAction.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, field: any ): BorrowAction<ToPhantomTypeArgument<Cap>> { return BorrowAction.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, json: Record<string, any> ): BorrowAction<ToPhantomTypeArgument<Cap>> { if (json.$typeName !== BorrowAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BorrowAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BorrowAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, content: SuiParsedData ): BorrowAction<ToPhantomTypeArgument<Cap>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBorrowAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BorrowAction object`); } return BorrowAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, data: SuiObjectData ): BorrowAction<ToPhantomTypeArgument<Cap>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBorrowAction(data.bcs.type)) { throw new Error(`object at is not a BorrowAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BorrowAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BorrowAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<Cap extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: Cap, id: string ): Promise<BorrowAction<ToPhantomTypeArgument<Cap>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BorrowAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BorrowAction object`); }

 return BorrowAction.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== ReturnAction =============================== */

export function isReturnAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::access_control::ReturnAction` + '<'); }

export interface ReturnActionFields<Cap extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type ReturnActionReified<Cap extends PhantomTypeArgument> = Reified< ReturnAction<Cap>, ReturnActionFields<Cap> >;

export class ReturnAction<Cap extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::access_control::ReturnAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = ReturnAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::access_control::ReturnAction<${PhantomToTypeStr<Cap>}>`; readonly $typeArgs: [PhantomToTypeStr<Cap>]; readonly $isPhantom = ReturnAction.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<Cap>], fields: ReturnActionFields<Cap>, ) { this.$fullTypeName = composeSuiType( ReturnAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::access_control::ReturnAction<${PhantomToTypeStr<Cap>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<Cap extends PhantomReified<PhantomTypeArgument>>( Cap: Cap ): ReturnActionReified<ToPhantomTypeArgument<Cap>> { return { typeName: ReturnAction.$typeName, fullTypeName: composeSuiType( ReturnAction.$typeName, ...[extractType(Cap)] ) as `${typeof PKG_V1}::access_control::ReturnAction<${PhantomToTypeStr<ToPhantomTypeArgument<Cap>>}>`, typeArgs: [ extractType(Cap) ] as [PhantomToTypeStr<ToPhantomTypeArgument<Cap>>], isPhantom: ReturnAction.$isPhantom, reifiedTypeArgs: [Cap], fromFields: (fields: Record<string, any>) => ReturnAction.fromFields( Cap, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ReturnAction.fromFieldsWithTypes( Cap, item, ), fromBcs: (data: Uint8Array) => ReturnAction.fromBcs( Cap, data, ), bcs: ReturnAction.bcs, fromJSONField: (field: any) => ReturnAction.fromJSONField( Cap, field, ), fromJSON: (json: Record<string, any>) => ReturnAction.fromJSON( Cap, json, ), fromSuiParsedData: (content: SuiParsedData) => ReturnAction.fromSuiParsedData( Cap, content, ), fromSuiObjectData: (content: SuiObjectData) => ReturnAction.fromSuiObjectData( Cap, content, ), fetch: async (client: SuiClient, id: string) => ReturnAction.fetch( client, Cap, id, ), new: ( fields: ReturnActionFields<ToPhantomTypeArgument<Cap>>, ) => { return new ReturnAction( [extractType(Cap)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ReturnAction.reified }

 static phantom<Cap extends PhantomReified<PhantomTypeArgument>>( Cap: Cap ): PhantomReified<ToTypeStr<ReturnAction<ToPhantomTypeArgument<Cap>>>> { return phantom(ReturnAction.reified( Cap )); } static get p() { return ReturnAction.phantom }

 static get bcs() { return bcs.struct("ReturnAction", {

 dummy_field: bcs.bool()

}) };

 static fromFields<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, fields: Record<string, any> ): ReturnAction<ToPhantomTypeArgument<Cap>> { return ReturnAction.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, item: FieldsWithTypes ): ReturnAction<ToPhantomTypeArgument<Cap>> { if (!isReturnAction(item.type)) { throw new Error("not a ReturnAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ReturnAction.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, data: Uint8Array ): ReturnAction<ToPhantomTypeArgument<Cap>> { return ReturnAction.fromFields( typeArg, ReturnAction.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, field: any ): ReturnAction<ToPhantomTypeArgument<Cap>> { return ReturnAction.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, json: Record<string, any> ): ReturnAction<ToPhantomTypeArgument<Cap>> { if (json.$typeName !== ReturnAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ReturnAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ReturnAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, content: SuiParsedData ): ReturnAction<ToPhantomTypeArgument<Cap>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isReturnAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ReturnAction object`); } return ReturnAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<Cap extends PhantomReified<PhantomTypeArgument>>( typeArg: Cap, data: SuiObjectData ): ReturnAction<ToPhantomTypeArgument<Cap>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isReturnAction(data.bcs.type)) { throw new Error(`object at is not a ReturnAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return ReturnAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ReturnAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<Cap extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: Cap, id: string ): Promise<ReturnAction<ToPhantomTypeArgument<Cap>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ReturnAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isReturnAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ReturnAction object`); }

 return ReturnAction.fromSuiObjectData( typeArg, res.data ); }

 }
