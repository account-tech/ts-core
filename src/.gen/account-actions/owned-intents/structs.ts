import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== WithdrawAndTransferToVaultIntent =============================== */

export function isWithdrawAndTransferToVaultIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::owned_intents::WithdrawAndTransferToVaultIntent`; }

export interface WithdrawAndTransferToVaultIntentFields { dummyField: ToField<"bool"> }

export type WithdrawAndTransferToVaultIntentReified = Reified< WithdrawAndTransferToVaultIntent, WithdrawAndTransferToVaultIntentFields >;

export class WithdrawAndTransferToVaultIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::owned_intents::WithdrawAndTransferToVaultIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WithdrawAndTransferToVaultIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::owned_intents::WithdrawAndTransferToVaultIntent`; readonly $typeArgs: []; readonly $isPhantom = WithdrawAndTransferToVaultIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: WithdrawAndTransferToVaultIntentFields, ) { this.$fullTypeName = composeSuiType( WithdrawAndTransferToVaultIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::owned_intents::WithdrawAndTransferToVaultIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): WithdrawAndTransferToVaultIntentReified { return { typeName: WithdrawAndTransferToVaultIntent.$typeName, fullTypeName: composeSuiType( WithdrawAndTransferToVaultIntent.$typeName, ...[] ) as `${typeof PKG_V1}::owned_intents::WithdrawAndTransferToVaultIntent`, typeArgs: [ ] as [], isPhantom: WithdrawAndTransferToVaultIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WithdrawAndTransferToVaultIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawAndTransferToVaultIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WithdrawAndTransferToVaultIntent.fromBcs( data, ), bcs: WithdrawAndTransferToVaultIntent.bcs, fromJSONField: (field: any) => WithdrawAndTransferToVaultIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WithdrawAndTransferToVaultIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawAndTransferToVaultIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrawAndTransferToVaultIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WithdrawAndTransferToVaultIntent.fetch( client, id, ), new: ( fields: WithdrawAndTransferToVaultIntentFields, ) => { return new WithdrawAndTransferToVaultIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawAndTransferToVaultIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WithdrawAndTransferToVaultIntent>> { return phantom(WithdrawAndTransferToVaultIntent.reified( )); } static get p() { return WithdrawAndTransferToVaultIntent.phantom() }

