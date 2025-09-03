import * as reified from "../../_framework/reified";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {TypeName} from "../../_dependencies/source/0x1/type-name/structs";
import {Bag} from "../../_dependencies/source/0x2/bag/structs";
import {ID, UID} from "../../_dependencies/source/0x2/object/structs";
import {VecSet} from "../../_dependencies/source/0x2/vec-set/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, toBcs} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {Vector} from "../../_framework/vector";
import {PKG_V1} from "../index";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== Intents =============================== */

export function isIntents(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::intents::Intents`; }

export interface IntentsFields { inner: ToField<Bag>; locked: ToField<VecSet<ID>> }

export type IntentsReified = Reified< Intents, IntentsFields >;

export class Intents implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::intents::Intents`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Intents.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::intents::Intents`; readonly $typeArgs: []; readonly $isPhantom = Intents.$isPhantom;

 readonly inner: ToField<Bag>; readonly locked: ToField<VecSet<ID>>

 private constructor(typeArgs: [], fields: IntentsFields, ) { this.$fullTypeName = composeSuiType( Intents.$typeName, ...typeArgs ) as `${typeof PKG_V1}::intents::Intents`; this.$typeArgs = typeArgs;

 this.inner = fields.inner;; this.locked = fields.locked; }

 static reified( ): IntentsReified { return { typeName: Intents.$typeName, fullTypeName: composeSuiType( Intents.$typeName, ...[] ) as `${typeof PKG_V1}::intents::Intents`, typeArgs: [ ] as [], isPhantom: Intents.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Intents.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Intents.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Intents.fromBcs( data, ), bcs: Intents.bcs, fromJSONField: (field: any) => Intents.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Intents.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Intents.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Intents.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Intents.fetch( client, id, ), new: ( fields: IntentsFields, ) => { return new Intents( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Intents.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Intents>> { return phantom(Intents.reified( )); } static get p() { return Intents.phantom() }

 static get bcs() { return bcs.struct("Intents", {

 inner: Bag.bcs, locked: VecSet.bcs(ID.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Intents { return Intents.reified( ).new( { inner: decodeFromFields(Bag.reified(), fields.inner), locked: decodeFromFields(VecSet.reified(ID.reified()), fields.locked) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Intents { if (!isIntents(item.type)) { throw new Error("not a Intents type");

 }

 return Intents.reified( ).new( { inner: decodeFromFieldsWithTypes(Bag.reified(), item.fields.inner), locked: decodeFromFieldsWithTypes(VecSet.reified(ID.reified()), item.fields.locked) } ) }

 static fromBcs( data: Uint8Array ): Intents { return Intents.fromFields( Intents.bcs.parse(data) ) }

 toJSONField() { return {

 inner: this.inner.toJSONField(),locked: this.locked.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Intents { return Intents.reified( ).new( { inner: decodeFromJSONField(Bag.reified(), field.inner), locked: decodeFromJSONField(VecSet.reified(ID.reified()), field.locked) } ) }

 static fromJSON( json: Record<string, any> ): Intents { if (json.$typeName !== Intents.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Intents.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Intents { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isIntents(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Intents object`); } return Intents.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Intents { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isIntents(data.bcs.type)) { throw new Error(`object at is not a Intents object`); }

 return Intents.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Intents.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Intents> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Intents object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isIntents(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Intents object`); }

 return Intents.fromSuiObjectData( res.data ); }

 }

/* ============================== Intent =============================== */

export function isIntent(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::intents::Intent` + '<'); }

export interface IntentFields<Outcome extends TypeArgument> { type: ToField<TypeName>; key: ToField<String>; description: ToField<String>; account: ToField<"address">; creator: ToField<"address">; creationTime: ToField<"u64">; executionTimes: ToField<Vector<"u64">>; expirationTime: ToField<"u64">; role: ToField<String>; actions: ToField<Bag>; outcome: ToField<Outcome> }

export type IntentReified<Outcome extends TypeArgument> = Reified< Intent<Outcome>, IntentFields<Outcome> >;

