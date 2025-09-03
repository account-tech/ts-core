import {UID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, toBcs} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Deps} from "../deps/structs";
import {PKG_V1} from "../index";
import {Intents} from "../intents/structs";
import {Metadata} from "../metadata/structs";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== ACCOUNT =============================== */

export function isACCOUNT(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::account::ACCOUNT`; }

export interface ACCOUNTFields { dummyField: ToField<"bool"> }

export type ACCOUNTReified = Reified< ACCOUNT, ACCOUNTFields >;

export class ACCOUNT implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::account::ACCOUNT`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ACCOUNT.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::account::ACCOUNT`; readonly $typeArgs: []; readonly $isPhantom = ACCOUNT.$isPhantom;

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: ACCOUNTFields, ) { this.$fullTypeName = composeSuiType( ACCOUNT.$typeName, ...typeArgs ) as `${typeof PKG_V1}::account::ACCOUNT`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): ACCOUNTReified { return { typeName: ACCOUNT.$typeName, fullTypeName: composeSuiType( ACCOUNT.$typeName, ...[] ) as `${typeof PKG_V1}::account::ACCOUNT`, typeArgs: [ ] as [], isPhantom: ACCOUNT.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ACCOUNT.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ACCOUNT.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ACCOUNT.fromBcs( data, ), bcs: ACCOUNT.bcs, fromJSONField: (field: any) => ACCOUNT.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ACCOUNT.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ACCOUNT.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ACCOUNT.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ACCOUNT.fetch( client, id, ), new: ( fields: ACCOUNTFields, ) => { return new ACCOUNT( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ACCOUNT.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ACCOUNT>> { return phantom(ACCOUNT.reified( )); } static get p() { return ACCOUNT.phantom() }

 static get bcs() { return bcs.struct("ACCOUNT", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): ACCOUNT { return ACCOUNT.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ACCOUNT { if (!isACCOUNT(item.type)) { throw new Error("not a ACCOUNT type");

 }

 return ACCOUNT.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): ACCOUNT { return ACCOUNT.fromFields( ACCOUNT.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ACCOUNT { return ACCOUNT.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): ACCOUNT { if (json.$typeName !== ACCOUNT.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ACCOUNT.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ACCOUNT { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isACCOUNT(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ACCOUNT object`); } return ACCOUNT.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ACCOUNT { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isACCOUNT(data.bcs.type)) { throw new Error(`object at is not a ACCOUNT object`); }

 return ACCOUNT.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ACCOUNT.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ACCOUNT> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ACCOUNT object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isACCOUNT(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ACCOUNT object`); }

 return ACCOUNT.fromSuiObjectData( res.data ); }

 }

/* ============================== Account =============================== */

export function isAccount(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::account::Account` + '<'); }

export interface AccountFields<Config extends TypeArgument> { id: ToField<UID>; metadata: ToField<Metadata>; deps: ToField<Deps>; intents: ToField<Intents>; config: ToField<Config> }

export type AccountReified<Config extends TypeArgument> = Reified< Account<Config>, AccountFields<Config> >;

