import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== UpgradePackageIntent =============================== */

export function isUpgradePackageIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade_intents::UpgradePackageIntent`; }

export interface UpgradePackageIntentFields { dummyField: ToField<"bool"> }

export type UpgradePackageIntentReified = Reified< UpgradePackageIntent, UpgradePackageIntentFields >;

export class UpgradePackageIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade_intents::UpgradePackageIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpgradePackageIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade_intents::UpgradePackageIntent`; readonly $typeArgs: []; readonly $isPhantom = UpgradePackageIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: UpgradePackageIntentFields, ) { this.$fullTypeName = composeSuiType( UpgradePackageIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade_intents::UpgradePackageIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): UpgradePackageIntentReified { return { typeName: UpgradePackageIntent.$typeName, fullTypeName: composeSuiType( UpgradePackageIntent.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade_intents::UpgradePackageIntent`, typeArgs: [ ] as [], isPhantom: UpgradePackageIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpgradePackageIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpgradePackageIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpgradePackageIntent.fromBcs( data, ), bcs: UpgradePackageIntent.bcs, fromJSONField: (field: any) => UpgradePackageIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpgradePackageIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpgradePackageIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpgradePackageIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpgradePackageIntent.fetch( client, id, ), new: ( fields: UpgradePackageIntentFields, ) => { return new UpgradePackageIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpgradePackageIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpgradePackageIntent>> { return phantom(UpgradePackageIntent.reified( )); } static get p() { return UpgradePackageIntent.phantom() }

 static get bcs() { return bcs.struct("UpgradePackageIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): UpgradePackageIntent { return UpgradePackageIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpgradePackageIntent { if (!isUpgradePackageIntent(item.type)) { throw new Error("not a UpgradePackageIntent type");

 }

 return UpgradePackageIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): UpgradePackageIntent { return UpgradePackageIntent.fromFields( UpgradePackageIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpgradePackageIntent { return UpgradePackageIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): UpgradePackageIntent { if (json.$typeName !== UpgradePackageIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpgradePackageIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpgradePackageIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpgradePackageIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpgradePackageIntent object`); } return UpgradePackageIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpgradePackageIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpgradePackageIntent(data.bcs.type)) { throw new Error(`object at is not a UpgradePackageIntent object`); }

 return UpgradePackageIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpgradePackageIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpgradePackageIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpgradePackageIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpgradePackageIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpgradePackageIntent object`); }

 return UpgradePackageIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== RestrictPolicyIntent =============================== */

export function isRestrictPolicyIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::package_upgrade_intents::RestrictPolicyIntent`; }

export interface RestrictPolicyIntentFields { dummyField: ToField<"bool"> }

export type RestrictPolicyIntentReified = Reified< RestrictPolicyIntent, RestrictPolicyIntentFields >;

export class RestrictPolicyIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::package_upgrade_intents::RestrictPolicyIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = RestrictPolicyIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::package_upgrade_intents::RestrictPolicyIntent`; readonly $typeArgs: []; readonly $isPhantom = RestrictPolicyIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: RestrictPolicyIntentFields, ) { this.$fullTypeName = composeSuiType( RestrictPolicyIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::package_upgrade_intents::RestrictPolicyIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): RestrictPolicyIntentReified { return { typeName: RestrictPolicyIntent.$typeName, fullTypeName: composeSuiType( RestrictPolicyIntent.$typeName, ...[] ) as `${typeof PKG_V1}::package_upgrade_intents::RestrictPolicyIntent`, typeArgs: [ ] as [], isPhantom: RestrictPolicyIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => RestrictPolicyIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => RestrictPolicyIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => RestrictPolicyIntent.fromBcs( data, ), bcs: RestrictPolicyIntent.bcs, fromJSONField: (field: any) => RestrictPolicyIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => RestrictPolicyIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => RestrictPolicyIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => RestrictPolicyIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => RestrictPolicyIntent.fetch( client, id, ), new: ( fields: RestrictPolicyIntentFields, ) => { return new RestrictPolicyIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return RestrictPolicyIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<RestrictPolicyIntent>> { return phantom(RestrictPolicyIntent.reified( )); } static get p() { return RestrictPolicyIntent.phantom() }

 static get bcs() { return bcs.struct("RestrictPolicyIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): RestrictPolicyIntent { return RestrictPolicyIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): RestrictPolicyIntent { if (!isRestrictPolicyIntent(item.type)) { throw new Error("not a RestrictPolicyIntent type");

 }

 return RestrictPolicyIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): RestrictPolicyIntent { return RestrictPolicyIntent.fromFields( RestrictPolicyIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): RestrictPolicyIntent { return RestrictPolicyIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): RestrictPolicyIntent { if (json.$typeName !== RestrictPolicyIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return RestrictPolicyIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): RestrictPolicyIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRestrictPolicyIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a RestrictPolicyIntent object`); } return RestrictPolicyIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): RestrictPolicyIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRestrictPolicyIntent(data.bcs.type)) { throw new Error(`object at is not a RestrictPolicyIntent object`); }

 return RestrictPolicyIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return RestrictPolicyIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<RestrictPolicyIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching RestrictPolicyIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRestrictPolicyIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a RestrictPolicyIntent object`); }

 return RestrictPolicyIntent.fromSuiObjectData( res.data ); }

 }
