import {String} from "../../_dependencies/source/0x1/string/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== KioskOwnerKey =============================== */

export function isKioskOwnerKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kiosk::KioskOwnerKey`; }

export interface KioskOwnerKeyFields { pos0: ToField<String> }

export type KioskOwnerKeyReified = Reified< KioskOwnerKey, KioskOwnerKeyFields >;

export class KioskOwnerKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kiosk::KioskOwnerKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = KioskOwnerKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kiosk::KioskOwnerKey`; readonly $typeArgs: []; readonly $isPhantom = KioskOwnerKey.$isPhantom;

 readonly pos0: ToField<String>

 private constructor(typeArgs: [], fields: KioskOwnerKeyFields, ) { this.$fullTypeName = composeSuiType( KioskOwnerKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kiosk::KioskOwnerKey`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0; }

 static reified( ): KioskOwnerKeyReified { return { typeName: KioskOwnerKey.$typeName, fullTypeName: composeSuiType( KioskOwnerKey.$typeName, ...[] ) as `${typeof PKG_V1}::kiosk::KioskOwnerKey`, typeArgs: [ ] as [], isPhantom: KioskOwnerKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => KioskOwnerKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => KioskOwnerKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => KioskOwnerKey.fromBcs( data, ), bcs: KioskOwnerKey.bcs, fromJSONField: (field: any) => KioskOwnerKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => KioskOwnerKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => KioskOwnerKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => KioskOwnerKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => KioskOwnerKey.fetch( client, id, ), new: ( fields: KioskOwnerKeyFields, ) => { return new KioskOwnerKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return KioskOwnerKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<KioskOwnerKey>> { return phantom(KioskOwnerKey.reified( )); } static get p() { return KioskOwnerKey.phantom() }

 static get bcs() { return bcs.struct("KioskOwnerKey", {

 pos0: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): KioskOwnerKey { return KioskOwnerKey.reified( ).new( { pos0: decodeFromFields(String.reified(), fields.pos0) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): KioskOwnerKey { if (!isKioskOwnerKey(item.type)) { throw new Error("not a KioskOwnerKey type");

 }

 return KioskOwnerKey.reified( ).new( { pos0: decodeFromFieldsWithTypes(String.reified(), item.fields.pos0) } ) }

 static fromBcs( data: Uint8Array ): KioskOwnerKey { return KioskOwnerKey.fromFields( KioskOwnerKey.bcs.parse(data) ) }

 toJSONField() { return {

 pos0: this.pos0,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): KioskOwnerKey { return KioskOwnerKey.reified( ).new( { pos0: decodeFromJSONField(String.reified(), field.pos0) } ) }

 static fromJSON( json: Record<string, any> ): KioskOwnerKey { if (json.$typeName !== KioskOwnerKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return KioskOwnerKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): KioskOwnerKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isKioskOwnerKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a KioskOwnerKey object`); } return KioskOwnerKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): KioskOwnerKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isKioskOwnerKey(data.bcs.type)) { throw new Error(`object at is not a KioskOwnerKey object`); }

 return KioskOwnerKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return KioskOwnerKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<KioskOwnerKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching KioskOwnerKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isKioskOwnerKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a KioskOwnerKey object`); }

 return KioskOwnerKey.fromSuiObjectData( res.data ); }

 }

/* ============================== TakeAction =============================== */

export function isTakeAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kiosk::TakeAction`; }

export interface TakeActionFields { name: ToField<String>; nftId: ToField<ID>; recipient: ToField<"address"> }

export type TakeActionReified = Reified< TakeAction, TakeActionFields >;

