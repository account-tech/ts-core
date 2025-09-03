import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {VecMap} from "../../_dependencies/source/0x2/vec-map/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== UpgradeCapKey =============================== */

export function isUpgradeCapKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::UpgradeCapKey`; }

export interface UpgradeCapKeyFields { pos0: ToField<String> }

export type UpgradeCapKeyReified = Reified< UpgradeCapKey, UpgradeCapKeyFields >;

export class UpgradeCapKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::UpgradeCapKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpgradeCapKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::UpgradeCapKey`; readonly $typeArgs: []; readonly $isPhantom = UpgradeCapKey.$isPhantom;

 readonly pos0: ToField<String>

 private constructor(typeArgs: [], fields: UpgradeCapKeyFields, ) { this.$fullTypeName = composeSuiType( UpgradeCapKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::UpgradeCapKey`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0; }

 static reified( ): UpgradeCapKeyReified { return { typeName: UpgradeCapKey.$typeName, fullTypeName: composeSuiType( UpgradeCapKey.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::UpgradeCapKey`, typeArgs: [ ] as [], isPhantom: UpgradeCapKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpgradeCapKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeCapKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpgradeCapKey.fromBcs( data, ), bcs: UpgradeCapKey.bcs, fromJSONField: (field: any) => UpgradeCapKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpgradeCapKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpgradeCapKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpgradeCapKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpgradeCapKey.fetch( client, id, ), new: ( fields: UpgradeCapKeyFields, ) => { return new UpgradeCapKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpgradeCapKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpgradeCapKey>> { return phantom(UpgradeCapKey.reified( )); } static get p() { return UpgradeCapKey.phantom() }

 static get bcs() { return bcs.struct("UpgradeCapKey", {

 pos0: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): UpgradeCapKey { return UpgradeCapKey.reified( ).new( { pos0: decodeFromFields(String.reified(), fields.pos0) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpgradeCapKey { if (!isUpgradeCapKey(item.type)) { throw new Error("not a UpgradeCapKey type");

 }

 return UpgradeCapKey.reified( ).new( { pos0: decodeFromFieldsWithTypes(String.reified(), item.fields.pos0) } ) }

 static fromBcs( data: Uint8Array ): UpgradeCapKey { return UpgradeCapKey.fromFields( UpgradeCapKey.bcs.parse(data) ) }

 toJSONField() { return {

 pos0: this.pos0,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpgradeCapKey { return UpgradeCapKey.reified( ).new( { pos0: decodeFromJSONField(String.reified(), field.pos0) } ) }

 static fromJSON( json: Record<string, any> ): UpgradeCapKey { if (json.$typeName !== UpgradeCapKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpgradeCapKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpgradeCapKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpgradeCapKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpgradeCapKey object`); } return UpgradeCapKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpgradeCapKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpgradeCapKey(data.bcs.type)) { throw new Error(`object at is not a UpgradeCapKey object`); }

 return UpgradeCapKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpgradeCapKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpgradeCapKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpgradeCapKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeCapKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpgradeCapKey object`); }

 return UpgradeCapKey.fromSuiObjectData( res.data ); }

 }

/* ============================== UpgradeRulesKey =============================== */

export function isUpgradeRulesKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::UpgradeRulesKey`; }

export interface UpgradeRulesKeyFields { pos0: ToField<String> }

export type UpgradeRulesKeyReified = Reified< UpgradeRulesKey, UpgradeRulesKeyFields >;

export class UpgradeRulesKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::UpgradeRulesKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpgradeRulesKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::UpgradeRulesKey`; readonly $typeArgs: []; readonly $isPhantom = UpgradeRulesKey.$isPhantom;

 readonly pos0: ToField<String>

 private constructor(typeArgs: [], fields: UpgradeRulesKeyFields, ) { this.$fullTypeName = composeSuiType( UpgradeRulesKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::UpgradeRulesKey`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0; }

 static reified( ): UpgradeRulesKeyReified { return { typeName: UpgradeRulesKey.$typeName, fullTypeName: composeSuiType( UpgradeRulesKey.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::UpgradeRulesKey`, typeArgs: [ ] as [], isPhantom: UpgradeRulesKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpgradeRulesKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeRulesKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpgradeRulesKey.fromBcs( data, ), bcs: UpgradeRulesKey.bcs, fromJSONField: (field: any) => UpgradeRulesKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpgradeRulesKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpgradeRulesKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpgradeRulesKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpgradeRulesKey.fetch( client, id, ), new: ( fields: UpgradeRulesKeyFields, ) => { return new UpgradeRulesKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpgradeRulesKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpgradeRulesKey>> { return phantom(UpgradeRulesKey.reified( )); } static get p() { return UpgradeRulesKey.phantom() }

 static get bcs() { return bcs.struct("UpgradeRulesKey", {

 pos0: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): UpgradeRulesKey { return UpgradeRulesKey.reified( ).new( { pos0: decodeFromFields(String.reified(), fields.pos0) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpgradeRulesKey { if (!isUpgradeRulesKey(item.type)) { throw new Error("not a UpgradeRulesKey type");

 }

 return UpgradeRulesKey.reified( ).new( { pos0: decodeFromFieldsWithTypes(String.reified(), item.fields.pos0) } ) }

 static fromBcs( data: Uint8Array ): UpgradeRulesKey { return UpgradeRulesKey.fromFields( UpgradeRulesKey.bcs.parse(data) ) }

 toJSONField() { return {

 pos0: this.pos0,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpgradeRulesKey { return UpgradeRulesKey.reified( ).new( { pos0: decodeFromJSONField(String.reified(), field.pos0) } ) }

 static fromJSON( json: Record<string, any> ): UpgradeRulesKey { if (json.$typeName !== UpgradeRulesKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpgradeRulesKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpgradeRulesKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpgradeRulesKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpgradeRulesKey object`); } return UpgradeRulesKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpgradeRulesKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpgradeRulesKey(data.bcs.type)) { throw new Error(`object at is not a UpgradeRulesKey object`); }

 return UpgradeRulesKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpgradeRulesKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpgradeRulesKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpgradeRulesKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeRulesKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpgradeRulesKey object`); }

 return UpgradeRulesKey.fromSuiObjectData( res.data ); }

 }

/* ============================== UpgradeIndexKey =============================== */

export function isUpgradeIndexKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::UpgradeIndexKey`; }

export interface UpgradeIndexKeyFields { dummyField: ToField<"bool"> }

export type UpgradeIndexKeyReified = Reified< UpgradeIndexKey, UpgradeIndexKeyFields >;

export class UpgradeIndexKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::UpgradeIndexKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpgradeIndexKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::UpgradeIndexKey`; readonly $typeArgs: []; readonly $isPhantom = UpgradeIndexKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: UpgradeIndexKeyFields, ) { this.$fullTypeName = composeSuiType( UpgradeIndexKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::UpgradeIndexKey`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): UpgradeIndexKeyReified { return { typeName: UpgradeIndexKey.$typeName, fullTypeName: composeSuiType( UpgradeIndexKey.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::UpgradeIndexKey`, typeArgs: [ ] as [], isPhantom: UpgradeIndexKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpgradeIndexKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeIndexKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpgradeIndexKey.fromBcs( data, ), bcs: UpgradeIndexKey.bcs, fromJSONField: (field: any) => UpgradeIndexKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpgradeIndexKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpgradeIndexKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpgradeIndexKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpgradeIndexKey.fetch( client, id, ), new: ( fields: UpgradeIndexKeyFields, ) => { return new UpgradeIndexKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpgradeIndexKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpgradeIndexKey>> { return phantom(UpgradeIndexKey.reified( )); } static get p() { return UpgradeIndexKey.phantom() }

 static get bcs() { return bcs.struct("UpgradeIndexKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): UpgradeIndexKey { return UpgradeIndexKey.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpgradeIndexKey { if (!isUpgradeIndexKey(item.type)) { throw new Error("not a UpgradeIndexKey type");

 }

 return UpgradeIndexKey.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): UpgradeIndexKey { return UpgradeIndexKey.fromFields( UpgradeIndexKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpgradeIndexKey { return UpgradeIndexKey.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): UpgradeIndexKey { if (json.$typeName !== UpgradeIndexKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpgradeIndexKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpgradeIndexKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpgradeIndexKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpgradeIndexKey object`); } return UpgradeIndexKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpgradeIndexKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpgradeIndexKey(data.bcs.type)) { throw new Error(`object at is not a UpgradeIndexKey object`); }

 return UpgradeIndexKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpgradeIndexKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpgradeIndexKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpgradeIndexKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeIndexKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpgradeIndexKey object`); }

 return UpgradeIndexKey.fromSuiObjectData( res.data ); }

 }

/* ============================== UpgradeRules =============================== */

export function isUpgradeRules(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::UpgradeRules`; }

export interface UpgradeRulesFields { delayMs: ToField<"u64"> }

export type UpgradeRulesReified = Reified< UpgradeRules, UpgradeRulesFields >;

export class UpgradeRules implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::UpgradeRules`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpgradeRules.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::UpgradeRules`; readonly $typeArgs: []; readonly $isPhantom = UpgradeRules.$isPhantom;

 readonly delayMs: ToField<"u64">

 private constructor(typeArgs: [], fields: UpgradeRulesFields, ) { this.$fullTypeName = composeSuiType( UpgradeRules.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::UpgradeRules`; this.$typeArgs = typeArgs;

 this.delayMs = fields.delayMs; }

 static reified( ): UpgradeRulesReified { return { typeName: UpgradeRules.$typeName, fullTypeName: composeSuiType( UpgradeRules.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::UpgradeRules`, typeArgs: [ ] as [], isPhantom: UpgradeRules.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpgradeRules.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeRules.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpgradeRules.fromBcs( data, ), bcs: UpgradeRules.bcs, fromJSONField: (field: any) => UpgradeRules.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpgradeRules.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpgradeRules.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpgradeRules.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpgradeRules.fetch( client, id, ), new: ( fields: UpgradeRulesFields, ) => { return new UpgradeRules( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpgradeRules.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpgradeRules>> { return phantom(UpgradeRules.reified( )); } static get p() { return UpgradeRules.phantom() }

 static get bcs() { return bcs.struct("UpgradeRules", {

 delay_ms: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UpgradeRules { return UpgradeRules.reified( ).new( { delayMs: decodeFromFields("u64", fields.delay_ms) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpgradeRules { if (!isUpgradeRules(item.type)) { throw new Error("not a UpgradeRules type");

 }

 return UpgradeRules.reified( ).new( { delayMs: decodeFromFieldsWithTypes("u64", item.fields.delay_ms) } ) }

 static fromBcs( data: Uint8Array ): UpgradeRules { return UpgradeRules.fromFields( UpgradeRules.bcs.parse(data) ) }

 toJSONField() { return {

 delayMs: this.delayMs.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpgradeRules { return UpgradeRules.reified( ).new( { delayMs: decodeFromJSONField("u64", field.delayMs) } ) }

 static fromJSON( json: Record<string, any> ): UpgradeRules { if (json.$typeName !== UpgradeRules.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpgradeRules.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpgradeRules { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpgradeRules(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpgradeRules object`); } return UpgradeRules.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpgradeRules { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpgradeRules(data.bcs.type)) { throw new Error(`object at is not a UpgradeRules object`); }

 return UpgradeRules.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpgradeRules.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpgradeRules> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpgradeRules object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeRules(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpgradeRules object`); }

 return UpgradeRules.fromSuiObjectData( res.data ); }

 }

/* ============================== UpgradeIndex =============================== */

export function isUpgradeIndex(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::UpgradeIndex`; }

export interface UpgradeIndexFields { packagesInfo: ToField<VecMap<String, "address">> }

export type UpgradeIndexReified = Reified< UpgradeIndex, UpgradeIndexFields >;

export class UpgradeIndex implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::UpgradeIndex`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpgradeIndex.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::UpgradeIndex`; readonly $typeArgs: []; readonly $isPhantom = UpgradeIndex.$isPhantom;

 readonly packagesInfo: ToField<VecMap<String, "address">>

 private constructor(typeArgs: [], fields: UpgradeIndexFields, ) { this.$fullTypeName = composeSuiType( UpgradeIndex.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::UpgradeIndex`; this.$typeArgs = typeArgs;

 this.packagesInfo = fields.packagesInfo; }

 static reified( ): UpgradeIndexReified { return { typeName: UpgradeIndex.$typeName, fullTypeName: composeSuiType( UpgradeIndex.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::UpgradeIndex`, typeArgs: [ ] as [], isPhantom: UpgradeIndex.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpgradeIndex.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeIndex.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpgradeIndex.fromBcs( data, ), bcs: UpgradeIndex.bcs, fromJSONField: (field: any) => UpgradeIndex.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpgradeIndex.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpgradeIndex.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpgradeIndex.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpgradeIndex.fetch( client, id, ), new: ( fields: UpgradeIndexFields, ) => { return new UpgradeIndex( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpgradeIndex.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpgradeIndex>> { return phantom(UpgradeIndex.reified( )); } static get p() { return UpgradeIndex.phantom() }

 static get bcs() { return bcs.struct("UpgradeIndex", {

 packages_info: VecMap.bcs(String.bcs, bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields( fields: Record<string, any> ): UpgradeIndex { return UpgradeIndex.reified( ).new( { packagesInfo: decodeFromFields(VecMap.reified(String.reified(), "address"), fields.packages_info) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpgradeIndex { if (!isUpgradeIndex(item.type)) { throw new Error("not a UpgradeIndex type");

 }

 return UpgradeIndex.reified( ).new( { packagesInfo: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), "address"), item.fields.packages_info) } ) }

 static fromBcs( data: Uint8Array ): UpgradeIndex { return UpgradeIndex.fromFields( UpgradeIndex.bcs.parse(data) ) }

 toJSONField() { return {

 packagesInfo: this.packagesInfo.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpgradeIndex { return UpgradeIndex.reified( ).new( { packagesInfo: decodeFromJSONField(VecMap.reified(String.reified(), "address"), field.packagesInfo) } ) }

 static fromJSON( json: Record<string, any> ): UpgradeIndex { if (json.$typeName !== UpgradeIndex.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpgradeIndex.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpgradeIndex { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpgradeIndex(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpgradeIndex object`); } return UpgradeIndex.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpgradeIndex { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpgradeIndex(data.bcs.type)) { throw new Error(`object at is not a UpgradeIndex object`); }

 return UpgradeIndex.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpgradeIndex.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpgradeIndex> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpgradeIndex object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeIndex(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpgradeIndex object`); }

 return UpgradeIndex.fromSuiObjectData( res.data ); }

 }

/* ============================== UpgradeAction =============================== */

export function isUpgradeAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::UpgradeAction`; }

export interface UpgradeActionFields { name: ToField<String>; digest: ToField<Vector<"u8">> }

export type UpgradeActionReified = Reified< UpgradeAction, UpgradeActionFields >;

export class UpgradeAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::UpgradeAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpgradeAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::UpgradeAction`; readonly $typeArgs: []; readonly $isPhantom = UpgradeAction.$isPhantom;

 readonly name: ToField<String>; readonly digest: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: UpgradeActionFields, ) { this.$fullTypeName = composeSuiType( UpgradeAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::UpgradeAction`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.digest = fields.digest; }

 static reified( ): UpgradeActionReified { return { typeName: UpgradeAction.$typeName, fullTypeName: composeSuiType( UpgradeAction.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::UpgradeAction`, typeArgs: [ ] as [], isPhantom: UpgradeAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpgradeAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradeAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpgradeAction.fromBcs( data, ), bcs: UpgradeAction.bcs, fromJSONField: (field: any) => UpgradeAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpgradeAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpgradeAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpgradeAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpgradeAction.fetch( client, id, ), new: ( fields: UpgradeActionFields, ) => { return new UpgradeAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpgradeAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpgradeAction>> { return phantom(UpgradeAction.reified( )); } static get p() { return UpgradeAction.phantom() }

 static get bcs() { return bcs.struct("UpgradeAction", {

 name: String.bcs, digest: bcs.vector(bcs.u8())

}) };

 static fromFields( fields: Record<string, any> ): UpgradeAction { return UpgradeAction.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), digest: decodeFromFields(reified.vector("u8"), fields.digest) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpgradeAction { if (!isUpgradeAction(item.type)) { throw new Error("not a UpgradeAction type");

 }

 return UpgradeAction.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), digest: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.digest) } ) }

 static fromBcs( data: Uint8Array ): UpgradeAction { return UpgradeAction.fromFields( UpgradeAction.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,digest: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.digest),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpgradeAction { return UpgradeAction.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), digest: decodeFromJSONField(reified.vector("u8"), field.digest) } ) }

 static fromJSON( json: Record<string, any> ): UpgradeAction { if (json.$typeName !== UpgradeAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpgradeAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpgradeAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpgradeAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpgradeAction object`); } return UpgradeAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpgradeAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpgradeAction(data.bcs.type)) { throw new Error(`object at is not a UpgradeAction object`); }

 return UpgradeAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpgradeAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpgradeAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpgradeAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradeAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpgradeAction object`); }

 return UpgradeAction.fromSuiObjectData( res.data ); }

 }

/* ============================== CommitAction =============================== */

export function isCommitAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::CommitAction`; }

export interface CommitActionFields { name: ToField<String> }

export type CommitActionReified = Reified< CommitAction, CommitActionFields >;

export class CommitAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::CommitAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = CommitAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::CommitAction`; readonly $typeArgs: []; readonly $isPhantom = CommitAction.$isPhantom;

 readonly name: ToField<String>

 private constructor(typeArgs: [], fields: CommitActionFields, ) { this.$fullTypeName = composeSuiType( CommitAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::CommitAction`; this.$typeArgs = typeArgs;

 this.name = fields.name; }

 static reified( ): CommitActionReified { return { typeName: CommitAction.$typeName, fullTypeName: composeSuiType( CommitAction.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::CommitAction`, typeArgs: [ ] as [], isPhantom: CommitAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => CommitAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CommitAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => CommitAction.fromBcs( data, ), bcs: CommitAction.bcs, fromJSONField: (field: any) => CommitAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => CommitAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => CommitAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => CommitAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => CommitAction.fetch( client, id, ), new: ( fields: CommitActionFields, ) => { return new CommitAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return CommitAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<CommitAction>> { return phantom(CommitAction.reified( )); } static get p() { return CommitAction.phantom() }

 static get bcs() { return bcs.struct("CommitAction", {

 name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): CommitAction { return CommitAction.reified( ).new( { name: decodeFromFields(String.reified(), fields.name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): CommitAction { if (!isCommitAction(item.type)) { throw new Error("not a CommitAction type");

 }

 return CommitAction.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name) } ) }

 static fromBcs( data: Uint8Array ): CommitAction { return CommitAction.fromFields( CommitAction.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): CommitAction { return CommitAction.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name) } ) }

 static fromJSON( json: Record<string, any> ): CommitAction { if (json.$typeName !== CommitAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return CommitAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): CommitAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCommitAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CommitAction object`); } return CommitAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): CommitAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCommitAction(data.bcs.type)) { throw new Error(`object at is not a CommitAction object`); }

 return CommitAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CommitAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<CommitAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CommitAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCommitAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CommitAction object`); }

 return CommitAction.fromSuiObjectData( res.data ); }

 }

/* ============================== RestrictAction =============================== */

export function isRestrictAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade::RestrictAction`; }

export interface RestrictActionFields { name: ToField<String>; policy: ToField<"u8"> }

export type RestrictActionReified = Reified< RestrictAction, RestrictActionFields >;

export class RestrictAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade::RestrictAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RestrictAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade::RestrictAction`; readonly $typeArgs: []; readonly $isPhantom = RestrictAction.$isPhantom;

 readonly name: ToField<String>; readonly policy: ToField<"u8">

 private constructor(typeArgs: [], fields: RestrictActionFields, ) { this.$fullTypeName = composeSuiType( RestrictAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade::RestrictAction`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.policy = fields.policy; }

 static reified( ): RestrictActionReified { return { typeName: RestrictAction.$typeName, fullTypeName: composeSuiType( RestrictAction.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade::RestrictAction`, typeArgs: [ ] as [], isPhantom: RestrictAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RestrictAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RestrictAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RestrictAction.fromBcs( data, ), bcs: RestrictAction.bcs, fromJSONField: (field: any) => RestrictAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RestrictAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RestrictAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RestrictAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RestrictAction.fetch( client, id, ), new: ( fields: RestrictActionFields, ) => { return new RestrictAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RestrictAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RestrictAction>> { return phantom(RestrictAction.reified( )); } static get p() { return RestrictAction.phantom() }

 static get bcs() { return bcs.struct("RestrictAction", {

 name: String.bcs, policy: bcs.u8()

}) };

 static fromFields( fields: Record<string, any> ): RestrictAction { return RestrictAction.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), policy: decodeFromFields("u8", fields.policy) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RestrictAction { if (!isRestrictAction(item.type)) { throw new Error("not a RestrictAction type");

 }

 return RestrictAction.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), policy: decodeFromFieldsWithTypes("u8", item.fields.policy) } ) }

 static fromBcs( data: Uint8Array ): RestrictAction { return RestrictAction.fromFields( RestrictAction.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,policy: this.policy,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RestrictAction { return RestrictAction.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), policy: decodeFromJSONField("u8", field.policy) } ) }

 static fromJSON( json: Record<string, any> ): RestrictAction { if (json.$typeName !== RestrictAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RestrictAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RestrictAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRestrictAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RestrictAction object`); } return RestrictAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RestrictAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRestrictAction(data.bcs.type)) { throw new Error(`object at is not a RestrictAction object`); }

 return RestrictAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RestrictAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RestrictAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RestrictAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRestrictAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RestrictAction object`); }

 return RestrictAction.fromSuiObjectData( res.data ); }

 }