 static get bcs() { return bcs.struct("WithdrawAndTransferToVaultIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): WithdrawAndTransferToVaultIntent { return WithdrawAndTransferToVaultIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WithdrawAndTransferToVaultIntent { if (!isWithdrawAndTransferToVaultIntent(item.type)) { throw new Error("not a WithdrawAndTransferToVaultIntent type");

 }

 return WithdrawAndTransferToVaultIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): WithdrawAndTransferToVaultIntent { return WithdrawAndTransferToVaultIntent.fromFields( WithdrawAndTransferToVaultIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WithdrawAndTransferToVaultIntent { return WithdrawAndTransferToVaultIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): WithdrawAndTransferToVaultIntent { if (json.$typeName !== WithdrawAndTransferToVaultIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WithdrawAndTransferToVaultIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WithdrawAndTransferToVaultIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawAndTransferToVaultIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawAndTransferToVaultIntent object`); } return WithdrawAndTransferToVaultIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WithdrawAndTransferToVaultIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrawAndTransferToVaultIntent(data.bcs.type)) { throw new Error(`object at is not a WithdrawAndTransferToVaultIntent object`); }

 return WithdrawAndTransferToVaultIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrawAndTransferToVaultIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WithdrawAndTransferToVaultIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawAndTransferToVaultIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawAndTransferToVaultIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawAndTransferToVaultIntent object`); }

 return WithdrawAndTransferToVaultIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== WithdrawAndTransferIntent =============================== */

export function isWithdrawAndTransferIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::owned_intents::WithdrawAndTransferIntent`; }

export interface WithdrawAndTransferIntentFields { dummyField: ToField<"bool"> }

export type WithdrawAndTransferIntentReified = Reified< WithdrawAndTransferIntent, WithdrawAndTransferIntentFields >;

export class WithdrawAndTransferIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::owned_intents::WithdrawAndTransferIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WithdrawAndTransferIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::owned_intents::WithdrawAndTransferIntent`; readonly $typeArgs: []; readonly $isPhantom = WithdrawAndTransferIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: WithdrawAndTransferIntentFields, ) { this.$fullTypeName = composeSuiType( WithdrawAndTransferIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::owned_intents::WithdrawAndTransferIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): WithdrawAndTransferIntentReified { return { typeName: WithdrawAndTransferIntent.$typeName, fullTypeName: composeSuiType( WithdrawAndTransferIntent.$typeName, ...[] ) as `${typeof PKG_V1}::owned_intents::WithdrawAndTransferIntent`, typeArgs: [ ] as [], isPhantom: WithdrawAndTransferIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WithdrawAndTransferIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawAndTransferIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WithdrawAndTransferIntent.fromBcs( data, ), bcs: WithdrawAndTransferIntent.bcs, fromJSONField: (field: any) => WithdrawAndTransferIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WithdrawAndTransferIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawAndTransferIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrawAndTransferIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WithdrawAndTransferIntent.fetch( client, id, ), new: ( fields: WithdrawAndTransferIntentFields, ) => { return new WithdrawAndTransferIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawAndTransferIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WithdrawAndTransferIntent>> { return phantom(WithdrawAndTransferIntent.reified( )); } static get p() { return WithdrawAndTransferIntent.phantom() }

 static get bcs() { return bcs.struct("WithdrawAndTransferIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): WithdrawAndTransferIntent { return WithdrawAndTransferIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WithdrawAndTransferIntent { if (!isWithdrawAndTransferIntent(item.type)) { throw new Error("not a WithdrawAndTransferIntent type");

 }

 return WithdrawAndTransferIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): WithdrawAndTransferIntent { return WithdrawAndTransferIntent.fromFields( WithdrawAndTransferIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WithdrawAndTransferIntent { return WithdrawAndTransferIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): WithdrawAndTransferIntent { if (json.$typeName !== WithdrawAndTransferIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WithdrawAndTransferIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WithdrawAndTransferIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawAndTransferIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawAndTransferIntent object`); } return WithdrawAndTransferIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WithdrawAndTransferIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrawAndTransferIntent(data.bcs.type)) { throw new Error(`object at is not a WithdrawAndTransferIntent object`); }

 return WithdrawAndTransferIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrawAndTransferIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WithdrawAndTransferIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawAndTransferIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawAndTransferIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawAndTransferIntent object`); }

 return WithdrawAndTransferIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== WithdrawAndVestIntent =============================== */

export function isWithdrawAndVestIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::owned_intents::WithdrawAndVestIntent`; }

export interface WithdrawAndVestIntentFields { dummyField: ToField<"bool"> }

export type WithdrawAndVestIntentReified = Reified< WithdrawAndVestIntent, WithdrawAndVestIntentFields >;

export class WithdrawAndVestIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::owned_intents::WithdrawAndVestIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WithdrawAndVestIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::owned_intents::WithdrawAndVestIntent`; readonly $typeArgs: []; readonly $isPhantom = WithdrawAndVestIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: WithdrawAndVestIntentFields, ) { this.$fullTypeName = composeSuiType( WithdrawAndVestIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::owned_intents::WithdrawAndVestIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): WithdrawAndVestIntentReified { return { typeName: WithdrawAndVestIntent.$typeName, fullTypeName: composeSuiType( WithdrawAndVestIntent.$typeName, ...[] ) as `${typeof PKG_V1}::owned_intents::WithdrawAndVestIntent`, typeArgs: [ ] as [], isPhantom: WithdrawAndVestIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WithdrawAndVestIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawAndVestIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WithdrawAndVestIntent.fromBcs( data, ), bcs: WithdrawAndVestIntent.bcs, fromJSONField: (field: any) => WithdrawAndVestIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WithdrawAndVestIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawAndVestIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrawAndVestIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WithdrawAndVestIntent.fetch( client, id, ), new: ( fields: WithdrawAndVestIntentFields, ) => { return new WithdrawAndVestIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawAndVestIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WithdrawAndVestIntent>> { return phantom(WithdrawAndVestIntent.reified( )); } static get p() { return WithdrawAndVestIntent.phantom() }

 static get bcs() { return bcs.struct("WithdrawAndVestIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): WithdrawAndVestIntent { return WithdrawAndVestIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WithdrawAndVestIntent { if (!isWithdrawAndVestIntent(item.type)) { throw new Error("not a WithdrawAndVestIntent type");

 }

 return WithdrawAndVestIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): WithdrawAndVestIntent { return WithdrawAndVestIntent.fromFields( WithdrawAndVestIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WithdrawAndVestIntent { return WithdrawAndVestIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): WithdrawAndVestIntent { if (json.$typeName !== WithdrawAndVestIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WithdrawAndVestIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WithdrawAndVestIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawAndVestIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawAndVestIntent object`); } return WithdrawAndVestIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WithdrawAndVestIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrawAndVestIntent(data.bcs.type)) { throw new Error(`object at is not a WithdrawAndVestIntent object`); }

 return WithdrawAndVestIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrawAndVestIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WithdrawAndVestIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawAndVestIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawAndVestIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawAndVestIntent object`); }

 return WithdrawAndVestIntent.fromSuiObjectData( res.data ); }

 }