export class TakeAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kiosk::TakeAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TakeAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kiosk::TakeAction`; readonly $typeArgs: []; readonly $isPhantom = TakeAction.$isPhantom;

 readonly name: ToField<String>; readonly nftId: ToField<ID>; readonly recipient: ToField<"address">

 private constructor(typeArgs: [], fields: TakeActionFields, ) { this.$fullTypeName = composeSuiType( TakeAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kiosk::TakeAction`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.nftId = fields.nftId;; this.recipient = fields.recipient; }

 static reified( ): TakeActionReified { return { typeName: TakeAction.$typeName, fullTypeName: composeSuiType( TakeAction.$typeName, ...[] ) as `${typeof PKG_V1}::kiosk::TakeAction`, typeArgs: [ ] as [], isPhantom: TakeAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TakeAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TakeAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TakeAction.fromBcs( data, ), bcs: TakeAction.bcs, fromJSONField: (field: any) => TakeAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TakeAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TakeAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TakeAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TakeAction.fetch( client, id, ), new: ( fields: TakeActionFields, ) => { return new TakeAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TakeAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TakeAction>> { return phantom(TakeAction.reified( )); } static get p() { return TakeAction.phantom() }

 static get bcs() { return bcs.struct("TakeAction", {

 name: String.bcs, nft_id: ID.bcs, recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): TakeAction { return TakeAction.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), nftId: decodeFromFields(ID.reified(), fields.nft_id), recipient: decodeFromFields("address", fields.recipient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TakeAction { if (!isTakeAction(item.type)) { throw new Error("not a TakeAction type");

 }

 return TakeAction.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), recipient: decodeFromFieldsWithTypes("address", item.fields.recipient) } ) }

 static fromBcs( data: Uint8Array ): TakeAction { return TakeAction.fromFields( TakeAction.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,nftId: this.nftId,recipient: this.recipient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TakeAction { return TakeAction.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), nftId: decodeFromJSONField(ID.reified(), field.nftId), recipient: decodeFromJSONField("address", field.recipient) } ) }

 static fromJSON( json: Record<string, any> ): TakeAction { if (json.$typeName !== TakeAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TakeAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TakeAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTakeAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TakeAction object`); } return TakeAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TakeAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTakeAction(data.bcs.type)) { throw new Error(`object at is not a TakeAction object`); }

 return TakeAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TakeAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TakeAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TakeAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTakeAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TakeAction object`); }

 return TakeAction.fromSuiObjectData( res.data ); }

 }

/* ============================== ListAction =============================== */

export function isListAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::kiosk::ListAction`; }

export interface ListActionFields { name: ToField<String>; nftId: ToField<ID>; price: ToField<"u64"> }

export type ListActionReified = Reified< ListAction, ListActionFields >;

export class ListAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::kiosk::ListAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ListAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::kiosk::ListAction`; readonly $typeArgs: []; readonly $isPhantom = ListAction.$isPhantom;

 readonly name: ToField<String>; readonly nftId: ToField<ID>; readonly price: ToField<"u64">

 private constructor(typeArgs: [], fields: ListActionFields, ) { this.$fullTypeName = composeSuiType( ListAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::kiosk::ListAction`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.nftId = fields.nftId;; this.price = fields.price; }

 static reified( ): ListActionReified { return { typeName: ListAction.$typeName, fullTypeName: composeSuiType( ListAction.$typeName, ...[] ) as `${typeof PKG_V1}::kiosk::ListAction`, typeArgs: [ ] as [], isPhantom: ListAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ListAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ListAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ListAction.fromBcs( data, ), bcs: ListAction.bcs, fromJSONField: (field: any) => ListAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ListAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ListAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ListAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ListAction.fetch( client, id, ), new: ( fields: ListActionFields, ) => { return new ListAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ListAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ListAction>> { return phantom(ListAction.reified( )); } static get p() { return ListAction.phantom() }

 static get bcs() { return bcs.struct("ListAction", {

 name: String.bcs, nft_id: ID.bcs, price: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ListAction { return ListAction.reified( ).new( { name: decodeFromFields(String.reified(), fields.name), nftId: decodeFromFields(ID.reified(), fields.nft_id), price: decodeFromFields("u64", fields.price) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ListAction { if (!isListAction(item.type)) { throw new Error("not a ListAction type");

 }

 return ListAction.reified( ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), price: decodeFromFieldsWithTypes("u64", item.fields.price) } ) }

 static fromBcs( data: Uint8Array ): ListAction { return ListAction.fromFields( ListAction.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,nftId: this.nftId,price: this.price.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ListAction { return ListAction.reified( ).new( { name: decodeFromJSONField(String.reified(), field.name), nftId: decodeFromJSONField(ID.reified(), field.nftId), price: decodeFromJSONField("u64", field.price) } ) }

 static fromJSON( json: Record<string, any> ): ListAction { if (json.$typeName !== ListAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ListAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ListAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isListAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ListAction object`); } return ListAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ListAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isListAction(data.bcs.type)) { throw new Error(`object at is not a ListAction object`); }

 return ListAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ListAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ListAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ListAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isListAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ListAction object`); }

 return ListAction.fromSuiObjectData( res.data ); }

 }