export class Account<Config extends TypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::account::Account`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = Account.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::account::Account<${ToTypeStr<Config>}>`; readonly $typeArgs: [ToTypeStr<Config>]; readonly $isPhantom = Account.$isPhantom;

 readonly id: ToField<UID>; readonly metadata: ToField<Metadata>; readonly deps: ToField<Deps>; readonly intents: ToField<Intents>; readonly config: ToField<Config>

 private constructor(typeArgs: [ToTypeStr<Config>], fields: AccountFields<Config>, ) { this.$fullTypeName = composeSuiType( Account.$typeName, ...typeArgs ) as `${typeof PKG_V1}::account::Account<${ToTypeStr<Config>}>`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.metadata = fields.metadata;; this.deps = fields.deps;; this.intents = fields.intents;; this.config = fields.config; }

 static reified<Config extends Reified<TypeArgument, any>>( Config: Config ): AccountReified<ToTypeArgument<Config>> { return { typeName: Account.$typeName, fullTypeName: composeSuiType( Account.$typeName, ...[extractType(Config)] ) as `${typeof PKG_V1}::account::Account<${ToTypeStr<ToTypeArgument<Config>>}>`, typeArgs: [ extractType(Config) ] as [ToTypeStr<ToTypeArgument<Config>>], isPhantom: Account.$isPhantom, reifiedTypeArgs: [Config], fromFields: (fields: Record<string, any>) => Account.fromFields( Config, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Account.fromFieldsWithTypes( Config, item, ), fromBcs: (data: Uint8Array) => Account.fromBcs( Config, data, ), bcs: Account.bcs(toBcs(Config)), fromJSONField: (field: any) => Account.fromJSONField( Config, field, ), fromJSON: (json: Record<string, any>) => Account.fromJSON( Config, json, ), fromSuiParsedData: (content: SuiParsedData) => Account.fromSuiParsedData( Config, content, ), fromSuiObjectData: (content: SuiObjectData) => Account.fromSuiObjectData( Config, content, ), fetch: async (client: SuiClient, id: string) => Account.fetch( client, Config, id, ), new: ( fields: AccountFields<ToTypeArgument<Config>>, ) => { return new Account( [extractType(Config)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Account.reified }

 static phantom<Config extends Reified<TypeArgument, any>>( Config: Config ): PhantomReified<ToTypeStr<Account<ToTypeArgument<Config>>>> { return phantom(Account.reified( Config )); } static get p() { return Account.phantom }

 static get bcs() { return <Config extends BcsType<any>>(Config: Config) => bcs.struct(`Account<${Config.name}>`, {

 id: UID.bcs, metadata: Metadata.bcs, deps: Deps.bcs, intents: Intents.bcs, config: Config

}) };

 static fromFields<Config extends Reified<TypeArgument, any>>( typeArg: Config, fields: Record<string, any> ): Account<ToTypeArgument<Config>> { return Account.reified( typeArg, ).new( { id: decodeFromFields(UID.reified(), fields.id), metadata: decodeFromFields(Metadata.reified(), fields.metadata), deps: decodeFromFields(Deps.reified(), fields.deps), intents: decodeFromFields(Intents.reified(), fields.intents), config: decodeFromFields(typeArg, fields.config) } ) }

 static fromFieldsWithTypes<Config extends Reified<TypeArgument, any>>( typeArg: Config, item: FieldsWithTypes ): Account<ToTypeArgument<Config>> { if (!isAccount(item.type)) { throw new Error("not a Account type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Account.reified( typeArg, ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), metadata: decodeFromFieldsWithTypes(Metadata.reified(), item.fields.metadata), deps: decodeFromFieldsWithTypes(Deps.reified(), item.fields.deps), intents: decodeFromFieldsWithTypes(Intents.reified(), item.fields.intents), config: decodeFromFieldsWithTypes(typeArg, item.fields.config) } ) }

 static fromBcs<Config extends Reified<TypeArgument, any>>( typeArg: Config, data: Uint8Array ): Account<ToTypeArgument<Config>> { const typeArgs = [typeArg];

 return Account.fromFields( typeArg, Account.bcs( toBcs(typeArgs[0]) ).parse(data) ) }

 toJSONField() { return {

 id: this.id,metadata: this.metadata.toJSONField(),deps: this.deps.toJSONField(),intents: this.intents.toJSONField(),config: fieldToJSON<Config>(this.$typeArgs[0], this.config),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Config extends Reified<TypeArgument, any>>( typeArg: Config, field: any ): Account<ToTypeArgument<Config>> { return Account.reified( typeArg, ).new( { id: decodeFromJSONField(UID.reified(), field.id), metadata: decodeFromJSONField(Metadata.reified(), field.metadata), deps: decodeFromJSONField(Deps.reified(), field.deps), intents: decodeFromJSONField(Intents.reified(), field.intents), config: decodeFromJSONField(typeArg, field.config) } ) }

 static fromJSON<Config extends Reified<TypeArgument, any>>( typeArg: Config, json: Record<string, any> ): Account<ToTypeArgument<Config>> { if (json.$typeName !== Account.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Account.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Account.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Config extends Reified<TypeArgument, any>>( typeArg: Config, content: SuiParsedData ): Account<ToTypeArgument<Config>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAccount(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Account object`); } return Account.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<Config extends Reified<TypeArgument, any>>( typeArg: Config, data: SuiObjectData ): Account<ToTypeArgument<Config>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAccount(data.bcs.type)) { throw new Error(`object at is not a Account object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Account.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Account.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<Config extends Reified<TypeArgument, any>>( client: SuiClient, typeArg: Config, id: string ): Promise<Account<ToTypeArgument<Config>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Account object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAccount(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Account object`); }

 return Account.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== Auth =============================== */

export function isAuth(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::account::Auth`; }

export interface AuthFields { accountAddr: ToField<"address"> }

export type AuthReified = Reified< Auth, AuthFields >;

export class Auth implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::account::Auth`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Auth.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::account::Auth`; readonly $typeArgs: []; readonly $isPhantom = Auth.$isPhantom;

 readonly accountAddr: ToField<"address">

 private constructor(typeArgs: [], fields: AuthFields, ) { this.$fullTypeName = composeSuiType( Auth.$typeName, ...typeArgs ) as `${typeof PKG_V1}::account::Auth`; this.$typeArgs = typeArgs;

 this.accountAddr = fields.accountAddr; }

 static reified( ): AuthReified { return { typeName: Auth.$typeName, fullTypeName: composeSuiType( Auth.$typeName, ...[] ) as `${typeof PKG_V1}::account::Auth`, typeArgs: [ ] as [], isPhantom: Auth.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Auth.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Auth.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Auth.fromBcs( data, ), bcs: Auth.bcs, fromJSONField: (field: any) => Auth.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Auth.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Auth.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Auth.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Auth.fetch( client, id, ), new: ( fields: AuthFields, ) => { return new Auth( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Auth.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Auth>> { return phantom(Auth.reified( )); } static get p() { return Auth.phantom() }

 static get bcs() { return bcs.struct("Auth", {

 account_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): Auth { return Auth.reified( ).new( { accountAddr: decodeFromFields("address", fields.account_addr) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Auth { if (!isAuth(item.type)) { throw new Error("not a Auth type");

 }

 return Auth.reified( ).new( { accountAddr: decodeFromFieldsWithTypes("address", item.fields.account_addr) } ) }

 static fromBcs( data: Uint8Array ): Auth { return Auth.fromFields( Auth.bcs.parse(data) ) }

 toJSONField() { return {

 accountAddr: this.accountAddr,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Auth { return Auth.reified( ).new( { accountAddr: decodeFromJSONField("address", field.accountAddr) } ) }

 static fromJSON( json: Record<string, any> ): Auth { if (json.$typeName !== Auth.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Auth.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Auth { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAuth(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Auth object`); } return Auth.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Auth { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isAuth(data.bcs.type)) { throw new Error(`object at is not a Auth object`); }

 return Auth.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Auth.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Auth> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Auth object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAuth(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Auth object`); }

 return Auth.fromSuiObjectData( res.data ); }

 }
