import * as reified from "../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {Dep} from "../deps/structs";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== ConfigDepsIntent =============================== */

export function isConfigDepsIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::ConfigDepsIntent`; }

export interface ConfigDepsIntentFields { dummyField: ToField<"bool"> }

export type ConfigDepsIntentReified = Reified< ConfigDepsIntent, ConfigDepsIntentFields >;

export class ConfigDepsIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::ConfigDepsIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ConfigDepsIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::ConfigDepsIntent`; readonly $typeArgs: []; readonly $isPhantom = ConfigDepsIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: ConfigDepsIntentFields, ) { this.$fullTypeName = composeSuiType( ConfigDepsIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::ConfigDepsIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): ConfigDepsIntentReified { return { typeName: ConfigDepsIntent.$typeName, fullTypeName: composeSuiType( ConfigDepsIntent.$typeName, ...[] ) as `${typeof PKG_V1}::config::ConfigDepsIntent`, typeArgs: [ ] as [], isPhantom: ConfigDepsIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ConfigDepsIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ConfigDepsIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ConfigDepsIntent.fromBcs( data, ), bcs: ConfigDepsIntent.bcs, fromJSONField: (field: any) => ConfigDepsIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ConfigDepsIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ConfigDepsIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ConfigDepsIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ConfigDepsIntent.fetch( client, id, ), new: ( fields: ConfigDepsIntentFields, ) => { return new ConfigDepsIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ConfigDepsIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ConfigDepsIntent>> { return phantom(ConfigDepsIntent.reified( )); } static get p() { return ConfigDepsIntent.phantom() }

