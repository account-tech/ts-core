import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== VersionWitness =============================== */

export function isVersionWitness(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::version_witness::VersionWitness`; }

export interface VersionWitnessFields { packageAddr: ToField<"address"> }

export type VersionWitnessReified = Reified< VersionWitness, VersionWitnessFields >;

export class VersionWitness implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::version_witness::VersionWitness`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VersionWitness.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::version_witness::VersionWitness`; readonly $typeArgs: []; readonly $isPhantom = VersionWitness.$isPhantom;

 readonly packageAddr: ToField<"address">

 private constructor(typeArgs: [], fields: VersionWitnessFields, ) { this.$fullTypeName = composeSuiType( VersionWitness.$typeName, ...typeArgs ) as `${typeof PKG_V1}::version_witness::VersionWitness`; this.$typeArgs = typeArgs;

 this.packageAddr = fields.packageAddr; }

 static reified( ): VersionWitnessReified { return { typeName: VersionWitness.$typeName, fullTypeName: composeSuiType( VersionWitness.$typeName, ...[] ) as `${typeof PKG_V1}::version_witness::VersionWitness`, typeArgs: [ ] as [], isPhantom: VersionWitness.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VersionWitness.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VersionWitness.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VersionWitness.fromBcs( data, ), bcs: VersionWitness.bcs, fromJSONField: (field: any) => VersionWitness.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VersionWitness.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VersionWitness.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VersionWitness.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VersionWitness.fetch( client, id, ), new: ( fields: VersionWitnessFields, ) => { return new VersionWitness( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VersionWitness.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VersionWitness>> { return phantom(VersionWitness.reified( )); } static get p() { return VersionWitness.phantom() }

 static get bcs() { return bcs.struct("VersionWitness", {

 package_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): VersionWitness { return VersionWitness.reified( ).new( { packageAddr: decodeFromFields("address", fields.package_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VersionWitness { if (!isVersionWitness(item.type)) { throw new Error("not a VersionWitness type");

 }

 return VersionWitness.reified( ).new( { packageAddr: decodeFromFieldsWithTypes("address", item.fields.package_addr) } ) }

 static fromBcs( data: Uint8Array ): VersionWitness { return VersionWitness.fromFields( VersionWitness.bcs.parse(data) ) }

 toJSONField() { return {

 packageAddr: this.packageAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VersionWitness { return VersionWitness.reified( ).new( { packageAddr: decodeFromJSONField("address", field.packageAddr) } ) }

 static fromJSON( json: Record<string, any> ): VersionWitness { if (json.$typeName !== VersionWitness.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VersionWitness.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VersionWitness { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVersionWitness(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VersionWitness object`); } return VersionWitness.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VersionWitness { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVersionWitness(data.bcs.type)) { throw new Error(`object at is not a VersionWitness object`); }

 return VersionWitness.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VersionWitness.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VersionWitness> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VersionWitness object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVersionWitness(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VersionWitness object`); }

 return VersionWitness.fromSuiObjectData( res.data ); }

 }
