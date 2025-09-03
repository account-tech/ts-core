import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== SpendAndTransferIntent =============================== */

export function isSpendAndTransferIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vault_intents::SpendAndTransferIntent`; }

export interface SpendAndTransferIntentFields { dummyField: ToField<"bool"> }

export type SpendAndTransferIntentReified = Reified< SpendAndTransferIntent, SpendAndTransferIntentFields >;

export class SpendAndTransferIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault_intents::SpendAndTransferIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SpendAndTransferIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault_intents::SpendAndTransferIntent`; readonly $typeArgs: []; readonly $isPhantom = SpendAndTransferIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: SpendAndTransferIntentFields, ) { this.$fullTypeName = composeSuiType( SpendAndTransferIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault_intents::SpendAndTransferIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): SpendAndTransferIntentReified { return { typeName: SpendAndTransferIntent.$typeName, fullTypeName: composeSuiType( SpendAndTransferIntent.$typeName, ...[] ) as `${typeof PKG_V1}::vault_intents::SpendAndTransferIntent`, typeArgs: [ ] as [], isPhantom: SpendAndTransferIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SpendAndTransferIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SpendAndTransferIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SpendAndTransferIntent.fromBcs( data, ), bcs: SpendAndTransferIntent.bcs, fromJSONField: (field: any) => SpendAndTransferIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SpendAndTransferIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SpendAndTransferIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SpendAndTransferIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SpendAndTransferIntent.fetch( client, id, ), new: ( fields: SpendAndTransferIntentFields, ) => { return new SpendAndTransferIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SpendAndTransferIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SpendAndTransferIntent>> { return phantom(SpendAndTransferIntent.reified( )); } static get p() { return SpendAndTransferIntent.phantom() }

 static get bcs() { return bcs.struct("SpendAndTransferIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): SpendAndTransferIntent { return SpendAndTransferIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SpendAndTransferIntent { if (!isSpendAndTransferIntent(item.type)) { throw new Error("not a SpendAndTransferIntent type");

 }

 return SpendAndTransferIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): SpendAndTransferIntent { return SpendAndTransferIntent.fromFields( SpendAndTransferIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SpendAndTransferIntent { return SpendAndTransferIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): SpendAndTransferIntent { if (json.$typeName !== SpendAndTransferIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SpendAndTransferIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SpendAndTransferIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSpendAndTransferIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SpendAndTransferIntent object`); } return SpendAndTransferIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SpendAndTransferIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSpendAndTransferIntent(data.bcs.type)) { throw new Error(`object at is not a SpendAndTransferIntent object`); }

 return SpendAndTransferIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SpendAndTransferIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SpendAndTransferIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SpendAndTransferIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSpendAndTransferIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SpendAndTransferIntent object`); }

 return SpendAndTransferIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== SpendAndVestIntent =============================== */

export function isSpendAndVestIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vault_intents::SpendAndVestIntent`; }

export interface SpendAndVestIntentFields { dummyField: ToField<"bool"> }

export type SpendAndVestIntentReified = Reified< SpendAndVestIntent, SpendAndVestIntentFields >;

export class SpendAndVestIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault_intents::SpendAndVestIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = SpendAndVestIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault_intents::SpendAndVestIntent`; readonly $typeArgs: []; readonly $isPhantom = SpendAndVestIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: SpendAndVestIntentFields, ) { this.$fullTypeName = composeSuiType( SpendAndVestIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault_intents::SpendAndVestIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): SpendAndVestIntentReified { return { typeName: SpendAndVestIntent.$typeName, fullTypeName: composeSuiType( SpendAndVestIntent.$typeName, ...[] ) as `${typeof PKG_V1}::vault_intents::SpendAndVestIntent`, typeArgs: [ ] as [], isPhantom: SpendAndVestIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SpendAndVestIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SpendAndVestIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SpendAndVestIntent.fromBcs( data, ), bcs: SpendAndVestIntent.bcs, fromJSONField: (field: any) => SpendAndVestIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SpendAndVestIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SpendAndVestIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => SpendAndVestIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => SpendAndVestIntent.fetch( client, id, ), new: ( fields: SpendAndVestIntentFields, ) => { return new SpendAndVestIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SpendAndVestIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SpendAndVestIntent>> { return phantom(SpendAndVestIntent.reified( )); } static get p() { return SpendAndVestIntent.phantom() }

 static get bcs() { return bcs.struct("SpendAndVestIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): SpendAndVestIntent { return SpendAndVestIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SpendAndVestIntent { if (!isSpendAndVestIntent(item.type)) { throw new Error("not a SpendAndVestIntent type");

 }

 return SpendAndVestIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): SpendAndVestIntent { return SpendAndVestIntent.fromFields( SpendAndVestIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SpendAndVestIntent { return SpendAndVestIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): SpendAndVestIntent { if (json.$typeName !== SpendAndVestIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SpendAndVestIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SpendAndVestIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSpendAndVestIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SpendAndVestIntent object`); } return SpendAndVestIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): SpendAndVestIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSpendAndVestIntent(data.bcs.type)) { throw new Error(`object at is not a SpendAndVestIntent object`); }

 return SpendAndVestIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SpendAndVestIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<SpendAndVestIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SpendAndVestIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSpendAndVestIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SpendAndVestIntent object`); }

 return SpendAndVestIntent.fromSuiObjectData( res.data ); }

 }
