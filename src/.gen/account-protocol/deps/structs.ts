import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Deps =============================== */

export function isDeps(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::deps::Deps`; }

export interface DepsFields { inner: ToField<Vector<Dep>>; unverifiedAllowed: ToField<"bool"> }

export type DepsReified = Reified< Deps, DepsFields >;

export class Deps implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::deps::Deps`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Deps.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::deps::Deps`; readonly $typeArgs: []; readonly $isPhantom = Deps.$isPhantom;

 readonly inner: ToField<Vector<Dep>>; readonly unverifiedAllowed: ToField<"bool">

 private constructor(typeArgs: [], fields: DepsFields, ) { this.$fullTypeName = composeSuiType( Deps.$typeName, ...typeArgs ) as `${typeof PKG_V1}::deps::Deps`; this.$typeArgs = typeArgs;

 this.inner = fields.inner;; this.unverifiedAllowed = fields.unverifiedAllowed; }

 static reified( ): DepsReified { return { typeName: Deps.$typeName, fullTypeName: composeSuiType( Deps.$typeName, ...[] ) as `${typeof PKG_V1}::deps::Deps`, typeArgs: [ ] as [], isPhantom: Deps.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Deps.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Deps.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Deps.fromBcs( data, ), bcs: Deps.bcs, fromJSONField: (field: any) => Deps.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Deps.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Deps.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Deps.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Deps.fetch( client, id, ), new: ( fields: DepsFields, ) => { return new Deps( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Deps.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Deps>> { return phantom(Deps.reified( )); } static get p() { return Deps.phantom() }

 static get bcs() { return bcs.struct("Deps", {

 inner: bcs.vector(Dep.bcs), unverified_allowed: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): Deps { return Deps.reified( ).new( { inner: decodeFromFields(reified.vector(Dep.reified()), fields.inner), unverifiedAllowed: decodeFromFields("bool", fields.unverified_allowed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Deps { if (!isDeps(item.type)) { throw new Error("not a Deps type");

 }

 return Deps.reified( ).new( { inner: decodeFromFieldsWithTypes(reified.vector(Dep.reified()), item.fields.inner), unverifiedAllowed: decodeFromFieldsWithTypes("bool", item.fields.unverified_allowed) } ) }

 static fromBcs( data: Uint8Array ): Deps { return Deps.fromFields( Deps.bcs.parse(data) ) }

 toJSONField() { return {

 inner: fieldToJSON<Vector<Dep>>(`vector<${Dep.$typeName}>`, this.inner),unverifiedAllowed: this.unverifiedAllowed,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Deps { return Deps.reified( ).new( { inner: decodeFromJSONField(reified.vector(Dep.reified()), field.inner), unverifiedAllowed: decodeFromJSONField("bool", field.unverifiedAllowed) } ) }

 static fromJSON( json: Record<string, any> ): Deps { if (json.$typeName !== Deps.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Deps.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Deps { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDeps(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Deps object`); } return Deps.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Deps { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDeps(data.bcs.type)) { throw new Error(`object at is not a Deps object`); }

 return Deps.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Deps.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Deps> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Deps object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDeps(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Deps object`); }

 return Deps.fromSuiObjectData( res.data ); }

 }

/* ============================== Dep =============================== */

export function isDep(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::deps::Dep`; }

export interface DepFields { name: ToField<String>; addr: ToField<"address">; version: ToField<"u64"> }

export type DepReified = Reified< Dep, DepFields >;

export class Dep implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::deps::Dep`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Dep.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::deps::Dep`; readonly $typeArgs: []; readonly $isPhantom = Dep.$isPhantom;

 readonly name: ToField<String>; readonly addr: ToField<"address">; readonly version: ToField<"u64">

 private constructor(typeArgs: [], fields: DepFields, ) { this.$fullTypeName = composeSuiType( Dep.$typeName, ...typeArgs ) as `${typeof PKG_V1}::deps::Dep`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.addr = fields.addr;; this.version = fields.version; }

 static reified( ): DepReified { return { typeName: Dep.$typeName, fullTypeName: composeSuiType( Dep.$typeName, ...[] ) as `${typeof PKG_V1}::deps::Dep`, typeArgs: [ ] as [], isPhantom: Dep.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Dep.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Dep.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Dep.fromBcs( data, ), bcs: Dep.bcs, fromJSONField: (field: any) => Dep.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Dep.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Dep.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Dep.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Dep.fetch( client, id, ), new: ( fields: DepFields, ) => { return new Dep( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Dep.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Dep>> { return phantom(Dep.reified( )); } static get p() { return Dep.phantom() }

 static get bcs() { return bcs.struct("Dep", {

 name: String.bcs, addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), version: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Dep { return Dep.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), addr: decodeFromFields("address", fields.addr), version: decodeFromFields("u64", fields.version) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Dep { if (!isDep(item.type)) { throw new Error("not a Dep type");

 }

 return Dep.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), addr: decodeFromFieldsWithTypes("address", item.fields.addr), version: decodeFromFieldsWithTypes("u64", item.fields.version) } ) }

 static fromBcs( data: Uint8Array ): Dep { return Dep.fromFields( Dep.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,addr: this.addr,version: this.version.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Dep { return Dep.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), addr: decodeFromJSONField("address", field.addr), version: decodeFromJSONField("u64", field.version) } ) }

 static fromJSON( json: Record<string, any> ): Dep { if (json.$typeName !== Dep.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Dep.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Dep { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDep(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Dep object`); } return Dep.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Dep { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDep(data.bcs.type)) { throw new Error(`object at is not a Dep object`); }

 return Dep.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Dep.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Dep> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Dep object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDep(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Dep object`); }

 return Dep.fromSuiObjectData( res.data ); }

 }