export class Intent<Outcome extends TypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::intents::Intent`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = Intent.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::intents::Intent<${ToTypeStr<Outcome>}>`; readonly $typeArgs: [ToTypeStr<Outcome>]; readonly $isPhantom = Intent.$isPhantom;

 readonly type: ToField<TypeName>; readonly key: ToField<String>; readonly description: ToField<String>; readonly account: ToField<"address">; readonly creator: ToField<"address">; readonly creationTime: ToField<"u64">; readonly executionTimes: ToField<Vector<"u64">>; readonly expirationTime: ToField<"u64">; readonly role: ToField<String>; readonly actions: ToField<Bag>; readonly outcome: ToField<Outcome>

 private constructor(typeArgs: [ToTypeStr<Outcome>], fields: IntentFields<Outcome>, ) { this.$fullTypeName = composeSuiType( Intent.$typeName, ...typeArgs ) as `${typeof PKG_V1}::intents::Intent<${ToTypeStr<Outcome>}>`; this.$typeArgs = typeArgs;

 this.type = fields.type;; this.key = fields.key;; this.description = fields.description;; this.account = fields.account;; this.creator = fields.creator;; this.creationTime = fields.creationTime;; this.executionTimes = fields.executionTimes;; this.expirationTime = fields.expirationTime;; this.role = fields.role;; this.actions = fields.actions;; this.outcome = fields.outcome; }

 static reified<Outcome extends Reified<TypeArgument, any>>( Outcome: Outcome ): IntentReified<ToTypeArgument<Outcome>> { return { typeName: Intent.$typeName, fullTypeName: composeSuiType( Intent.$typeName, ...[extractType(Outcome)] ) as `${typeof PKG_V1}::intents::Intent<${ToTypeStr<ToTypeArgument<Outcome>>}>`, typeArgs: [ extractType(Outcome) ] as [ToTypeStr<ToTypeArgument<Outcome>>], isPhantom: Intent.$isPhantom, reifiedTypeArgs: [Outcome], fromFields: (fields: Record<string, any>) => Intent.fromFields( Outcome, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Intent.fromFieldsWithTypes( Outcome, item, ), fromBcs: (data: Uint8Array) => Intent.fromBcs( Outcome, data, ), bcs: Intent.bcs(toBcs(Outcome)), fromJSONField: (field: any) => Intent.fromJSONField( Outcome, field, ), fromJSON: (json: Record<string, any>) => Intent.fromJSON( Outcome, json, ), fromSuiParsedData: (content: SuiParsedData) => Intent.fromSuiParsedData( Outcome, content, ), fromSuiObjectData: (content: SuiObjectData) => Intent.fromSuiObjectData( Outcome, content, ), fetch: async (client: SuiClient, id: string) => Intent.fetch( client, Outcome, id, ), new: ( fields: IntentFields<ToTypeArgument<Outcome>>, ) => { return new Intent( [extractType(Outcome)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Intent.reified }

 static phantom<Outcome extends Reified<TypeArgument, any>>( Outcome: Outcome ): PhantomReified<ToTypeStr<Intent<ToTypeArgument<Outcome>>>> { return phantom(Intent.reified( Outcome )); } static get p() { return Intent.phantom }

 static get bcs() { return <Outcome extends BcsType<any>>(Outcome: Outcome) => bcs.struct(`Intent<${Outcome.name}>`, {

 type_: TypeName.bcs, key: String.bcs, description: String.bcs, account: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), creator: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), creation_time: bcs.u64(), execution_times: bcs.vector(bcs.u64()), expiration_time: bcs.u64(), role: String.bcs, actions: Bag.bcs, outcome: Outcome

}) };

 static fromFields<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, fields: Record<string, any> ): Intent<ToTypeArgument<Outcome>> { return Intent.reified( typeArg, ).new( { type: decodeFromFields(TypeName.reified(), fields.type_), key: decodeFromFields(String.reified(), fields.key), description: decodeFromFields(String.reified(), fields.description), account: decodeFromFields("address", fields.account), creator: decodeFromFields("address", fields.creator), creationTime: decodeFromFields("u64", fields.creation_time), executionTimes: decodeFromFields(reified.vector("u64"), fields.execution_times), expirationTime: decodeFromFields("u64", fields.expiration_time), role: decodeFromFields(String.reified(), fields.role), actions: decodeFromFields(Bag.reified(), fields.actions), outcome: decodeFromFields(typeArg, fields.outcome) } ) }

 static fromFieldsWithTypes<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, item: FieldsWithTypes ): Intent<ToTypeArgument<Outcome>> { if (!isIntent(item.type)) { throw new Error("not a Intent type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Intent.reified( typeArg, ).new( { type: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.type_), key: decodeFromFieldsWithTypes(String.reified(), item.fields.key), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), account: decodeFromFieldsWithTypes("address", item.fields.account), creator: decodeFromFieldsWithTypes("address", item.fields.creator), creationTime: decodeFromFieldsWithTypes("u64", item.fields.creation_time), executionTimes: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.execution_times), expirationTime: decodeFromFieldsWithTypes("u64", item.fields.expiration_time), role: decodeFromFieldsWithTypes(String.reified(), item.fields.role), actions: decodeFromFieldsWithTypes(Bag.reified(), item.fields.actions), outcome: decodeFromFieldsWithTypes(typeArg, item.fields.outcome) } ) }

 static fromBcs<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, data: Uint8Array ): Intent<ToTypeArgument<Outcome>> { const typeArgs = [typeArg];

 return Intent.fromFields( typeArg, Intent.bcs( toBcs(typeArgs[0]) ).parse(data) ) }

 toJSONField() { return {

 type: this.type.toJSONField(),key: this.key,description: this.description,account: this.account,creator: this.creator,creationTime: this.creationTime.toString(),executionTimes: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.executionTimes),expirationTime: this.expirationTime.toString(),role: this.role,actions: this.actions.toJSONField(),outcome: fieldToJSON<Outcome>(this.$typeArgs[0], this.outcome),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, field: any ): Intent<ToTypeArgument<Outcome>> { return Intent.reified( typeArg, ).new( { type: decodeFromJSONField(TypeName.reified(), field.type), key: decodeFromJSONField(String.reified(), field.key), description: decodeFromJSONField(String.reified(), field.description), account: decodeFromJSONField("address", field.account), creator: decodeFromJSONField("address", field.creator), creationTime: decodeFromJSONField("u64", field.creationTime), executionTimes: decodeFromJSONField(reified.vector("u64"), field.executionTimes), expirationTime: decodeFromJSONField("u64", field.expirationTime), role: decodeFromJSONField(String.reified(), field.role), actions: decodeFromJSONField(Bag.reified(), field.actions), outcome: decodeFromJSONField(typeArg, field.outcome) } ) }

 static fromJSON<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, json: Record<string, any> ): Intent<ToTypeArgument<Outcome>> { if (json.$typeName !== Intent.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Intent.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Intent.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, content: SuiParsedData ): Intent<ToTypeArgument<Outcome>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isIntent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Intent object`); } return Intent.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, data: SuiObjectData ): Intent<ToTypeArgument<Outcome>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isIntent(data.bcs.type)) { throw new Error(`object at is not a Intent object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Intent.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Intent.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<Outcome extends Reified<TypeArgument, any>>( client: SuiClient, typeArg: Outcome, id: string ): Promise<Intent<ToTypeArgument<Outcome>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Intent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isIntent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Intent object`); }

 return Intent.fromSuiObjectData( typeArg, res.data ); }

 }

/* ============================== Expired =============================== */

export function isExpired(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::intents::Expired`; }

export interface ExpiredFields { account: ToField<"address">; startIndex: ToField<"u64">; actions: ToField<Bag> }

export type ExpiredReified = Reified< Expired, ExpiredFields >;

export class Expired implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::intents::Expired`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Expired.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::intents::Expired`; readonly $typeArgs: []; readonly $isPhantom = Expired.$isPhantom;

 readonly account: ToField<"address">; readonly startIndex: ToField<"u64">; readonly actions: ToField<Bag>

 private constructor(typeArgs: [], fields: ExpiredFields, ) { this.$fullTypeName = composeSuiType( Expired.$typeName, ...typeArgs ) as `${typeof PKG_V1}::intents::Expired`; this.$typeArgs = typeArgs;

 this.account = fields.account;; this.startIndex = fields.startIndex;; this.actions = fields.actions; }

 static reified( ): ExpiredReified { return { typeName: Expired.$typeName, fullTypeName: composeSuiType( Expired.$typeName, ...[] ) as `${typeof PKG_V1}::intents::Expired`, typeArgs: [ ] as [], isPhantom: Expired.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Expired.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Expired.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Expired.fromBcs( data, ), bcs: Expired.bcs, fromJSONField: (field: any) => Expired.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Expired.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Expired.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Expired.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Expired.fetch( client, id, ), new: ( fields: ExpiredFields, ) => { return new Expired( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Expired.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Expired>> { return phantom(Expired.reified( )); } static get p() { return Expired.phantom() }

 static get bcs() { return bcs.struct("Expired", {

 account: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), start_index: bcs.u64(), actions: Bag.bcs

}) };

 static fromFields( fields: Record<string, any> ): Expired { return Expired.reified( ).new( { account: decodeFromFields("address", fields.account), startIndex: decodeFromFields("u64", fields.start_index), actions: decodeFromFields(Bag.reified(), fields.actions) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Expired { if (!isExpired(item.type)) { throw new Error("not a Expired type");

 }

 return Expired.reified( ).new( { account: decodeFromFieldsWithTypes("address", item.fields.account), startIndex: decodeFromFieldsWithTypes("u64", item.fields.start_index), actions: decodeFromFieldsWithTypes(Bag.reified(), item.fields.actions) } ) }

 static fromBcs( data: Uint8Array ): Expired { return Expired.fromFields( Expired.bcs.parse(data) ) }

 toJSONField() { return {

 account: this.account,startIndex: this.startIndex.toString(),actions: this.actions.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Expired { return Expired.reified( ).new( { account: decodeFromJSONField("address", field.account), startIndex: decodeFromJSONField("u64", field.startIndex), actions: decodeFromJSONField(Bag.reified(), field.actions) } ) }

 static fromJSON( json: Record<string, any> ): Expired { if (json.$typeName !== Expired.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Expired.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Expired { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExpired(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Expired object`); } return Expired.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Expired { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExpired(data.bcs.type)) { throw new Error(`object at is not a Expired object`); }

 return Expired.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Expired.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Expired> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Expired object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExpired(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Expired object`); }

 return Expired.fromSuiObjectData( res.data ); }

 }

/* ============================== Params =============================== */

export function isParams(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::intents::Params`; }

export interface ParamsFields { id: ToField<UID> }

export type ParamsReified = Reified< Params, ParamsFields >;

export class Params implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::intents::Params`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = Params.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::intents::Params`; readonly $typeArgs: []; readonly $isPhantom = Params.$isPhantom;

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: ParamsFields, ) { this.$fullTypeName = composeSuiType( Params.$typeName, ...typeArgs ) as `${typeof PKG_V1}::intents::Params`; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): ParamsReified { return { typeName: Params.$typeName, fullTypeName: composeSuiType( Params.$typeName, ...[] ) as `${typeof PKG_V1}::intents::Params`, typeArgs: [ ] as [], isPhantom: Params.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Params.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Params.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Params.fromBcs( data, ), bcs: Params.bcs, fromJSONField: (field: any) => Params.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Params.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Params.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => Params.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => Params.fetch( client, id, ), new: ( fields: ParamsFields, ) => { return new Params( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Params.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Params>> { return phantom(Params.reified( )); } static get p() { return Params.phantom() }

 static get bcs() { return bcs.struct("Params", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): Params { return Params.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Params { if (!isParams(item.type)) { throw new Error("not a Params type");

 }

 return Params.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): Params { return Params.fromFields( Params.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Params { return Params.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): Params { if (json.$typeName !== Params.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Params.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Params { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isParams(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Params object`); } return Params.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): Params { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isParams(data.bcs.type)) { throw new Error(`object at is not a Params object`); }

 return Params.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Params.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<Params> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Params object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isParams(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Params object`); }

 return Params.fromSuiObjectData( res.data ); }

 }

/* ============================== ParamsFieldsV1 =============================== */

export function isParamsFieldsV1(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::intents::ParamsFieldsV1`; }

export interface ParamsFieldsV1Fields { key: ToField<String>; description: ToField<String>; creationTime: ToField<"u64">; executionTimes: ToField<Vector<"u64">>; expirationTime: ToField<"u64"> }

export type ParamsFieldsV1Reified = Reified< ParamsFieldsV1, ParamsFieldsV1Fields >;

export class ParamsFieldsV1 implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::intents::ParamsFieldsV1`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = ParamsFieldsV1.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::intents::ParamsFieldsV1`; readonly $typeArgs: []; readonly $isPhantom = ParamsFieldsV1.$isPhantom;

 readonly key: ToField<String>; readonly description: ToField<String>; readonly creationTime: ToField<"u64">; readonly executionTimes: ToField<Vector<"u64">>; readonly expirationTime: ToField<"u64">

 private constructor(typeArgs: [], fields: ParamsFieldsV1Fields, ) { this.$fullTypeName = composeSuiType( ParamsFieldsV1.$typeName, ...typeArgs ) as `${typeof PKG_V1}::intents::ParamsFieldsV1`; this.$typeArgs = typeArgs;

 this.key = fields.key;; this.description = fields.description;; this.creationTime = fields.creationTime;; this.executionTimes = fields.executionTimes;; this.expirationTime = fields.expirationTime; }

 static reified( ): ParamsFieldsV1Reified { return { typeName: ParamsFieldsV1.$typeName, fullTypeName: composeSuiType( ParamsFieldsV1.$typeName, ...[] ) as `${typeof PKG_V1}::intents::ParamsFieldsV1`, typeArgs: [ ] as [], isPhantom: ParamsFieldsV1.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ParamsFieldsV1.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ParamsFieldsV1.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ParamsFieldsV1.fromBcs( data, ), bcs: ParamsFieldsV1.bcs, fromJSONField: (field: any) => ParamsFieldsV1.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ParamsFieldsV1.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ParamsFieldsV1.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => ParamsFieldsV1.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => ParamsFieldsV1.fetch( client, id, ), new: ( fields: ParamsFieldsV1Fields, ) => { return new ParamsFieldsV1( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ParamsFieldsV1.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ParamsFieldsV1>> { return phantom(ParamsFieldsV1.reified( )); } static get p() { return ParamsFieldsV1.phantom() }

 static get bcs() { return bcs.struct("ParamsFieldsV1", {

 key: String.bcs, description: String.bcs, creation_time: bcs.u64(), execution_times: bcs.vector(bcs.u64()), expiration_time: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ParamsFieldsV1 { return ParamsFieldsV1.reified( ).new( { key: decodeFromFields(String.reified(), fields.key), description: decodeFromFields(String.reified(), fields.description), creationTime: decodeFromFields("u64", fields.creation_time), executionTimes: decodeFromFields(reified.vector("u64"), fields.execution_times), expirationTime: decodeFromFields("u64", fields.expiration_time) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ParamsFieldsV1 { if (!isParamsFieldsV1(item.type)) { throw new Error("not a ParamsFieldsV1 type");

 }

 return ParamsFieldsV1.reified( ).new( { key: decodeFromFieldsWithTypes(String.reified(), item.fields.key), description: decodeFromFieldsWithTypes(String.reified(), item.fields.description), creationTime: decodeFromFieldsWithTypes("u64", item.fields.creation_time), executionTimes: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.execution_times), expirationTime: decodeFromFieldsWithTypes("u64", item.fields.expiration_time) } ) }

 static fromBcs( data: Uint8Array ): ParamsFieldsV1 { return ParamsFieldsV1.fromFields( ParamsFieldsV1.bcs.parse(data) ) }

 toJSONField() { return {

 key: this.key,description: this.description,creationTime: this.creationTime.toString(),executionTimes: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.executionTimes),expirationTime: this.expirationTime.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ParamsFieldsV1 { return ParamsFieldsV1.reified( ).new( { key: decodeFromJSONField(String.reified(), field.key), description: decodeFromJSONField(String.reified(), field.description), creationTime: decodeFromJSONField("u64", field.creationTime), executionTimes: decodeFromJSONField(reified.vector("u64"), field.executionTimes), expirationTime: decodeFromJSONField("u64", field.expirationTime) } ) }

 static fromJSON( json: Record<string, any> ): ParamsFieldsV1 { if (json.$typeName !== ParamsFieldsV1.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ParamsFieldsV1.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ParamsFieldsV1 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isParamsFieldsV1(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ParamsFieldsV1 object`); } return ParamsFieldsV1.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): ParamsFieldsV1 { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isParamsFieldsV1(data.bcs.type)) { throw new Error(`object at is not a ParamsFieldsV1 object`); }

 return ParamsFieldsV1.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return ParamsFieldsV1.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<ParamsFieldsV1> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ParamsFieldsV1 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isParamsFieldsV1(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ParamsFieldsV1 object`); }

 return ParamsFieldsV1.fromSuiObjectData( res.data ); }

 }