 static get bcs() { return bcs.struct("ConfigDepsIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ConfigDepsIntent { return ConfigDepsIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ConfigDepsIntent { if (!isConfigDepsIntent(item.type)) { throw new Error("not a ConfigDepsIntent type");

 }

 return ConfigDepsIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): ConfigDepsIntent { return ConfigDepsIntent.fromFields( ConfigDepsIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ConfigDepsIntent { return ConfigDepsIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): ConfigDepsIntent { if (json.$typeName !== ConfigDepsIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ConfigDepsIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ConfigDepsIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfigDepsIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ConfigDepsIntent object`); } return ConfigDepsIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ConfigDepsIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isConfigDepsIntent(data.bcs.type)) { throw new Error(`object at is not a ConfigDepsIntent object`); }

 return ConfigDepsIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ConfigDepsIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ConfigDepsIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ConfigDepsIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfigDepsIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ConfigDepsIntent object`); }

 return ConfigDepsIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== ToggleUnverifiedAllowedIntent =============================== */

export function isToggleUnverifiedAllowedIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::ToggleUnverifiedAllowedIntent`; }

export interface ToggleUnverifiedAllowedIntentFields { dummyField: ToField<"bool"> }

export type ToggleUnverifiedAllowedIntentReified = Reified< ToggleUnverifiedAllowedIntent, ToggleUnverifiedAllowedIntentFields >;

export class ToggleUnverifiedAllowedIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::ToggleUnverifiedAllowedIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ToggleUnverifiedAllowedIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::ToggleUnverifiedAllowedIntent`; readonly $typeArgs: []; readonly $isPhantom = ToggleUnverifiedAllowedIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: ToggleUnverifiedAllowedIntentFields, ) { this.$fullTypeName = composeSuiType( ToggleUnverifiedAllowedIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::ToggleUnverifiedAllowedIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): ToggleUnverifiedAllowedIntentReified { return { typeName: ToggleUnverifiedAllowedIntent.$typeName, fullTypeName: composeSuiType( ToggleUnverifiedAllowedIntent.$typeName, ...[] ) as `${typeof PKG_V1}::config::ToggleUnverifiedAllowedIntent`, typeArgs: [ ] as [], isPhantom: ToggleUnverifiedAllowedIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ToggleUnverifiedAllowedIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ToggleUnverifiedAllowedIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ToggleUnverifiedAllowedIntent.fromBcs( data, ), bcs: ToggleUnverifiedAllowedIntent.bcs, fromJSONField: (field: any) => ToggleUnverifiedAllowedIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ToggleUnverifiedAllowedIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ToggleUnverifiedAllowedIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ToggleUnverifiedAllowedIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ToggleUnverifiedAllowedIntent.fetch( client, id, ), new: ( fields: ToggleUnverifiedAllowedIntentFields, ) => { return new ToggleUnverifiedAllowedIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ToggleUnverifiedAllowedIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ToggleUnverifiedAllowedIntent>> { return phantom(ToggleUnverifiedAllowedIntent.reified( )); } static get p() { return ToggleUnverifiedAllowedIntent.phantom() }

 static get bcs() { return bcs.struct("ToggleUnverifiedAllowedIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ToggleUnverifiedAllowedIntent { return ToggleUnverifiedAllowedIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ToggleUnverifiedAllowedIntent { if (!isToggleUnverifiedAllowedIntent(item.type)) { throw new Error("not a ToggleUnverifiedAllowedIntent type");

 }

 return ToggleUnverifiedAllowedIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): ToggleUnverifiedAllowedIntent { return ToggleUnverifiedAllowedIntent.fromFields( ToggleUnverifiedAllowedIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ToggleUnverifiedAllowedIntent { return ToggleUnverifiedAllowedIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): ToggleUnverifiedAllowedIntent { if (json.$typeName !== ToggleUnverifiedAllowedIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ToggleUnverifiedAllowedIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ToggleUnverifiedAllowedIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isToggleUnverifiedAllowedIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ToggleUnverifiedAllowedIntent object`); } return ToggleUnverifiedAllowedIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ToggleUnverifiedAllowedIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isToggleUnverifiedAllowedIntent(data.bcs.type)) { throw new Error(`object at is not a ToggleUnverifiedAllowedIntent object`); }

 return ToggleUnverifiedAllowedIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ToggleUnverifiedAllowedIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ToggleUnverifiedAllowedIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ToggleUnverifiedAllowedIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isToggleUnverifiedAllowedIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ToggleUnverifiedAllowedIntent object`); }

 return ToggleUnverifiedAllowedIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== ConfigDepsAction =============================== */

export function isConfigDepsAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::ConfigDepsAction`; }

export interface ConfigDepsActionFields { deps: ToField<Vector<Dep>> }

export type ConfigDepsActionReified = Reified< ConfigDepsAction, ConfigDepsActionFields >;

export class ConfigDepsAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::ConfigDepsAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ConfigDepsAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::ConfigDepsAction`; readonly $typeArgs: []; readonly $isPhantom = ConfigDepsAction.$isPhantom;

 readonly deps: ToField<Vector<Dep>>

 private constructor(typeArgs: [], fields: ConfigDepsActionFields, ) { this.$fullTypeName = composeSuiType( ConfigDepsAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::ConfigDepsAction`; this.$typeArgs = typeArgs;

 this.deps = fields.deps; }

 static reified( ): ConfigDepsActionReified { return { typeName: ConfigDepsAction.$typeName, fullTypeName: composeSuiType( ConfigDepsAction.$typeName, ...[] ) as `${typeof PKG_V1}::config::ConfigDepsAction`, typeArgs: [ ] as [], isPhantom: ConfigDepsAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ConfigDepsAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ConfigDepsAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ConfigDepsAction.fromBcs( data, ), bcs: ConfigDepsAction.bcs, fromJSONField: (field: any) => ConfigDepsAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ConfigDepsAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ConfigDepsAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ConfigDepsAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ConfigDepsAction.fetch( client, id, ), new: ( fields: ConfigDepsActionFields, ) => { return new ConfigDepsAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ConfigDepsAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ConfigDepsAction>> { return phantom(ConfigDepsAction.reified( )); } static get p() { return ConfigDepsAction.phantom() }

 static get bcs() { return bcs.struct("ConfigDepsAction", {

 deps: bcs.vector(Dep.bcs)

}) };

 static fromFields( fields: Record<string, any> ): ConfigDepsAction { return ConfigDepsAction.reified( ).new( { deps: decodeFromFields(reified.vector(Dep.reified()), fields.deps) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ConfigDepsAction { if (!isConfigDepsAction(item.type)) { throw new Error("not a ConfigDepsAction type");

 }

 return ConfigDepsAction.reified( ).new( { deps: decodeFromFieldsWithTypes(reified.vector(Dep.reified()), item.fields.deps) } ) }

 static fromBcs( data: Uint8Array ): ConfigDepsAction { return ConfigDepsAction.fromFields( ConfigDepsAction.bcs.parse(data) ) }

 toJSONField() { return {

 deps: fieldToJSON<Vector<Dep>>(`vector<${Dep.$typeName}>`, this.deps),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ConfigDepsAction { return ConfigDepsAction.reified( ).new( { deps: decodeFromJSONField(reified.vector(Dep.reified()), field.deps) } ) }

 static fromJSON( json: Record<string, any> ): ConfigDepsAction { if (json.$typeName !== ConfigDepsAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ConfigDepsAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ConfigDepsAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfigDepsAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ConfigDepsAction object`); } return ConfigDepsAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ConfigDepsAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isConfigDepsAction(data.bcs.type)) { throw new Error(`object at is not a ConfigDepsAction object`); }

 return ConfigDepsAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ConfigDepsAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ConfigDepsAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ConfigDepsAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfigDepsAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ConfigDepsAction object`); }

 return ConfigDepsAction.fromSuiObjectData( res.data ); }

 }

/* ============================== ToggleUnverifiedAllowedAction =============================== */

export function isToggleUnverifiedAllowedAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::config::ToggleUnverifiedAllowedAction`; }

export interface ToggleUnverifiedAllowedActionFields { dummyField: ToField<"bool"> }

export type ToggleUnverifiedAllowedActionReified = Reified< ToggleUnverifiedAllowedAction, ToggleUnverifiedAllowedActionFields >;

export class ToggleUnverifiedAllowedAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::config::ToggleUnverifiedAllowedAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ToggleUnverifiedAllowedAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::config::ToggleUnverifiedAllowedAction`; readonly $typeArgs: []; readonly $isPhantom = ToggleUnverifiedAllowedAction.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: ToggleUnverifiedAllowedActionFields, ) { this.$fullTypeName = composeSuiType( ToggleUnverifiedAllowedAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::config::ToggleUnverifiedAllowedAction`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): ToggleUnverifiedAllowedActionReified { return { typeName: ToggleUnverifiedAllowedAction.$typeName, fullTypeName: composeSuiType( ToggleUnverifiedAllowedAction.$typeName, ...[] ) as `${typeof PKG_V1}::config::ToggleUnverifiedAllowedAction`, typeArgs: [ ] as [], isPhantom: ToggleUnverifiedAllowedAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ToggleUnverifiedAllowedAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ToggleUnverifiedAllowedAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ToggleUnverifiedAllowedAction.fromBcs( data, ), bcs: ToggleUnverifiedAllowedAction.bcs, fromJSONField: (field: any) => ToggleUnverifiedAllowedAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ToggleUnverifiedAllowedAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ToggleUnverifiedAllowedAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ToggleUnverifiedAllowedAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ToggleUnverifiedAllowedAction.fetch( client, id, ), new: ( fields: ToggleUnverifiedAllowedActionFields, ) => { return new ToggleUnverifiedAllowedAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ToggleUnverifiedAllowedAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ToggleUnverifiedAllowedAction>> { return phantom(ToggleUnverifiedAllowedAction.reified( )); } static get p() { return ToggleUnverifiedAllowedAction.phantom() }

 static get bcs() { return bcs.struct("ToggleUnverifiedAllowedAction", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ToggleUnverifiedAllowedAction { return ToggleUnverifiedAllowedAction.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ToggleUnverifiedAllowedAction { if (!isToggleUnverifiedAllowedAction(item.type)) { throw new Error("not a ToggleUnverifiedAllowedAction type");

 }

 return ToggleUnverifiedAllowedAction.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): ToggleUnverifiedAllowedAction { return ToggleUnverifiedAllowedAction.fromFields( ToggleUnverifiedAllowedAction.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ToggleUnverifiedAllowedAction { return ToggleUnverifiedAllowedAction.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): ToggleUnverifiedAllowedAction { if (json.$typeName !== ToggleUnverifiedAllowedAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ToggleUnverifiedAllowedAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ToggleUnverifiedAllowedAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isToggleUnverifiedAllowedAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ToggleUnverifiedAllowedAction object`); } return ToggleUnverifiedAllowedAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ToggleUnverifiedAllowedAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isToggleUnverifiedAllowedAction(data.bcs.type)) { throw new Error(`object at is not a ToggleUnverifiedAllowedAction object`); }

 return ToggleUnverifiedAllowedAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ToggleUnverifiedAllowedAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ToggleUnverifiedAllowedAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ToggleUnverifiedAllowedAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isToggleUnverifiedAllowedAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ToggleUnverifiedAllowedAction object`); }

 return ToggleUnverifiedAllowedAction.fromSuiObjectData( res.data ); }

 }
