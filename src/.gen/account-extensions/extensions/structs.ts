import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Extensions =============================== */

export function isExtensions(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::extensions::Extensions`; }

export interface ExtensionsFields { id: ToField<UID>; inner: ToField<Vector<Extension>> }

export type ExtensionsReified = Reified< Extensions, ExtensionsFields >;

export class Extensions implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::extensions::Extensions`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Extensions.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::extensions::Extensions`; readonly $typeArgs: []; readonly $isPhantom = Extensions.$isPhantom;

 readonly id: ToField<UID>; readonly inner: ToField<Vector<Extension>>

 private constructor(typeArgs: [], fields: ExtensionsFields, ) { this.$fullTypeName = composeSuiType( Extensions.$typeName, ...typeArgs ) as `${typeof PKG_V1}::extensions::Extensions`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.inner = fields.inner; }

 static reified( ): ExtensionsReified { return { typeName: Extensions.$typeName, fullTypeName: composeSuiType( Extensions.$typeName, ...[] ) as `${typeof PKG_V1}::extensions::Extensions`, typeArgs: [ ] as [], isPhantom: Extensions.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Extensions.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Extensions.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Extensions.fromBcs( data, ), bcs: Extensions.bcs, fromJSONField: (field: any) => Extensions.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Extensions.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Extensions.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Extensions.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Extensions.fetch( client, id, ), new: ( fields: ExtensionsFields, ) => { return new Extensions( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Extensions.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Extensions>> { return phantom(Extensions.reified( )); } static get p() { return Extensions.phantom() }

 static get bcs() { return bcs.struct("Extensions", {

 id: UID.bcs, inner: bcs.vector(Extension.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Extensions { return Extensions.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), inner: decodeFromFields(reified.vector(Extension.reified()), fields.inner) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Extensions { if (!isExtensions(item.type)) { throw new Error("not a Extensions type");

 }

 return Extensions.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), inner: decodeFromFieldsWithTypes(reified.vector(Extension.reified()), item.fields.inner) } ) }

 static fromBcs( data: Uint8Array ): Extensions { return Extensions.fromFields( Extensions.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,inner: fieldToJSON<Vector<Extension>>(`vector<${Extension.$typeName}>`, this.inner),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Extensions { return Extensions.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), inner: decodeFromJSONField(reified.vector(Extension.reified()), field.inner) } ) }

 static fromJSON( json: Record<string, any> ): Extensions { if (json.$typeName !== Extensions.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Extensions.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Extensions { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExtensions(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Extensions object`); } return Extensions.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Extensions { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExtensions(data.bcs.type)) { throw new Error(`object at is not a Extensions object`); }

 return Extensions.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Extensions.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Extensions> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Extensions object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExtensions(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Extensions object`); }

 return Extensions.fromSuiObjectData( res.data ); }

 }

/* ============================== Extension =============================== */

export function isExtension(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::extensions::Extension`; }

export interface ExtensionFields { name: ToField<String>; history: ToField<Vector<History>> }

export type ExtensionReified = Reified< Extension, ExtensionFields >;

