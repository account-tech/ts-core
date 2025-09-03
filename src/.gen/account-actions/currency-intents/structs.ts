import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== DisableRulesIntent =============================== */

export function isDisableRulesIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::currency_intents::DisableRulesIntent`; }

export interface DisableRulesIntentFields { dummyField: ToField<"bool"> }

export type DisableRulesIntentReified = Reified< DisableRulesIntent, DisableRulesIntentFields >;

export class DisableRulesIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency_intents::DisableRulesIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = DisableRulesIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency_intents::DisableRulesIntent`; readonly $typeArgs: []; readonly $isPhantom = DisableRulesIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: DisableRulesIntentFields, ) { this.$fullTypeName = composeSuiType( DisableRulesIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency_intents::DisableRulesIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): DisableRulesIntentReified { return { typeName: DisableRulesIntent.$typeName, fullTypeName: composeSuiType( DisableRulesIntent.$typeName, ...[] ) as `${typeof PKG_V1}::currency_intents::DisableRulesIntent`, typeArgs: [ ] as [], isPhantom: DisableRulesIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DisableRulesIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DisableRulesIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DisableRulesIntent.fromBcs( data, ), bcs: DisableRulesIntent.bcs, fromJSONField: (field: any) => DisableRulesIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DisableRulesIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DisableRulesIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => DisableRulesIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => DisableRulesIntent.fetch( client, id, ), new: ( fields: DisableRulesIntentFields, ) => { return new DisableRulesIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DisableRulesIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DisableRulesIntent>> { return phantom(DisableRulesIntent.reified( )); } static get p() { return DisableRulesIntent.phantom() }

