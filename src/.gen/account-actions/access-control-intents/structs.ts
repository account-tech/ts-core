import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== BorrowCapIntent =============================== */

export function isBorrowCapIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::access_control_intents::BorrowCapIntent`; }

export interface BorrowCapIntentFields { dummyField: ToField<"bool"> }

export type BorrowCapIntentReified = Reified< BorrowCapIntent, BorrowCapIntentFields >;

export class BorrowCapIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::access_control_intents::BorrowCapIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = BorrowCapIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::access_control_intents::BorrowCapIntent`; readonly $typeArgs: []; readonly $isPhantom = BorrowCapIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: BorrowCapIntentFields, ) { this.$fullTypeName = composeSuiType( BorrowCapIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::access_control_intents::BorrowCapIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): BorrowCapIntentReified { return { typeName: BorrowCapIntent.$typeName, fullTypeName: composeSuiType( BorrowCapIntent.$typeName, ...[] ) as `${typeof PKG_V1}::access_control_intents::BorrowCapIntent`, typeArgs: [ ] as [], isPhantom: BorrowCapIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => BorrowCapIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BorrowCapIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => BorrowCapIntent.fromBcs( data, ), bcs: BorrowCapIntent.bcs, fromJSONField: (field: any) => BorrowCapIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => BorrowCapIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => BorrowCapIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => BorrowCapIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => BorrowCapIntent.fetch( client, id, ), new: ( fields: BorrowCapIntentFields, ) => { return new BorrowCapIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return BorrowCapIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<BorrowCapIntent>> { return phantom(BorrowCapIntent.reified( )); } static get p() { return BorrowCapIntent.phantom() }

 static get bcs() { return bcs.struct("BorrowCapIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): BorrowCapIntent { return BorrowCapIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): BorrowCapIntent { if (!isBorrowCapIntent(item.type)) { throw new Error("not a BorrowCapIntent type");

 }

 return BorrowCapIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): BorrowCapIntent { return BorrowCapIntent.fromFields( BorrowCapIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): BorrowCapIntent { return BorrowCapIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): BorrowCapIntent { if (json.$typeName !== BorrowCapIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return BorrowCapIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): BorrowCapIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBorrowCapIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BorrowCapIntent object`); } return BorrowCapIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): BorrowCapIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBorrowCapIntent(data.bcs.type)) { throw new Error(`object at is not a BorrowCapIntent object`); }

 return BorrowCapIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BorrowCapIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<BorrowCapIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BorrowCapIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBorrowCapIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BorrowCapIntent object`); }

 return BorrowCapIntent.fromSuiObjectData( res.data ); }

 }
