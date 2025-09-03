import {String} from "../../_dependencies/source/0x1/string/structs";
import {VecMap} from "../../_dependencies/source/0x2/vec-map/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Metadata =============================== */

export function isMetadata(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::metadata::Metadata`; }

export interface MetadataFields { inner: ToField<VecMap<String, String>> }

export type MetadataReified = Reified< Metadata, MetadataFields >;

export class Metadata implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::metadata::Metadata`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Metadata.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::metadata::Metadata`; readonly $typeArgs: []; readonly $isPhantom = Metadata.$isPhantom;

 readonly inner: ToField<VecMap<String, String>>

 private constructor(typeArgs: [], fields: MetadataFields, ) { this.$fullTypeName = composeSuiType( Metadata.$typeName, ...typeArgs ) as `${typeof PKG_V1}::metadata::Metadata`; this.$typeArgs = typeArgs;

 this.inner = fields.inner; }

 static reified( ): MetadataReified { return { typeName: Metadata.$typeName, fullTypeName: composeSuiType( Metadata.$typeName, ...[] ) as `${typeof PKG_V1}::metadata::Metadata`, typeArgs: [ ] as [], isPhantom: Metadata.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Metadata.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Metadata.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Metadata.fromBcs( data, ), bcs: Metadata.bcs, fromJSONField: (field: any) => Metadata.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Metadata.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Metadata.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Metadata.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Metadata.fetch( client, id, ), new: ( fields: MetadataFields, ) => { return new Metadata( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Metadata.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Metadata>> { return phantom(Metadata.reified( )); } static get p() { return Metadata.phantom() }

 static get bcs() { return bcs.struct("Metadata", {

 inner: VecMap.bcs(String.bcs, String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Metadata { return Metadata.reified( ).new( { inner: decodeFromFields(VecMap.reified(String.reified(), String.reified()), fields.inner) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Metadata { if (!isMetadata(item.type)) { throw new Error("not a Metadata type");

 }

 return Metadata.reified( ).new( { inner: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), String.reified()), item.fields.inner) } ) }

 static fromBcs( data: Uint8Array ): Metadata { return Metadata.fromFields( Metadata.bcs.parse(data) ) }

 toJSONField() { return {

 inner: this.inner.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Metadata { return Metadata.reified( ).new( { inner: decodeFromJSONField(VecMap.reified(String.reified(), String.reified()), field.inner) } ) }

 static fromJSON( json: Record<string, any> ): Metadata { if (json.$typeName !== Metadata.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Metadata.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Metadata { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMetadata(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Metadata object`); } return Metadata.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Metadata { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMetadata(data.bcs.type)) { throw new Error(`object at is not a Metadata object`); }

 return Metadata.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Metadata.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Metadata> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Metadata object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMetadata(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Metadata object`); }

 return Metadata.fromSuiObjectData( res.data ); }

 }
