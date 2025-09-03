import {String} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String as String1} from "../../_dependencies/source/0x1/string/structs";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== TreasuryCapKey =============================== */

export function isTreasuryCapKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::currency::TreasuryCapKey` + '<'); }

export interface TreasuryCapKeyFields<CoinType extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type TreasuryCapKeyReified<CoinType extends PhantomTypeArgument> = Reified< TreasuryCapKey<CoinType>, TreasuryCapKeyFields<CoinType> >;

export class TreasuryCapKey<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency::TreasuryCapKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = TreasuryCapKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency::TreasuryCapKey<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = TreasuryCapKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: TreasuryCapKeyFields<CoinType>, ) { this.$fullTypeName = composeSuiType( TreasuryCapKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency::TreasuryCapKey<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): TreasuryCapKeyReified<ToPhantomTypeArgument<CoinType>> { return { typeName: TreasuryCapKey.$typeName, fullTypeName: composeSuiType( TreasuryCapKey.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::currency::TreasuryCapKey<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: TreasuryCapKey.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => TreasuryCapKey.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TreasuryCapKey.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => TreasuryCapKey.fromBcs( CoinType, data, ), bcs: TreasuryCapKey.bcs, fromJSONField: (field: any) => TreasuryCapKey.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => TreasuryCapKey.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => TreasuryCapKey.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => TreasuryCapKey.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => TreasuryCapKey.fetch( client, CoinType, id, ), new: ( fields: TreasuryCapKeyFields<ToPhantomTypeArgument<CoinType>>, ) => { return new TreasuryCapKey( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return TreasuryCapKey.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<TreasuryCapKey<ToPhantomTypeArgument<CoinType>>>> { return phantom(TreasuryCapKey.reified( CoinType )); } static get p() { return TreasuryCapKey.phantom }

 static get bcs() { return bcs.struct("TreasuryCapKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): TreasuryCapKey<ToPhantomTypeArgument<CoinType>> { return TreasuryCapKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): TreasuryCapKey<ToPhantomTypeArgument<CoinType>> { if (!isTreasuryCapKey(item.type)) { throw new Error("not a TreasuryCapKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return TreasuryCapKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): TreasuryCapKey<ToPhantomTypeArgument<CoinType>> { return TreasuryCapKey.fromFields( typeArg, TreasuryCapKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): TreasuryCapKey<ToPhantomTypeArgument<CoinType>> { return TreasuryCapKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): TreasuryCapKey<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== TreasuryCapKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(TreasuryCapKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return TreasuryCapKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): TreasuryCapKey<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTreasuryCapKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TreasuryCapKey object`); } return TreasuryCapKey.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): TreasuryCapKey<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTreasuryCapKey(data.bcs.type)) { throw new Error(`object at is not a TreasuryCapKey object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return TreasuryCapKey.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TreasuryCapKey.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<TreasuryCapKey<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TreasuryCapKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTreasuryCapKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TreasuryCapKey object`); }

 return TreasuryCapKey.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== CurrencyRulesKey =============================== */

