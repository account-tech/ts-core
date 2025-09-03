import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {Table} from "../../_dependencies/source/0x2/table/structs";
import {VecMap} from "../../_dependencies/source/0x2/vec-map/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom, ToTypeStr as ToPhantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Registry =============================== */

export function isRegistry(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::user::Registry`; }

export interface RegistryFields { id: ToField<UID>; users: ToField<Table<"address", ToPhantom<ID>>> }

export type RegistryReified = Reified< Registry, RegistryFields >;

export class Registry implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::user::Registry`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Registry.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::user::Registry`; readonly $typeArgs: []; readonly $isPhantom = Registry.$isPhantom;

 readonly id: ToField<UID>; readonly users: ToField<Table<"address", ToPhantom<ID>>>

 private constructor(typeArgs: [], fields: RegistryFields, ) { this.$fullTypeName = composeSuiType( Registry.$typeName, ...typeArgs ) as `${typeof PKG_V1}::user::Registry`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.users = fields.users; }

 static reified( ): RegistryReified { return { typeName: Registry.$typeName, fullTypeName: composeSuiType( Registry.$typeName, ...[] ) as `${typeof PKG_V1}::user::Registry`, typeArgs: [ ] as [], isPhantom: Registry.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Registry.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Registry.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Registry.fromBcs( data, ), bcs: Registry.bcs, fromJSONField: (field: any) => Registry.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Registry.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Registry.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Registry.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Registry.fetch( client, id, ), new: ( fields: RegistryFields, ) => { return new Registry( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Registry.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Registry>> { return phantom(Registry.reified( )); } static get p() { return Registry.phantom() }

 static get bcs() { return bcs.struct("Registry", {

 id: UID.bcs, users: Table.bcs

}) };

 static fromFields( fields: Record<string, any> ): Registry { return Registry.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), users: decodeFromFields(Table.reified(reified.phantom("address"), reified.phantom(ID.reified())), fields.users) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Registry { if (!isRegistry(item.type)) { throw new Error("not a Registry type");

 }

 return Registry.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), users: decodeFromFieldsWithTypes(Table.reified(reified.phantom("address"), reified.phantom(ID.reified())), item.fields.users) } ) }

 static fromBcs( data: Uint8Array ): Registry { return Registry.fromFields( Registry.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,users: this.users.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Registry { return Registry.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), users: decodeFromJSONField(Table.reified(reified.phantom("address"), reified.phantom(ID.reified())), field.users) } ) }

 static fromJSON( json: Record<string, any> ): Registry { if (json.$typeName !== Registry.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Registry.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Registry { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRegistry(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Registry object`); } return Registry.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Registry { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isRegistry(data.bcs.type)) { throw new Error(`object at is not a Registry object`); }

 return Registry.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Registry.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Registry> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Registry object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRegistry(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Registry object`); }

 return Registry.fromSuiObjectData( res.data ); }

 }

/* ============================== User =============================== */

export function isUser(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::user::User`; }

export interface UserFields { id: ToField<UID>; accounts: ToField<VecMap<String, Vector<"address">>> }

export type UserReified = Reified< User, UserFields >;

