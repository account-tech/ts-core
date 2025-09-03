import {String} from "../../_dependencies/source/0x1/string/structs";
import {Bag} from "../../_dependencies/source/0x2/bag/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== VaultKey =============================== */

export function isVaultKey(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vault::VaultKey`; }

export interface VaultKeyFields { pos0: ToField<String> }

export type VaultKeyReified = Reified< VaultKey, VaultKeyFields >;

export class VaultKey implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::VaultKey`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = VaultKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::VaultKey`; readonly $typeArgs: []; readonly $isPhantom = VaultKey.$isPhantom;

 readonly pos0: ToField<String>

 private constructor(typeArgs: [], fields: VaultKeyFields, ) { this.$fullTypeName = composeSuiType( VaultKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::VaultKey`; this.$typeArgs = typeArgs;

 this.pos0 = fields.pos0; }

 static reified( ): VaultKeyReified { return { typeName: VaultKey.$typeName, fullTypeName: composeSuiType( VaultKey.$typeName, ...[] ) as `${typeof PKG_V1}::vault::VaultKey`, typeArgs: [ ] as [], isPhantom: VaultKey.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => VaultKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => VaultKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => VaultKey.fromBcs( data, ), bcs: VaultKey.bcs, fromJSONField: (field: any) => VaultKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => VaultKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => VaultKey.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => VaultKey.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => VaultKey.fetch( client, id, ), new: ( fields: VaultKeyFields, ) => { return new VaultKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return VaultKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<VaultKey>> { return phantom(VaultKey.reified( )); } static get p() { return VaultKey.phantom() }

 static get bcs() { return bcs.struct("VaultKey", {

 pos0: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): VaultKey { return VaultKey.reified( ).new( { pos0: decodeFromFields(String.reified(), fields.pos0) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): VaultKey { if (!isVaultKey(item.type)) { throw new Error("not a VaultKey type");

 }

 return VaultKey.reified( ).new( { pos0: decodeFromFieldsWithTypes(String.reified(), item.fields.pos0) } ) }

 static fromBcs( data: Uint8Array ): VaultKey { return VaultKey.fromFields( VaultKey.bcs.parse(data) ) }

 toJSONField() { return {

 pos0: this.pos0,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): VaultKey { return VaultKey.reified( ).new( { pos0: decodeFromJSONField(String.reified(), field.pos0) } ) }

 static fromJSON( json: Record<string, any> ): VaultKey { if (json.$typeName !== VaultKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return VaultKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): VaultKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVaultKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a VaultKey object`); } return VaultKey.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): VaultKey { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVaultKey(data.bcs.type)) { throw new Error(`object at is not a VaultKey object`); }

 return VaultKey.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return VaultKey.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<VaultKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching VaultKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVaultKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a VaultKey object`); }

 return VaultKey.fromSuiObjectData( res.data ); }

 }

/* ============================== Vault =============================== */

export function isVault(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::vault::Vault`; }

export interface VaultFields { bag: ToField<Bag> }

export type VaultReified = Reified< Vault, VaultFields >;

export class Vault implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::Vault`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Vault.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::Vault`; readonly $typeArgs: []; readonly $isPhantom = Vault.$isPhantom;

 readonly bag: ToField<Bag>

 private constructor(typeArgs: [], fields: VaultFields, ) { this.$fullTypeName = composeSuiType( Vault.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::Vault`; this.$typeArgs = typeArgs;

 this.bag = fields.bag; }

 static reified( ): VaultReified { return { typeName: Vault.$typeName, fullTypeName: composeSuiType( Vault.$typeName, ...[] ) as `${typeof PKG_V1}::vault::Vault`, typeArgs: [ ] as [], isPhantom: Vault.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Vault.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Vault.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Vault.fromBcs( data, ), bcs: Vault.bcs, fromJSONField: (field: any) => Vault.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Vault.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Vault.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Vault.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Vault.fetch( client, id, ), new: ( fields: VaultFields, ) => { return new Vault( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Vault.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Vault>> { return phantom(Vault.reified( )); } static get p() { return Vault.phantom() }

 static get bcs() { return bcs.struct("Vault", {

 bag: Bag.bcs

}) };

 static fromFields( fields: Record<string, any> ): Vault { return Vault.reified( ).new( { bag: decodeFromFields(Bag.reified(), fields.bag) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Vault { if (!isVault(item.type)) { throw new Error("not a Vault type");

 }

 return Vault.reified( ).new( { bag: decodeFromFieldsWithTypes(Bag.reified(), item.fields.bag) } ) }

 static fromBcs( data: Uint8Array ): Vault { return Vault.fromFields( Vault.bcs.parse(data) ) }

 toJSONField() { return {

 bag: this.bag.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Vault { return Vault.reified( ).new( { bag: decodeFromJSONField(Bag.reified(), field.bag) } ) }

 static fromJSON( json: Record<string, any> ): Vault { if (json.$typeName !== Vault.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Vault.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Vault { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isVault(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Vault object`); } return Vault.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Vault { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isVault(data.bcs.type)) { throw new Error(`object at is not a Vault object`); }

 return Vault.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Vault.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Vault> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Vault object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isVault(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Vault object`); }

 return Vault.fromSuiObjectData( res.data ); }

 }

/* ============================== DepositAction =============================== */

export function isDepositAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::vault::DepositAction` + '<'); }

export interface DepositActionFields<CoinType extends PhantomTypeArgument> { name: ToField<String>; amount: ToField<"u64"> }

export type DepositActionReified<CoinType extends PhantomTypeArgument> = Reified< DepositAction<CoinType>, DepositActionFields<CoinType> >;

export class DepositAction<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::DepositAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = DepositAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::DepositAction<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = DepositAction.$isPhantom;

 readonly name: ToField<String>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: DepositActionFields<CoinType>, ) { this.$fullTypeName = composeSuiType( DepositAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::DepositAction<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.amount = fields.amount; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): DepositActionReified<ToPhantomTypeArgument<CoinType>> { return { typeName: DepositAction.$typeName, fullTypeName: composeSuiType( DepositAction.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::vault::DepositAction<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: DepositAction.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => DepositAction.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DepositAction.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => DepositAction.fromBcs( CoinType, data, ), bcs: DepositAction.bcs, fromJSONField: (field: any) => DepositAction.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => DepositAction.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => DepositAction.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => DepositAction.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => DepositAction.fetch( client, CoinType, id, ), new: ( fields: DepositActionFields<ToPhantomTypeArgument<CoinType>>, ) => { return new DepositAction( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DepositAction.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<DepositAction<ToPhantomTypeArgument<CoinType>>>> { return phantom(DepositAction.reified( CoinType )); } static get p() { return DepositAction.phantom }

 static get bcs() { return bcs.struct("DepositAction", {

 name: String.bcs, amount: bcs.u64()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): DepositAction<ToPhantomTypeArgument<CoinType>> { return DepositAction.reified( typeArg, ).new( { name: decodeFromFields(String.reified(), fields.name), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): DepositAction<ToPhantomTypeArgument<CoinType>> { if (!isDepositAction(item.type)) { throw new Error("not a DepositAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return DepositAction.reified( typeArg, ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): DepositAction<ToPhantomTypeArgument<CoinType>> { return DepositAction.fromFields( typeArg, DepositAction.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): DepositAction<ToPhantomTypeArgument<CoinType>> { return DepositAction.reified( typeArg, ).new( { name: decodeFromJSONField(String.reified(), field.name), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): DepositAction<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== DepositAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DepositAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return DepositAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): DepositAction<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDepositAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DepositAction object`); } return DepositAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): DepositAction<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDepositAction(data.bcs.type)) { throw new Error(`object at is not a DepositAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return DepositAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DepositAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<DepositAction<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DepositAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDepositAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DepositAction object`); }

 return DepositAction.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== SpendAction =============================== */

export function isSpendAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::vault::SpendAction` + '<'); }

export interface SpendActionFields<CoinType extends PhantomTypeArgument> { name: ToField<String>; amount: ToField<"u64"> }

export type SpendActionReified<CoinType extends PhantomTypeArgument> = Reified< SpendAction<CoinType>, SpendActionFields<CoinType> >;

export class SpendAction<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::vault::SpendAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = SpendAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::vault::SpendAction<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = SpendAction.$isPhantom;

 readonly name: ToField<String>; readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: SpendActionFields<CoinType>, ) { this.$fullTypeName = composeSuiType( SpendAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::vault::SpendAction<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.name = fields.name;; this.amount = fields.amount; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): SpendActionReified<ToPhantomTypeArgument<CoinType>> { return { typeName: SpendAction.$typeName, fullTypeName: composeSuiType( SpendAction.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::vault::SpendAction<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: SpendAction.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => SpendAction.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SpendAction.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => SpendAction.fromBcs( CoinType, data, ), bcs: SpendAction.bcs, fromJSONField: (field: any) => SpendAction.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => SpendAction.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => SpendAction.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => SpendAction.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => SpendAction.fetch( client, CoinType, id, ), new: ( fields: SpendActionFields<ToPhantomTypeArgument<CoinType>>, ) => { return new SpendAction( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return SpendAction.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<SpendAction<ToPhantomTypeArgument<CoinType>>>> { return phantom(SpendAction.reified( CoinType )); } static get p() { return SpendAction.phantom }

 static get bcs() { return bcs.struct("SpendAction", {

 name: String.bcs, amount: bcs.u64()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): SpendAction<ToPhantomTypeArgument<CoinType>> { return SpendAction.reified( typeArg, ).new( { name: decodeFromFields(String.reified(), fields.name), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): SpendAction<ToPhantomTypeArgument<CoinType>> { if (!isSpendAction(item.type)) { throw new Error("not a SpendAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return SpendAction.reified( typeArg, ).new( { name: decodeFromFieldsWithTypes(String.reified(), item.fields.name), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): SpendAction<ToPhantomTypeArgument<CoinType>> { return SpendAction.fromFields( typeArg, SpendAction.bcs.parse(data) ) }

 toJSONField() { return {

 name: this.name,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): SpendAction<ToPhantomTypeArgument<CoinType>> { return SpendAction.reified( typeArg, ).new( { name: decodeFromJSONField(String.reified(), field.name), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): SpendAction<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== SpendAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(SpendAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return SpendAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): SpendAction<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSpendAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SpendAction object`); } return SpendAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): SpendAction<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isSpendAction(data.bcs.type)) { throw new Error(`object at is not a SpendAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return SpendAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return SpendAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<SpendAction<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SpendAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSpendAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SpendAction object`); }

 return SpendAction.fromSuiObjectData( typeArg, res.data ); }

 }
