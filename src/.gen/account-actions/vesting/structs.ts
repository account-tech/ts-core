import {Balance} from "../../_dependencies/source/0x2/balance/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Vesting =============================== */

export function isVesting(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::vesting::Vesting` + '<'); }

export interface VestingFields<CoinType extends PhantomTypeArgument> { id: ToField<UID>; balance: ToField<Balance<CoinType>>; lastClaimed: ToField<"u64">; startTimestamp: ToField<"u64">; endTimestamp: ToField<"u64">; recipient: ToField<"address"> }

export type VestingReified<CoinType extends PhantomTypeArgument> = Reified< Vesting<CoinType>, VestingFields<CoinType> >;

export class Vesting<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vesting::Vesting`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = Vesting.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vesting::Vesting<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = Vesting.$isPhantom;

 readonly id: ToField<UID>; readonly balance: ToField<Balance<CoinType>>; readonly lastClaimed: ToField<"u64">; readonly startTimestamp: ToField<"u64">; readonly endTimestamp: ToField<"u64">; readonly recipient: ToField<"address">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: VestingFields<CoinType>, ) { this.$fullTypeName = composeSuiType( Vesting.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vesting::Vesting<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.balance = fields.balance;; this.lastClaimed = fields.lastClaimed;; this.startTimestamp = fields.startTimestamp;; this.endTimestamp = fields.endTimestamp;; this.recipient = fields.recipient; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): VestingReified<ToPhantomTypeArgument<CoinType>> { return { typeName: Vesting.$typeName, fullTypeName: composeSuiType( Vesting.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::vesting::Vesting<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: Vesting.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => Vesting.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Vesting.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => Vesting.fromBcs( CoinType, data, ), bcs: Vesting.bcs, fromJSONField: (field: any) => Vesting.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => Vesting.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => Vesting.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => Vesting.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => Vesting.fetch( client, CoinType, id, ), new: ( fields: VestingFields<ToPhantomTypeArgument<CoinType>>, ) => { return new Vesting( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Vesting.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<Vesting<ToPhantomTypeArgument<CoinType>>>> { return phantom(Vesting.reified( CoinType )); } static get p() { return Vesting.phantom }

 static get bcs() { return bcs.struct("Vesting", {

 id: UID.bcs, balance: Balance.bcs, last_claimed: bcs.u64(), start_timestamp: bcs.u64(), end_timestamp: bcs.u64(), recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): Vesting<ToPhantomTypeArgument<CoinType>> { return Vesting.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), balance: decodeFromFields(Balance.reified(typeArg), fields.balance), lastClaimed: decodeFromFields("u64", fields.last_claimed), startTimestamp: decodeFromFields("u64", fields.start_timestamp), endTimestamp: decodeFromFields("u64", fields.end_timestamp), recipient: decodeFromFields("address", fields.recipient) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): Vesting<ToPhantomTypeArgument<CoinType>> { if (!isVesting(item.type)) { throw new Error("not a Vesting type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Vesting.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance), lastClaimed: decodeFromFieldsWithTypes("u64", item.fields.last_claimed), startTimestamp: decodeFromFieldsWithTypes("u64", item.fields.start_timestamp), endTimestamp: decodeFromFieldsWithTypes("u64", item.fields.end_timestamp), recipient: decodeFromFieldsWithTypes("address", item.fields.recipient) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): Vesting<ToPhantomTypeArgument<CoinType>> { return Vesting.fromFields( typeArg, Vesting.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,balance: this.balance.toJSONField(),lastClaimed: this.lastClaimed.toString(),startTimestamp: this.startTimestamp.toString(),endTimestamp: this.endTimestamp.toString(),recipient: this.recipient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): Vesting<ToPhantomTypeArgument<CoinType>> { return Vesting.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), balance: decodeFromJSONField(Balance.reified(typeArg), field.balance), lastClaimed: decodeFromJSONField("u64", field.lastClaimed), startTimestamp: decodeFromJSONField("u64", field.startTimestamp), endTimestamp: decodeFromJSONField("u64", field.endTimestamp), recipient: decodeFromJSONField("address", field.recipient) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): Vesting<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== Vesting.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Vesting.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Vesting.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): Vesting<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVesting(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Vesting object`); } return Vesting.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): Vesting<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVesting(data.bcs.type)) { throw new Error(`object at is not a Vesting object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Vesting.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Vesting.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<Vesting<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Vesting object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVesting(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Vesting object`); }

 return Vesting.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== ClaimCap =============================== */

export function isClaimCap(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vesting::ClaimCap`; }

export interface ClaimCapFields { id: ToField<UID>; vestingId: ToField<ID> }

export type ClaimCapReified = Reified< ClaimCap, ClaimCapFields >;

export class ClaimCap implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vesting::ClaimCap`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ClaimCap.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vesting::ClaimCap`; readonly $typeArgs: []; readonly $isPhantom = ClaimCap.$isPhantom;

 readonly id: ToField<UID>; readonly vestingId: ToField<ID>

 private constructor(typeArgs: [], fields: ClaimCapFields, ) { this.$fullTypeName = composeSuiType( ClaimCap.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vesting::ClaimCap`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.vestingId = fields.vestingId; }

 static reified( ): ClaimCapReified { return { typeName: ClaimCap.$typeName, fullTypeName: composeSuiType( ClaimCap.$typeName, ...[] ) as `${typeof PKG_V1}::vesting::ClaimCap`, typeArgs: [ ] as [], isPhantom: ClaimCap.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ClaimCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ClaimCap.fromBcs( data, ), bcs: ClaimCap.bcs, fromJSONField: (field: any) => ClaimCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ClaimCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimCap.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ClaimCap.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ClaimCap.fetch( client, id, ), new: ( fields: ClaimCapFields, ) => { return new ClaimCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ClaimCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ClaimCap>> { return phantom(ClaimCap.reified( )); } static get p() { return ClaimCap.phantom() }

 static get bcs() { return bcs.struct("ClaimCap", {

 id: UID.bcs, vesting_id: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): ClaimCap { return ClaimCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), vestingId: decodeFromFields(ID.reified(), fields.vesting_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ClaimCap { if (!isClaimCap(item.type)) { throw new Error("not a ClaimCap type");

 }

 return ClaimCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), vestingId: decodeFromFieldsWithTypes(ID.reified(), item.fields.vesting_id) } ) }

 static fromBcs( data: Uint8Array ): ClaimCap { return ClaimCap.fromFields( ClaimCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,vestingId: this.vestingId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ClaimCap { return ClaimCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), vestingId: decodeFromJSONField(ID.reified(), field.vestingId) } ) }

 static fromJSON( json: Record<string, any> ): ClaimCap { if (json.$typeName !== ClaimCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ClaimCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ClaimCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ClaimCap object`); } return ClaimCap.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ClaimCap { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isClaimCap(data.bcs.type)) { throw new Error(`object at is not a ClaimCap object`); }

 return ClaimCap.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ClaimCap.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ClaimCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ClaimCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ClaimCap object`); }

 return ClaimCap.fromSuiObjectData( res.data ); }

 }

/* ============================== VestAction =============================== */

export function isVestAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vesting::VestAction`; }

export interface VestActionFields { startTimestamp: ToField<"u64">; endTimestamp: ToField<"u64">; recipient: ToField<"address"> }

export type VestActionReified = Reified< VestAction, VestActionFields >;

export class VestAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vesting::VestAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VestAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vesting::VestAction`; readonly $typeArgs: []; readonly $isPhantom = VestAction.$isPhantom;

 readonly startTimestamp: ToField<"u64">; readonly endTimestamp: ToField<"u64">; readonly recipient: ToField<"address">

 private constructor(typeArgs: [], fields: VestActionFields, ) { this.$fullTypeName = composeSuiType( VestAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vesting::VestAction`; this.$typeArgs = typeArgs;

 this.startTimestamp = fields.startTimestamp;; this.endTimestamp = fields.endTimestamp;; this.recipient = fields.recipient; }

 static reified( ): VestActionReified { return { typeName: VestAction.$typeName, fullTypeName: composeSuiType( VestAction.$typeName, ...[] ) as `${typeof PKG_V1}::vesting::VestAction`, typeArgs: [ ] as [], isPhantom: VestAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VestAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VestAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VestAction.fromBcs( data, ), bcs: VestAction.bcs, fromJSONField: (field: any) => VestAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VestAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VestAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VestAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VestAction.fetch( client, id, ), new: ( fields: VestActionFields, ) => { return new VestAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VestAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VestAction>> { return phantom(VestAction.reified( )); } static get p() { return VestAction.phantom() }

 static get bcs() { return bcs.struct("VestAction", {

 start_timestamp: bcs.u64(), end_timestamp: bcs.u64(), recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): VestAction { return VestAction.reified( ).new( { startTimestamp: decodeFromFields("u64", fields.start_timestamp), endTimestamp: decodeFromFields("u64", fields.end_timestamp), recipient: decodeFromFields("address", fields.recipient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VestAction { if (!isVestAction(item.type)) { throw new Error("not a VestAction type");

 }

 return VestAction.reified( ).new( { startTimestamp: decodeFromFieldsWithTypes("u64", item.fields.start_timestamp), endTimestamp: decodeFromFieldsWithTypes("u64", item.fields.end_timestamp), recipient: decodeFromFieldsWithTypes("address", item.fields.recipient) } ) }

 static fromBcs( data: Uint8Array ): VestAction { return VestAction.fromFields( VestAction.bcs.parse(data) ) }

 toJSONField() { return {

 startTimestamp: this.startTimestamp.toString(),endTimestamp: this.endTimestamp.toString(),recipient: this.recipient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VestAction { return VestAction.reified( ).new( { startTimestamp: decodeFromJSONField("u64", field.startTimestamp), endTimestamp: decodeFromJSONField("u64", field.endTimestamp), recipient: decodeFromJSONField("address", field.recipient) } ) }

 static fromJSON( json: Record<string, any> ): VestAction { if (json.$typeName !== VestAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VestAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VestAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVestAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VestAction object`); } return VestAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VestAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVestAction(data.bcs.type)) { throw new Error(`object at is not a VestAction object`); }

 return VestAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VestAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VestAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VestAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVestAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VestAction object`); }

 return VestAction.fromSuiObjectData( res.data ); }

 }
