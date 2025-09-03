import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== V1 =============================== */

export function isV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::version::V1`; }

export interface V1Fields { dummyField: ToField<"bool"> }

export type V1Reified = Reified< V1, V1Fields >;

export class V1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::version::V1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = V1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::version::V1`; readonly $typeArgs: []; readonly $isPhantom = V1.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: V1Fields, ) { this.$fullTypeName = composeSuiType( V1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::version::V1`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): V1Reified { return { typeName: V1.$typeName, fullTypeName: composeSuiType( V1.$typeName, ...[] ) as `${typeof PKG_V1}::version::V1`, typeArgs: [ ] as [], isPhantom: V1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => V1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => V1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => V1.fromBcs( data, ), bcs: V1.bcs, fromJSONField: (field: any) => V1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => V1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => V1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => V1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => V1.fetch( client, id, ), new: ( fields: V1Fields, ) => { return new V1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return V1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<V1>> { return phantom(V1.reified( )); } static get p() { return V1.phantom() }

 static get bcs() { return bcs.struct("V1", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): V1 { return V1.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): V1 { if (!isV1(item.type)) { throw new Error("not a V1 type");

 }

 return V1.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): V1 { return V1.fromFields( V1.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): V1 { return V1.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): V1 { if (json.$typeName !== V1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return V1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): V1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a V1 object`); } return V1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): V1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isV1(data.bcs.type)) { throw new Error(`object at is not a V1 object`); }

 return V1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return V1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<V1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching V1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a V1 object`); }

 return V1.fromSuiObjectData( res.data ); }

 }