export class User implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::user::User`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = User.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::user::User`; readonly $typeArgs: []; readonly $isPhantom = User.$isPhantom;

 readonly id: ToField<UID>; readonly accounts: ToField<VecMap<String, Vector<"address">>>

 private constructor(typeArgs: [], fields: UserFields, ) { this.$fullTypeName = composeSuiType( User.$typeName, ...typeArgs ) as `${typeof PKG_V1}::user::User`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.accounts = fields.accounts; }

 static reified( ): UserReified { return { typeName: User.$typeName, fullTypeName: composeSuiType( User.$typeName, ...[] ) as `${typeof PKG_V1}::user::User`, typeArgs: [ ] as [], isPhantom: User.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => User.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => User.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => User.fromBcs( data, ), bcs: User.bcs, fromJSONField: (field: any) => User.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => User.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => User.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => User.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => User.fetch( client, id, ), new: ( fields: UserFields, ) => { return new User( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return User.reified() }

 static phantom( ): PhantomReified<ToTypeStr<User>> { return phantom(User.reified( )); } static get p() { return User.phantom() }

 static get bcs() { return bcs.struct("User", {

 id: UID.bcs, accounts: VecMap.bcs(String.bcs, bcs.vector(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })))

}) };

 static fromFields( fields: Record<string, any> ): User { return User.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), accounts: decodeFromFields(VecMap.reified(String.reified(), reified.vector("address")), fields.accounts) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): User { if (!isUser(item.type)) { throw new Error("not a User type");

 }

 return User.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), accounts: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), reified.vector("address")), item.fields.accounts) } ) }

 static fromBcs( data: Uint8Array ): User { return User.fromFields( User.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,accounts: this.accounts.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): User { return User.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), accounts: decodeFromJSONField(VecMap.reified(String.reified(), reified.vector("address")), field.accounts) } ) }

 static fromJSON( json: Record<string, any> ): User { if (json.$typeName !== User.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return User.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): User { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUser(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a User object`); } return User.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): User { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isUser(data.bcs.type)) { throw new Error(`object at is not a User object`); }

 return User.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return User.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<User> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching User object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUser(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a User object`); }

 return User.fromSuiObjectData( res.data ); }

 }

/* ============================== Invite =============================== */

export function isInvite(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::user::Invite`; }

export interface InviteFields { id: ToField<UID>; accountAddr: ToField<"address">; accountType: ToField<String> }

export type InviteReified = Reified< Invite, InviteFields >;

export class Invite implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::user::Invite`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Invite.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::user::Invite`; readonly $typeArgs: []; readonly $isPhantom = Invite.$isPhantom;

 readonly id: ToField<UID>; readonly accountAddr: ToField<"address">; readonly accountType: ToField<String>

 private constructor(typeArgs: [], fields: InviteFields, ) { this.$fullTypeName = composeSuiType( Invite.$typeName, ...typeArgs ) as `${typeof PKG_V1}::user::Invite`; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.accountAddr = fields.accountAddr;; this.accountType = fields.accountType; }

 static reified( ): InviteReified { return { typeName: Invite.$typeName, fullTypeName: composeSuiType( Invite.$typeName, ...[] ) as `${typeof PKG_V1}::user::Invite`, typeArgs: [ ] as [], isPhantom: Invite.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Invite.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Invite.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Invite.fromBcs( data, ), bcs: Invite.bcs, fromJSONField: (field: any) => Invite.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Invite.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Invite.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Invite.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Invite.fetch( client, id, ), new: ( fields: InviteFields, ) => { return new Invite( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Invite.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Invite>> { return phantom(Invite.reified( )); } static get p() { return Invite.phantom() }

 static get bcs() { return bcs.struct("Invite", {

 id: UID.bcs, account_addr: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), account_type: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): Invite { return Invite.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), accountAddr: decodeFromFields("address", fields.account_addr), accountType: decodeFromFields(String.reified(), fields.account_type) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Invite { if (!isInvite(item.type)) { throw new Error("not a Invite type");

 }

 return Invite.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), accountAddr: decodeFromFieldsWithTypes("address", item.fields.account_addr), accountType: decodeFromFieldsWithTypes(String.reified(), item.fields.account_type) } ) }

 static fromBcs( data: Uint8Array ): Invite { return Invite.fromFields( Invite.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,accountAddr: this.accountAddr,accountType: this.accountType,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Invite { return Invite.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), accountAddr: decodeFromJSONField("address", field.accountAddr), accountType: decodeFromJSONField(String.reified(), field.accountType) } ) }

 static fromJSON( json: Record<string, any> ): Invite { if (json.$typeName !== Invite.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Invite.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Invite { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isInvite(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Invite object`); } return Invite.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Invite { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isInvite(data.bcs.type)) { throw new Error(`object at is not a Invite object`); }

 return Invite.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Invite.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Invite> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Invite object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isInvite(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Invite object`); }

 return Invite.fromSuiObjectData( res.data ); }

 }