 static get bcs() { return bcs.struct("DisableRulesIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): DisableRulesIntent { return DisableRulesIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DisableRulesIntent { if (!isDisableRulesIntent(item.type)) { throw new Error("not a DisableRulesIntent type");

 }

 return DisableRulesIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): DisableRulesIntent { return DisableRulesIntent.fromFields( DisableRulesIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DisableRulesIntent { return DisableRulesIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): DisableRulesIntent { if (json.$typeName !== DisableRulesIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DisableRulesIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DisableRulesIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDisableRulesIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DisableRulesIntent object`); } return DisableRulesIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): DisableRulesIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDisableRulesIntent(data.bcs.type)) { throw new Error(`object at is not a DisableRulesIntent object`); }

 return DisableRulesIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DisableRulesIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<DisableRulesIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DisableRulesIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDisableRulesIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DisableRulesIntent object`); }

 return DisableRulesIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== UpdateMetadataIntent =============================== */

export function isUpdateMetadataIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::currency_intents::UpdateMetadataIntent`; }

export interface UpdateMetadataIntentFields { dummyField: ToField<"bool"> }

export type UpdateMetadataIntentReified = Reified< UpdateMetadataIntent, UpdateMetadataIntentFields >;

export class UpdateMetadataIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency_intents::UpdateMetadataIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = UpdateMetadataIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency_intents::UpdateMetadataIntent`; readonly $typeArgs: []; readonly $isPhantom = UpdateMetadataIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: UpdateMetadataIntentFields, ) { this.$fullTypeName = composeSuiType( UpdateMetadataIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency_intents::UpdateMetadataIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): UpdateMetadataIntentReified { return { typeName: UpdateMetadataIntent.$typeName, fullTypeName: composeSuiType( UpdateMetadataIntent.$typeName, ...[] ) as `${typeof PKG_V1}::currency_intents::UpdateMetadataIntent`, typeArgs: [ ] as [], isPhantom: UpdateMetadataIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpdateMetadataIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateMetadataIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpdateMetadataIntent.fromBcs( data, ), bcs: UpdateMetadataIntent.bcs, fromJSONField: (field: any) => UpdateMetadataIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpdateMetadataIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateMetadataIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => UpdateMetadataIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => UpdateMetadataIntent.fetch( client, id, ), new: ( fields: UpdateMetadataIntentFields, ) => { return new UpdateMetadataIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateMetadataIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpdateMetadataIntent>> { return phantom(UpdateMetadataIntent.reified( )); } static get p() { return UpdateMetadataIntent.phantom() }

 static get bcs() { return bcs.struct("UpdateMetadataIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): UpdateMetadataIntent { return UpdateMetadataIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpdateMetadataIntent { if (!isUpdateMetadataIntent(item.type)) { throw new Error("not a UpdateMetadataIntent type");

 }

 return UpdateMetadataIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): UpdateMetadataIntent { return UpdateMetadataIntent.fromFields( UpdateMetadataIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpdateMetadataIntent { return UpdateMetadataIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): UpdateMetadataIntent { if (json.$typeName !== UpdateMetadataIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpdateMetadataIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpdateMetadataIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateMetadataIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateMetadataIntent object`); } return UpdateMetadataIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): UpdateMetadataIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpdateMetadataIntent(data.bcs.type)) { throw new Error(`object at is not a UpdateMetadataIntent object`); }

 return UpdateMetadataIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpdateMetadataIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpdateMetadataIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateMetadataIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateMetadataIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateMetadataIntent object`); }

 return UpdateMetadataIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== MintAndTransferIntent =============================== */

export function isMintAndTransferIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::currency_intents::MintAndTransferIntent`; }

export interface MintAndTransferIntentFields { dummyField: ToField<"bool"> }

export type MintAndTransferIntentReified = Reified< MintAndTransferIntent, MintAndTransferIntentFields >;

export class MintAndTransferIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency_intents::MintAndTransferIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MintAndTransferIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency_intents::MintAndTransferIntent`; readonly $typeArgs: []; readonly $isPhantom = MintAndTransferIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: MintAndTransferIntentFields, ) { this.$fullTypeName = composeSuiType( MintAndTransferIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency_intents::MintAndTransferIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): MintAndTransferIntentReified { return { typeName: MintAndTransferIntent.$typeName, fullTypeName: composeSuiType( MintAndTransferIntent.$typeName, ...[] ) as `${typeof PKG_V1}::currency_intents::MintAndTransferIntent`, typeArgs: [ ] as [], isPhantom: MintAndTransferIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MintAndTransferIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MintAndTransferIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MintAndTransferIntent.fromBcs( data, ), bcs: MintAndTransferIntent.bcs, fromJSONField: (field: any) => MintAndTransferIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MintAndTransferIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MintAndTransferIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MintAndTransferIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MintAndTransferIntent.fetch( client, id, ), new: ( fields: MintAndTransferIntentFields, ) => { return new MintAndTransferIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MintAndTransferIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MintAndTransferIntent>> { return phantom(MintAndTransferIntent.reified( )); } static get p() { return MintAndTransferIntent.phantom() }

 static get bcs() { return bcs.struct("MintAndTransferIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): MintAndTransferIntent { return MintAndTransferIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MintAndTransferIntent { if (!isMintAndTransferIntent(item.type)) { throw new Error("not a MintAndTransferIntent type");

 }

 return MintAndTransferIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): MintAndTransferIntent { return MintAndTransferIntent.fromFields( MintAndTransferIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MintAndTransferIntent { return MintAndTransferIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): MintAndTransferIntent { if (json.$typeName !== MintAndTransferIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MintAndTransferIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MintAndTransferIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMintAndTransferIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MintAndTransferIntent object`); } return MintAndTransferIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MintAndTransferIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMintAndTransferIntent(data.bcs.type)) { throw new Error(`object at is not a MintAndTransferIntent object`); }

 return MintAndTransferIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MintAndTransferIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MintAndTransferIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MintAndTransferIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMintAndTransferIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MintAndTransferIntent object`); }

 return MintAndTransferIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== MintAndVestIntent =============================== */

export function isMintAndVestIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::currency_intents::MintAndVestIntent`; }

export interface MintAndVestIntentFields { dummyField: ToField<"bool"> }

export type MintAndVestIntentReified = Reified< MintAndVestIntent, MintAndVestIntentFields >;

export class MintAndVestIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency_intents::MintAndVestIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = MintAndVestIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency_intents::MintAndVestIntent`; readonly $typeArgs: []; readonly $isPhantom = MintAndVestIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: MintAndVestIntentFields, ) { this.$fullTypeName = composeSuiType( MintAndVestIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency_intents::MintAndVestIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): MintAndVestIntentReified { return { typeName: MintAndVestIntent.$typeName, fullTypeName: composeSuiType( MintAndVestIntent.$typeName, ...[] ) as `${typeof PKG_V1}::currency_intents::MintAndVestIntent`, typeArgs: [ ] as [], isPhantom: MintAndVestIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MintAndVestIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MintAndVestIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MintAndVestIntent.fromBcs( data, ), bcs: MintAndVestIntent.bcs, fromJSONField: (field: any) => MintAndVestIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MintAndVestIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MintAndVestIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => MintAndVestIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => MintAndVestIntent.fetch( client, id, ), new: ( fields: MintAndVestIntentFields, ) => { return new MintAndVestIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MintAndVestIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MintAndVestIntent>> { return phantom(MintAndVestIntent.reified( )); } static get p() { return MintAndVestIntent.phantom() }

 static get bcs() { return bcs.struct("MintAndVestIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): MintAndVestIntent { return MintAndVestIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MintAndVestIntent { if (!isMintAndVestIntent(item.type)) { throw new Error("not a MintAndVestIntent type");

 }

 return MintAndVestIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): MintAndVestIntent { return MintAndVestIntent.fromFields( MintAndVestIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MintAndVestIntent { return MintAndVestIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): MintAndVestIntent { if (json.$typeName !== MintAndVestIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MintAndVestIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MintAndVestIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMintAndVestIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MintAndVestIntent object`); } return MintAndVestIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): MintAndVestIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMintAndVestIntent(data.bcs.type)) { throw new Error(`object at is not a MintAndVestIntent object`); }

 return MintAndVestIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MintAndVestIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<MintAndVestIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MintAndVestIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMintAndVestIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MintAndVestIntent object`); }

 return MintAndVestIntent.fromSuiObjectData( res.data ); }

 }

/* ============================== WithdrawAndBurnIntent =============================== */

export function isWithdrawAndBurnIntent(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::currency_intents::WithdrawAndBurnIntent`; }

export interface WithdrawAndBurnIntentFields { dummyField: ToField<"bool"> }

export type WithdrawAndBurnIntentReified = Reified< WithdrawAndBurnIntent, WithdrawAndBurnIntentFields >;

export class WithdrawAndBurnIntent implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency_intents::WithdrawAndBurnIntent`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WithdrawAndBurnIntent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency_intents::WithdrawAndBurnIntent`; readonly $typeArgs: []; readonly $isPhantom = WithdrawAndBurnIntent.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: WithdrawAndBurnIntentFields, ) { this.$fullTypeName = composeSuiType( WithdrawAndBurnIntent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency_intents::WithdrawAndBurnIntent`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): WithdrawAndBurnIntentReified { return { typeName: WithdrawAndBurnIntent.$typeName, fullTypeName: composeSuiType( WithdrawAndBurnIntent.$typeName, ...[] ) as `${typeof PKG_V1}::currency_intents::WithdrawAndBurnIntent`, typeArgs: [ ] as [], isPhantom: WithdrawAndBurnIntent.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WithdrawAndBurnIntent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawAndBurnIntent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WithdrawAndBurnIntent.fromBcs( data, ), bcs: WithdrawAndBurnIntent.bcs, fromJSONField: (field: any) => WithdrawAndBurnIntent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WithdrawAndBurnIntent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawAndBurnIntent.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrawAndBurnIntent.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WithdrawAndBurnIntent.fetch( client, id, ), new: ( fields: WithdrawAndBurnIntentFields, ) => { return new WithdrawAndBurnIntent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawAndBurnIntent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WithdrawAndBurnIntent>> { return phantom(WithdrawAndBurnIntent.reified( )); } static get p() { return WithdrawAndBurnIntent.phantom() }

 static get bcs() { return bcs.struct("WithdrawAndBurnIntent", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): WithdrawAndBurnIntent { return WithdrawAndBurnIntent.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WithdrawAndBurnIntent { if (!isWithdrawAndBurnIntent(item.type)) { throw new Error("not a WithdrawAndBurnIntent type");

 }

 return WithdrawAndBurnIntent.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): WithdrawAndBurnIntent { return WithdrawAndBurnIntent.fromFields( WithdrawAndBurnIntent.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WithdrawAndBurnIntent { return WithdrawAndBurnIntent.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): WithdrawAndBurnIntent { if (json.$typeName !== WithdrawAndBurnIntent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WithdrawAndBurnIntent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WithdrawAndBurnIntent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawAndBurnIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawAndBurnIntent object`); } return WithdrawAndBurnIntent.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WithdrawAndBurnIntent { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrawAndBurnIntent(data.bcs.type)) { throw new Error(`object at is not a WithdrawAndBurnIntent object`); }

 return WithdrawAndBurnIntent.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrawAndBurnIntent.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WithdrawAndBurnIntent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawAndBurnIntent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawAndBurnIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawAndBurnIntent object`); }

 return WithdrawAndBurnIntent.fromSuiObjectData( res.data ); }

 }