export function isCurrencyRulesKey(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::currency::CurrencyRulesKey` + '<'); }

export interface CurrencyRulesKeyFields<CoinType extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type CurrencyRulesKeyReified<CoinType extends PhantomTypeArgument> = Reified< CurrencyRulesKey<CoinType>, CurrencyRulesKeyFields<CoinType> >;

export class CurrencyRulesKey<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency::CurrencyRulesKey`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = CurrencyRulesKey.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency::CurrencyRulesKey<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = CurrencyRulesKey.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: CurrencyRulesKeyFields<CoinType>, ) { this.$fullTypeName = composeSuiType( CurrencyRulesKey.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency::CurrencyRulesKey<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): CurrencyRulesKeyReified<ToPhantomTypeArgument<CoinType>> { return { typeName: CurrencyRulesKey.$typeName, fullTypeName: composeSuiType( CurrencyRulesKey.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::currency::CurrencyRulesKey<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: CurrencyRulesKey.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => CurrencyRulesKey.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CurrencyRulesKey.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => CurrencyRulesKey.fromBcs( CoinType, data, ), bcs: CurrencyRulesKey.bcs, fromJSONField: (field: any) => CurrencyRulesKey.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => CurrencyRulesKey.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => CurrencyRulesKey.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => CurrencyRulesKey.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => CurrencyRulesKey.fetch( client, CoinType, id, ), new: ( fields: CurrencyRulesKeyFields<ToPhantomTypeArgument<CoinType>>, ) => { return new CurrencyRulesKey( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return CurrencyRulesKey.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<CurrencyRulesKey<ToPhantomTypeArgument<CoinType>>>> { return phantom(CurrencyRulesKey.reified( CoinType )); } static get p() { return CurrencyRulesKey.phantom }

 static get bcs() { return bcs.struct("CurrencyRulesKey", {

 dummy_field: bcs.bool()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): CurrencyRulesKey<ToPhantomTypeArgument<CoinType>> { return CurrencyRulesKey.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): CurrencyRulesKey<ToPhantomTypeArgument<CoinType>> { if (!isCurrencyRulesKey(item.type)) { throw new Error("not a CurrencyRulesKey type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return CurrencyRulesKey.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): CurrencyRulesKey<ToPhantomTypeArgument<CoinType>> { return CurrencyRulesKey.fromFields( typeArg, CurrencyRulesKey.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): CurrencyRulesKey<ToPhantomTypeArgument<CoinType>> { return CurrencyRulesKey.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): CurrencyRulesKey<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== CurrencyRulesKey.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(CurrencyRulesKey.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return CurrencyRulesKey.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): CurrencyRulesKey<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurrencyRulesKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurrencyRulesKey object`); } return CurrencyRulesKey.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): CurrencyRulesKey<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCurrencyRulesKey(data.bcs.type)) { throw new Error(`object at is not a CurrencyRulesKey object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return CurrencyRulesKey.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CurrencyRulesKey.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<CurrencyRulesKey<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurrencyRulesKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurrencyRulesKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurrencyRulesKey object`); }

 return CurrencyRulesKey.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== CurrencyRules =============================== */

export function isCurrencyRules(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::currency::CurrencyRules` + '<'); }

export interface CurrencyRulesFields<CoinType extends PhantomTypeArgument> { maxSupply: ToField<Option<"u64">>; totalMinted: ToField<"u64">; totalBurned: ToField<"u64">; canMint: ToField<"bool">; canBurn: ToField<"bool">; canUpdateSymbol: ToField<"bool">; canUpdateName: ToField<"bool">; canUpdateDescription: ToField<"bool">; canUpdateIcon: ToField<"bool"> }

export type CurrencyRulesReified<CoinType extends PhantomTypeArgument> = Reified< CurrencyRules<CoinType>, CurrencyRulesFields<CoinType> >;

export class CurrencyRules<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency::CurrencyRules`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = CurrencyRules.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency::CurrencyRules<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = CurrencyRules.$isPhantom;

 readonly maxSupply: ToField<Option<"u64">>; readonly totalMinted: ToField<"u64">; readonly totalBurned: ToField<"u64">; readonly canMint: ToField<"bool">; readonly canBurn: ToField<"bool">; readonly canUpdateSymbol: ToField<"bool">; readonly canUpdateName: ToField<"bool">; readonly canUpdateDescription: ToField<"bool">; readonly canUpdateIcon: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: CurrencyRulesFields<CoinType>, ) { this.$fullTypeName = composeSuiType( CurrencyRules.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency::CurrencyRules<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.maxSupply = fields.maxSupply;; this.totalMinted = fields.totalMinted;; this.totalBurned = fields.totalBurned;; this.canMint = fields.canMint;; this.canBurn = fields.canBurn;; this.canUpdateSymbol = fields.canUpdateSymbol;; this.canUpdateName = fields.canUpdateName;; this.canUpdateDescription = fields.canUpdateDescription;; this.canUpdateIcon = fields.canUpdateIcon; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): CurrencyRulesReified<ToPhantomTypeArgument<CoinType>> { return { typeName: CurrencyRules.$typeName, fullTypeName: composeSuiType( CurrencyRules.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::currency::CurrencyRules<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: CurrencyRules.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => CurrencyRules.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => CurrencyRules.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => CurrencyRules.fromBcs( CoinType, data, ), bcs: CurrencyRules.bcs, fromJSONField: (field: any) => CurrencyRules.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => CurrencyRules.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => CurrencyRules.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => CurrencyRules.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => CurrencyRules.fetch( client, CoinType, id, ), new: ( fields: CurrencyRulesFields<ToPhantomTypeArgument<CoinType>>, ) => { return new CurrencyRules( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return CurrencyRules.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<CurrencyRules<ToPhantomTypeArgument<CoinType>>>> { return phantom(CurrencyRules.reified( CoinType )); } static get p() { return CurrencyRules.phantom }

 static get bcs() { return bcs.struct("CurrencyRules", {

 max_supply: Option.bcs(bcs.u64()), total_minted: bcs.u64(), total_burned: bcs.u64(), can_mint: bcs.bool(), can_burn: bcs.bool(), can_update_symbol: bcs.bool(), can_update_name: bcs.bool(), can_update_description: bcs.bool(), can_update_icon: bcs.bool()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): CurrencyRules<ToPhantomTypeArgument<CoinType>> { return CurrencyRules.reified( typeArg, ).new( { maxSupply: decodeFromFields(Option.reified("u64"), fields.max_supply), totalMinted: decodeFromFields("u64", fields.total_minted), totalBurned: decodeFromFields("u64", fields.total_burned), canMint: decodeFromFields("bool", fields.can_mint), canBurn: decodeFromFields("bool", fields.can_burn), canUpdateSymbol: decodeFromFields("bool", fields.can_update_symbol), canUpdateName: decodeFromFields("bool", fields.can_update_name), canUpdateDescription: decodeFromFields("bool", fields.can_update_description), canUpdateIcon: decodeFromFields("bool", fields.can_update_icon) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): CurrencyRules<ToPhantomTypeArgument<CoinType>> { if (!isCurrencyRules(item.type)) { throw new Error("not a CurrencyRules type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return CurrencyRules.reified( typeArg, ).new( { maxSupply: decodeFromFieldsWithTypes(Option.reified("u64"), item.fields.max_supply), totalMinted: decodeFromFieldsWithTypes("u64", item.fields.total_minted), totalBurned: decodeFromFieldsWithTypes("u64", item.fields.total_burned), canMint: decodeFromFieldsWithTypes("bool", item.fields.can_mint), canBurn: decodeFromFieldsWithTypes("bool", item.fields.can_burn), canUpdateSymbol: decodeFromFieldsWithTypes("bool", item.fields.can_update_symbol), canUpdateName: decodeFromFieldsWithTypes("bool", item.fields.can_update_name), canUpdateDescription: decodeFromFieldsWithTypes("bool", item.fields.can_update_description), canUpdateIcon: decodeFromFieldsWithTypes("bool", item.fields.can_update_icon) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): CurrencyRules<ToPhantomTypeArgument<CoinType>> { return CurrencyRules.fromFields( typeArg, CurrencyRules.bcs.parse(data) ) }

 toJSONField() { return {

 maxSupply: fieldToJSON<Option<"u64">>(`${Option.$typeName}<u64>`, this.maxSupply),totalMinted: this.totalMinted.toString(),totalBurned: this.totalBurned.toString(),canMint: this.canMint,canBurn: this.canBurn,canUpdateSymbol: this.canUpdateSymbol,canUpdateName: this.canUpdateName,canUpdateDescription: this.canUpdateDescription,canUpdateIcon: this.canUpdateIcon,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): CurrencyRules<ToPhantomTypeArgument<CoinType>> { return CurrencyRules.reified( typeArg, ).new( { maxSupply: decodeFromJSONField(Option.reified("u64"), field.maxSupply), totalMinted: decodeFromJSONField("u64", field.totalMinted), totalBurned: decodeFromJSONField("u64", field.totalBurned), canMint: decodeFromJSONField("bool", field.canMint), canBurn: decodeFromJSONField("bool", field.canBurn), canUpdateSymbol: decodeFromJSONField("bool", field.canUpdateSymbol), canUpdateName: decodeFromJSONField("bool", field.canUpdateName), canUpdateDescription: decodeFromJSONField("bool", field.canUpdateDescription), canUpdateIcon: decodeFromJSONField("bool", field.canUpdateIcon) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): CurrencyRules<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== CurrencyRules.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(CurrencyRules.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return CurrencyRules.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): CurrencyRules<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isCurrencyRules(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a CurrencyRules object`); } return CurrencyRules.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): CurrencyRules<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isCurrencyRules(data.bcs.type)) { throw new Error(`object at is not a CurrencyRules object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return CurrencyRules.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return CurrencyRules.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<CurrencyRules<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching CurrencyRules object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isCurrencyRules(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a CurrencyRules object`); }

 return CurrencyRules.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== DisableAction =============================== */

export function isDisableAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::currency::DisableAction` + '<'); }

export interface DisableActionFields<CoinType extends PhantomTypeArgument> { mint: ToField<"bool">; burn: ToField<"bool">; updateSymbol: ToField<"bool">; updateName: ToField<"bool">; updateDescription: ToField<"bool">; updateIcon: ToField<"bool"> }

export type DisableActionReified<CoinType extends PhantomTypeArgument> = Reified< DisableAction<CoinType>, DisableActionFields<CoinType> >;

export class DisableAction<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency::DisableAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = DisableAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency::DisableAction<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = DisableAction.$isPhantom;

 readonly mint: ToField<"bool">; readonly burn: ToField<"bool">; readonly updateSymbol: ToField<"bool">; readonly updateName: ToField<"bool">; readonly updateDescription: ToField<"bool">; readonly updateIcon: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: DisableActionFields<CoinType>, ) { this.$fullTypeName = composeSuiType( DisableAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency::DisableAction<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.mint = fields.mint;; this.burn = fields.burn;; this.updateSymbol = fields.updateSymbol;; this.updateName = fields.updateName;; this.updateDescription = fields.updateDescription;; this.updateIcon = fields.updateIcon; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): DisableActionReified<ToPhantomTypeArgument<CoinType>> { return { typeName: DisableAction.$typeName, fullTypeName: composeSuiType( DisableAction.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::currency::DisableAction<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: DisableAction.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => DisableAction.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DisableAction.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => DisableAction.fromBcs( CoinType, data, ), bcs: DisableAction.bcs, fromJSONField: (field: any) => DisableAction.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => DisableAction.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => DisableAction.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => DisableAction.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => DisableAction.fetch( client, CoinType, id, ), new: ( fields: DisableActionFields<ToPhantomTypeArgument<CoinType>>, ) => { return new DisableAction( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return DisableAction.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<DisableAction<ToPhantomTypeArgument<CoinType>>>> { return phantom(DisableAction.reified( CoinType )); } static get p() { return DisableAction.phantom }

 static get bcs() { return bcs.struct("DisableAction", {

 mint: bcs.bool(), burn: bcs.bool(), update_symbol: bcs.bool(), update_name: bcs.bool(), update_description: bcs.bool(), update_icon: bcs.bool()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): DisableAction<ToPhantomTypeArgument<CoinType>> { return DisableAction.reified( typeArg, ).new( { mint: decodeFromFields("bool", fields.mint), burn: decodeFromFields("bool", fields.burn), updateSymbol: decodeFromFields("bool", fields.update_symbol), updateName: decodeFromFields("bool", fields.update_name), updateDescription: decodeFromFields("bool", fields.update_description), updateIcon: decodeFromFields("bool", fields.update_icon) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): DisableAction<ToPhantomTypeArgument<CoinType>> { if (!isDisableAction(item.type)) { throw new Error("not a DisableAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return DisableAction.reified( typeArg, ).new( { mint: decodeFromFieldsWithTypes("bool", item.fields.mint), burn: decodeFromFieldsWithTypes("bool", item.fields.burn), updateSymbol: decodeFromFieldsWithTypes("bool", item.fields.update_symbol), updateName: decodeFromFieldsWithTypes("bool", item.fields.update_name), updateDescription: decodeFromFieldsWithTypes("bool", item.fields.update_description), updateIcon: decodeFromFieldsWithTypes("bool", item.fields.update_icon) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): DisableAction<ToPhantomTypeArgument<CoinType>> { return DisableAction.fromFields( typeArg, DisableAction.bcs.parse(data) ) }

 toJSONField() { return {

 mint: this.mint,burn: this.burn,updateSymbol: this.updateSymbol,updateName: this.updateName,updateDescription: this.updateDescription,updateIcon: this.updateIcon,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): DisableAction<ToPhantomTypeArgument<CoinType>> { return DisableAction.reified( typeArg, ).new( { mint: decodeFromJSONField("bool", field.mint), burn: decodeFromJSONField("bool", field.burn), updateSymbol: decodeFromJSONField("bool", field.updateSymbol), updateName: decodeFromJSONField("bool", field.updateName), updateDescription: decodeFromJSONField("bool", field.updateDescription), updateIcon: decodeFromJSONField("bool", field.updateIcon) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): DisableAction<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== DisableAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(DisableAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return DisableAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): DisableAction<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDisableAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DisableAction object`); } return DisableAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): DisableAction<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isDisableAction(data.bcs.type)) { throw new Error(`object at is not a DisableAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return DisableAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return DisableAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<DisableAction<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DisableAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDisableAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DisableAction object`); }

 return DisableAction.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== MintAction =============================== */

export function isMintAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::currency::MintAction` + '<'); }

export interface MintActionFields<CoinType extends PhantomTypeArgument> { amount: ToField<"u64"> }

export type MintActionReified<CoinType extends PhantomTypeArgument> = Reified< MintAction<CoinType>, MintActionFields<CoinType> >;

export class MintAction<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency::MintAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = MintAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency::MintAction<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = MintAction.$isPhantom;

 readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: MintActionFields<CoinType>, ) { this.$fullTypeName = composeSuiType( MintAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency::MintAction<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.amount = fields.amount; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): MintActionReified<ToPhantomTypeArgument<CoinType>> { return { typeName: MintAction.$typeName, fullTypeName: composeSuiType( MintAction.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::currency::MintAction<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: MintAction.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => MintAction.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MintAction.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => MintAction.fromBcs( CoinType, data, ), bcs: MintAction.bcs, fromJSONField: (field: any) => MintAction.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => MintAction.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => MintAction.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => MintAction.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => MintAction.fetch( client, CoinType, id, ), new: ( fields: MintActionFields<ToPhantomTypeArgument<CoinType>>, ) => { return new MintAction( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return MintAction.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<MintAction<ToPhantomTypeArgument<CoinType>>>> { return phantom(MintAction.reified( CoinType )); } static get p() { return MintAction.phantom }

 static get bcs() { return bcs.struct("MintAction", {

 amount: bcs.u64()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): MintAction<ToPhantomTypeArgument<CoinType>> { return MintAction.reified( typeArg, ).new( { amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): MintAction<ToPhantomTypeArgument<CoinType>> { if (!isMintAction(item.type)) { throw new Error("not a MintAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return MintAction.reified( typeArg, ).new( { amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): MintAction<ToPhantomTypeArgument<CoinType>> { return MintAction.fromFields( typeArg, MintAction.bcs.parse(data) ) }

 toJSONField() { return {

 amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): MintAction<ToPhantomTypeArgument<CoinType>> { return MintAction.reified( typeArg, ).new( { amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): MintAction<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== MintAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(MintAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return MintAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): MintAction<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMintAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MintAction object`); } return MintAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): MintAction<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isMintAction(data.bcs.type)) { throw new Error(`object at is not a MintAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return MintAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return MintAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<MintAction<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MintAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMintAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MintAction object`); }

 return MintAction.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== BurnAction =============================== */

export function isBurnAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::currency::BurnAction` + '<'); }

export interface BurnActionFields<CoinType extends PhantomTypeArgument> { amount: ToField<"u64"> }

export type BurnActionReified<CoinType extends PhantomTypeArgument> = Reified< BurnAction<CoinType>, BurnActionFields<CoinType> >;

export class BurnAction<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency::BurnAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = BurnAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency::BurnAction<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = BurnAction.$isPhantom;

 readonly amount: ToField<"u64">

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: BurnActionFields<CoinType>, ) { this.$fullTypeName = composeSuiType( BurnAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency::BurnAction<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.amount = fields.amount; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): BurnActionReified<ToPhantomTypeArgument<CoinType>> { return { typeName: BurnAction.$typeName, fullTypeName: composeSuiType( BurnAction.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::currency::BurnAction<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: BurnAction.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => BurnAction.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => BurnAction.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => BurnAction.fromBcs( CoinType, data, ), bcs: BurnAction.bcs, fromJSONField: (field: any) => BurnAction.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => BurnAction.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => BurnAction.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => BurnAction.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => BurnAction.fetch( client, CoinType, id, ), new: ( fields: BurnActionFields<ToPhantomTypeArgument<CoinType>>, ) => { return new BurnAction( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return BurnAction.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<BurnAction<ToPhantomTypeArgument<CoinType>>>> { return phantom(BurnAction.reified( CoinType )); } static get p() { return BurnAction.phantom }

 static get bcs() { return bcs.struct("BurnAction", {

 amount: bcs.u64()

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): BurnAction<ToPhantomTypeArgument<CoinType>> { return BurnAction.reified( typeArg, ).new( { amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): BurnAction<ToPhantomTypeArgument<CoinType>> { if (!isBurnAction(item.type)) { throw new Error("not a BurnAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return BurnAction.reified( typeArg, ).new( { amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): BurnAction<ToPhantomTypeArgument<CoinType>> { return BurnAction.fromFields( typeArg, BurnAction.bcs.parse(data) ) }

 toJSONField() { return {

 amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): BurnAction<ToPhantomTypeArgument<CoinType>> { return BurnAction.reified( typeArg, ).new( { amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): BurnAction<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== BurnAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(BurnAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return BurnAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): BurnAction<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isBurnAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a BurnAction object`); } return BurnAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): BurnAction<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isBurnAction(data.bcs.type)) { throw new Error(`object at is not a BurnAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return BurnAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return BurnAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<BurnAction<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching BurnAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isBurnAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a BurnAction object`); }

 return BurnAction.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== UpdateAction =============================== */

export function isUpdateAction(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::currency::UpdateAction` + '<'); }

export interface UpdateActionFields<CoinType extends PhantomTypeArgument> { symbol: ToField<Option<String>>; name: ToField<Option<String1>>; description: ToField<Option<String1>>; iconUrl: ToField<Option<String>> }

export type UpdateActionReified<CoinType extends PhantomTypeArgument> = Reified< UpdateAction<CoinType>, UpdateActionFields<CoinType> >;

export class UpdateAction<CoinType extends PhantomTypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::currency::UpdateAction`; static readonly $numTypeParams = 1; static readonly $isPhantom = [true,] as const;

 readonly $typeName = UpdateAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::currency::UpdateAction<${PhantomToTypeStr<CoinType>}>`; readonly $typeArgs: [PhantomToTypeStr<CoinType>]; readonly $isPhantom = UpdateAction.$isPhantom;

 readonly symbol: ToField<Option<String>>; readonly name: ToField<Option<String1>>; readonly description: ToField<Option<String1>>; readonly iconUrl: ToField<Option<String>>

 private constructor(typeArgs: [PhantomToTypeStr<CoinType>], fields: UpdateActionFields<CoinType>, ) { this.$fullTypeName = composeSuiType( UpdateAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::currency::UpdateAction<${PhantomToTypeStr<CoinType>}>`; this.$typeArgs = typeArgs;

 this.symbol = fields.symbol;; this.name = fields.name;; this.description = fields.description;; this.iconUrl = fields.iconUrl; }

 static reified<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): UpdateActionReified<ToPhantomTypeArgument<CoinType>> { return { typeName: UpdateAction.$typeName, fullTypeName: composeSuiType( UpdateAction.$typeName, ...[extractType(CoinType)] ) as `${typeof PKG_V1}::currency::UpdateAction<${PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>}>`, typeArgs: [ extractType(CoinType) ] as [PhantomToTypeStr<ToPhantomTypeArgument<CoinType>>], isPhantom: UpdateAction.$isPhantom, reifiedTypeArgs: [CoinType], fromFields: (fields: Record<string, any>) => UpdateAction.fromFields( CoinType, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateAction.fromFieldsWithTypes( CoinType, item, ), fromBcs: (data: Uint8Array) => UpdateAction.fromBcs( CoinType, data, ), bcs: UpdateAction.bcs, fromJSONField: (field: any) => UpdateAction.fromJSONField( CoinType, field, ), fromJSON: (json: Record<string, any>) => UpdateAction.fromJSON( CoinType, json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateAction.fromSuiParsedData( CoinType, content, ), fromSuiObjectData: (content: SuiObjectData) => UpdateAction.fromSuiObjectData( CoinType, content, ), fetch: async (client: SuiClient, id: string) => UpdateAction.fetch( client, CoinType, id, ), new: ( fields: UpdateActionFields<ToPhantomTypeArgument<CoinType>>, ) => { return new UpdateAction( [extractType(CoinType)], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateAction.reified }

 static phantom<CoinType extends PhantomReified<PhantomTypeArgument>>( CoinType: CoinType ): PhantomReified<ToTypeStr<UpdateAction<ToPhantomTypeArgument<CoinType>>>> { return phantom(UpdateAction.reified( CoinType )); } static get p() { return UpdateAction.phantom }

 static get bcs() { return bcs.struct("UpdateAction", {

 symbol: Option.bcs(String.bcs), name: Option.bcs(String1.bcs), description: Option.bcs(String1.bcs), icon_url: Option.bcs(String.bcs)

}) };

 static fromFields<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, fields: Record<string, any> ): UpdateAction<ToPhantomTypeArgument<CoinType>> { return UpdateAction.reified( typeArg, ).new( { symbol: decodeFromFields(Option.reified(String.reified()), fields.symbol), name: decodeFromFields(Option.reified(String1.reified()), fields.name), description: decodeFromFields(Option.reified(String1.reified()), fields.description), iconUrl: decodeFromFields(Option.reified(String.reified()), fields.icon_url) } ) }

 static fromFieldsWithTypes<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, item: FieldsWithTypes ): UpdateAction<ToPhantomTypeArgument<CoinType>> { if (!isUpdateAction(item.type)) { throw new Error("not a UpdateAction type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return UpdateAction.reified( typeArg, ).new( { symbol: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.symbol), name: decodeFromFieldsWithTypes(Option.reified(String1.reified()), item.fields.name), description: decodeFromFieldsWithTypes(Option.reified(String1.reified()), item.fields.description), iconUrl: decodeFromFieldsWithTypes(Option.reified(String.reified()), item.fields.icon_url) } ) }

 static fromBcs<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: Uint8Array ): UpdateAction<ToPhantomTypeArgument<CoinType>> { return UpdateAction.fromFields( typeArg, UpdateAction.bcs.parse(data) ) }

 toJSONField() { return {

 symbol: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.symbol),name: fieldToJSON<Option<String1>>(`${Option.$typeName}<${String1.$typeName}>`, this.name),description: fieldToJSON<Option<String1>>(`${Option.$typeName}<${String1.$typeName}>`, this.description),iconUrl: fieldToJSON<Option<String>>(`${Option.$typeName}<${String.$typeName}>`, this.iconUrl),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, field: any ): UpdateAction<ToPhantomTypeArgument<CoinType>> { return UpdateAction.reified( typeArg, ).new( { symbol: decodeFromJSONField(Option.reified(String.reified()), field.symbol), name: decodeFromJSONField(Option.reified(String1.reified()), field.name), description: decodeFromJSONField(Option.reified(String1.reified()), field.description), iconUrl: decodeFromJSONField(Option.reified(String.reified()), field.iconUrl) } ) }

 static fromJSON<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, json: Record<string, any> ): UpdateAction<ToPhantomTypeArgument<CoinType>> { if (json.$typeName !== UpdateAction.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(UpdateAction.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return UpdateAction.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, content: SuiParsedData ): UpdateAction<ToPhantomTypeArgument<CoinType>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateAction object`); } return UpdateAction.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<CoinType extends PhantomReified<PhantomTypeArgument>>( typeArg: CoinType, data: SuiObjectData ): UpdateAction<ToPhantomTypeArgument<CoinType>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUpdateAction(data.bcs.type)) { throw new Error(`object at is not a UpdateAction object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return UpdateAction.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return UpdateAction.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<CoinType extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: CoinType, id: string ): Promise<UpdateAction<ToPhantomTypeArgument<CoinType>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateAction object`); }

 return UpdateAction.fromSuiObjectData( typeArg, res.data ); }

 }
