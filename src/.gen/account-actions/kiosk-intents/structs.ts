import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== TakeNftsIntent =============================== */

export function isTakeNftsIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kiosk_intents::TakeNftsIntent`; }

export interface TakeNftsIntentFields { dummyField: ToField<"bool"> }

export type TakeNftsIntentReified = Reified< TakeNftsIntent, TakeNftsIntentFields >;

export class TakeNftsIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kiosk_intents::TakeNftsIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TakeNftsIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kiosk_intents::TakeNftsIntent`; readonly $typeArgs: []; readonly $isPhantom = TakeNftsIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: TakeNftsIntentFields, ) { this.$fullTypeName = composeSuiType( TakeNftsIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kiosk_intents::TakeNftsIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): TakeNftsIntentReified { return { typeName: TakeNftsIntent.$typeName, fullTypeName: composeSuiType( TakeNftsIntent.$typeName, ...[] ) as `${typeof PKG_V1}::kiosk_intents::TakeNftsIntent`, typeArgs: [ ] as [], isPhantom: TakeNftsIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TakeNftsIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TakeNftsIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TakeNftsIntent.fromBcs( data, ), bcs: TakeNftsIntent.bcs, fromJSONField: (field: any) => TakeNftsIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TakeNftsIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TakeNftsIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TakeNftsIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TakeNftsIntent.fetch( client, id, ), new: ( fields: TakeNftsIntentFields, ) => { return new TakeNftsIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TakeNftsIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TakeNftsIntent>> { return phantom(TakeNftsIntent.reified( )); } static get p() { return TakeNftsIntent.phantom() }

 static get bcs() { return bcs.struct("TakeNftsIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): TakeNftsIntent { return TakeNftsIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TakeNftsIntent { if (!isTakeNftsIntent(item.type)) { throw new Error("not a TakeNftsIntent type");

 }

 return TakeNftsIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): TakeNftsIntent { return TakeNftsIntent.fromFields( TakeNftsIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TakeNftsIntent { return TakeNftsIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): TakeNftsIntent { if (json.$typeName !== TakeNftsIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TakeNftsIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TakeNftsIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTakeNftsIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TakeNftsIntent object`); } return TakeNftsIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TakeNftsIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTakeNftsIntent(data.bcs.type)) { throw new Error(`object at is not a TakeNftsIntent object`); }

 return TakeNftsIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TakeNftsIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TakeNftsIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TakeNftsIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTakeNftsIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TakeNftsIntent object`); }

 return TakeNftsIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== ListNftsIntent =============================== */

export function isListNftsIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kiosk_intents::ListNftsIntent`; }

export interface ListNftsIntentFields { dummyField: ToField<"bool"> }

export type ListNftsIntentReified = Reified< ListNftsIntent, ListNftsIntentFields >;

export class ListNftsIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kiosk_intents::ListNftsIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ListNftsIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kiosk_intents::ListNftsIntent`; readonly $typeArgs: []; readonly $isPhantom = ListNftsIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: ListNftsIntentFields, ) { this.$fullTypeName = composeSuiType( ListNftsIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kiosk_intents::ListNftsIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): ListNftsIntentReified { return { typeName: ListNftsIntent.$typeName, fullTypeName: composeSuiType( ListNftsIntent.$typeName, ...[] ) as `${typeof PKG_V1}::kiosk_intents::ListNftsIntent`, typeArgs: [ ] as [], isPhantom: ListNftsIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListNftsIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListNftsIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListNftsIntent.fromBcs( data, ), bcs: ListNftsIntent.bcs, fromJSONField: (field: any) => ListNftsIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListNftsIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListNftsIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ListNftsIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ListNftsIntent.fetch( client, id, ), new: ( fields: ListNftsIntentFields, ) => { return new ListNftsIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListNftsIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListNftsIntent>> { return phantom(ListNftsIntent.reified( )); } static get p() { return ListNftsIntent.phantom() }

 static get bcs() { return bcs.struct("ListNftsIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ListNftsIntent { return ListNftsIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListNftsIntent { if (!isListNftsIntent(item.type)) { throw new Error("not a ListNftsIntent type");

 }

 return ListNftsIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): ListNftsIntent { return ListNftsIntent.fromFields( ListNftsIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListNftsIntent { return ListNftsIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): ListNftsIntent { if (json.$typeName !== ListNftsIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListNftsIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListNftsIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListNftsIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListNftsIntent object`); } return ListNftsIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ListNftsIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListNftsIntent(data.bcs.type)) { throw new Error(`object at is not a ListNftsIntent object`); }

 return ListNftsIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ListNftsIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListNftsIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListNftsIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListNftsIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListNftsIntent object`); }

 return ListNftsIntent.fromSuiObjectData( res.data ); }

 }
