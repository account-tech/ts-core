import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== EmptyIntent =============================== */

export function isEmptyIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::empty_intents::EmptyIntent`; }

export interface EmptyIntentFields { dummyField: ToField<"bool"> }

export type EmptyIntentReified = Reified< EmptyIntent, EmptyIntentFields >;

export class EmptyIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::empty_intents::EmptyIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = EmptyIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::empty_intents::EmptyIntent`; readonly $typeArgs: []; readonly $isPhantom = EmptyIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: EmptyIntentFields, ) { this.$fullTypeName = composeSuiType( EmptyIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::empty_intents::EmptyIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): EmptyIntentReified { return { typeName: EmptyIntent.$typeName, fullTypeName: composeSuiType( EmptyIntent.$typeName, ...[] ) as `${typeof PKG_V1}::empty_intents::EmptyIntent`, typeArgs: [ ] as [], isPhantom: EmptyIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => EmptyIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => EmptyIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => EmptyIntent.fromBcs( data, ), bcs: EmptyIntent.bcs, fromJSONField: (field: any) => EmptyIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => EmptyIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => EmptyIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => EmptyIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => EmptyIntent.fetch( client, id, ), new: ( fields: EmptyIntentFields, ) => { return new EmptyIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return EmptyIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<EmptyIntent>> { return phantom(EmptyIntent.reified( )); } static get p() { return EmptyIntent.phantom() }

 static get bcs() { return bcs.struct("EmptyIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): EmptyIntent { return EmptyIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): EmptyIntent { if (!isEmptyIntent(item.type)) { throw new Error("not a EmptyIntent type");

 }

 return EmptyIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): EmptyIntent { return EmptyIntent.fromFields( EmptyIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): EmptyIntent { return EmptyIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): EmptyIntent { if (json.$typeName !== EmptyIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return EmptyIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): EmptyIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isEmptyIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a EmptyIntent object`); } return EmptyIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): EmptyIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isEmptyIntent(data.bcs.type)) { throw new Error(`object at is not a EmptyIntent object`); }

 return EmptyIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return EmptyIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<EmptyIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching EmptyIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isEmptyIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a EmptyIntent object`); }

 return EmptyIntent.fromSuiObjectData( res.data ); }

 }