export class Extension implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::extensions::Extension`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Extension.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::extensions::Extension`; readonly $typeArgs: []; readonly $isPhantom = Extension.$isPhantom;

 readonly name: ToField<String>; readonly history: ToField<Vector<History>>

 private constructor(typeArgs: [], fields: ExtensionFields, ) { this.$fullTypeName = composeSuiType( Extension.$typeName, ...typeArgs ) as `${typeof PKG_V1}::extensions::Extension`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.history = fields.history; }

 static reified( ): ExtensionReified { return { typeName: Extension.$typeName, fullTypeName: composeSuiType( Extension.$typeName, ...[] ) as `${typeof PKG_V1}::extensions::Extension`, typeArgs: [ ] as [], isPhantom: Extension.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Extension.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Extension.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Extension.fromBcs( data, ), bcs: Extension.bcs, fromJSONField: (field: any) => Extension.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Extension.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Extension.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Extension.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Extension.fetch( client, id, ), new: ( fields: ExtensionFields, ) => { return new Extension( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Extension.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Extension>> { return phantom(Extension.reified( )); } static get p() { return Extension.phantom() }

 static get bcs() { return bcs.struct("Extension", {

 name: String.bcs, history: bcs.vector(History.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Extension { return Extension.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), history: decodeFromFields(reified.vector(History.reified()), fields.history) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Extension { if (!isExtension(item.type)) { throw new Error("not a Extension type");

 }

 return Extension.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), history: decodeFromFieldsWithTypes(reified.vector(History.reified()), item.fields.history) } ) }

 static fromBcs( data: Uint8Array ): Extension { return Extension.fromFields( Extension.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,history: fieldToJSON<Vector<History>>(`vector<${History.$typeName}>`, this.history),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Extension { return Extension.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), history: decodeFromJSONField(reified.vector(History.reified()), field.history) } ) }

 static fromJSON( json: Record<string, any> ): Extension { if (json.$typeName !== Extension.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Extension.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Extension { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExtension(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Extension object`); } return Extension.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Extension { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExtension(data.bcs.type)) { throw new Error(`object at is not a Extension object`); }

 return Extension.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Extension.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Extension> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Extension object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExtension(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Extension object`); }

 return Extension.fromSuiObjectData( res.data ); }

 }

/* ============================== History =============================== */

export function isHistory(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::extensions::History`; }

export interface HistoryFields { addr: ToField<"address">; version: ToField<"u64"> }

export type HistoryReified = Reified< History, HistoryFields >;

export class History implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::extensions::History`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = History.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::extensions::History`; readonly $typeArgs: []; readonly $isPhantom = History.$isPhantom;

 readonly addr: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: HistoryFields, ) { this.$fullTypeName = composeSuiType( History.$typeName, ...typeArgs ) as `${typeof PKG_V1}::extensions::History`; this.$typeArgs = typeArgs;

 this.addr = fields.addr;; this.version = fields.version; }

 static reified( ): HistoryReified { return { typeName: History.$typeName, fullTypeName: composeSuiType( History.$typeName, ...[] ) as `${typeof PKG_V1}::extensions::History`, typeArgs: [ ] as [], isPhantom: History.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => History.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => History.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => History.fromBcs( data, ), bcs: History.bcs, fromJSONField: (field: any) => History.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => History.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => History.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => History.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => History.fetch( client, id, ), new: ( fields: HistoryFields, ) => { return new History( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return History.reified() }

 static phantom( ): PhantomReified<ToTypeStr<History>> { return phantom(History.reified( )); } static get p() { return History.phantom() }

 static get bcs() { return bcs.struct("History", {

 addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): History { return History.reified( ).new( { addr: decodeFromFields("address", fields.addr), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): History { if (!isHistory(item.type)) { throw new Error("not a History type");

 }

 return History.reified( ).new( { addr: decodeFromFieldsWithTypes("address", item.fields.addr), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): History { return History.fromFields( History.bcs.parse(data) ) }

 toJSONField() { return {

 addr: this.addr,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): History { return History.reified( ).new( { addr: decodeFromJSONField("address", field.addr), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): History { if (json.$typeName !== History.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return History.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): History { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isHistory(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a History object`); } return History.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): History { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isHistory(data.bcs.type)) { throw new Error(`object at is not a History object`); }

 return History.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return History.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<History> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching History object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isHistory(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a History object`); }

 return History.fromSuiObjectData( res.data ); }

 }

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::extensions::AdminCap`; }

export interface AdminCapFields { id: ToField<UID> }

export type AdminCapReified = Reified< AdminCap, AdminCapFields >;

export class AdminCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::extensions::AdminCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = AdminCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::extensions::AdminCap`; readonly $typeArgs: []; readonly $isPhantom = AdminCap.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: AdminCapFields, ) { this.$fullTypeName = composeSuiType( AdminCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::extensions::AdminCap`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): AdminCapReified { return { typeName: AdminCap.$typeName, fullTypeName: composeSuiType( AdminCap.$typeName, ...[] ) as `${typeof PKG_V1}::extensions::AdminCap`, typeArgs: [ ] as [], isPhantom: AdminCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => AdminCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => AdminCap.fromBcs( data, ), bcs: AdminCap.bcs, fromJSONField: (field: any) => AdminCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => AdminCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => AdminCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => AdminCap.fetch( client, id, ), new: ( fields: AdminCapFields, ) => { return new AdminCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return AdminCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<AdminCap>> { return phantom(AdminCap.reified( )); } static get p() { return AdminCap.phantom() }

 static get bcs() { return bcs.struct("AdminCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): AdminCap { if (!isAdminCap(item.type)) { throw new Error("not a AdminCap type");

 }

 return AdminCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): AdminCap { return AdminCap.fromFields( AdminCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): AdminCap { return AdminCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): AdminCap { if (json.$typeName !== AdminCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return AdminCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): AdminCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAdminCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`); } return AdminCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): AdminCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAdminCap(data.bcs.type)) { throw new Error(`object at is not a AdminCap object`); }

 return AdminCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return AdminCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<AdminCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a AdminCap object`); }

 return AdminCap.fromSuiObjectData( res.data ); }

 }
