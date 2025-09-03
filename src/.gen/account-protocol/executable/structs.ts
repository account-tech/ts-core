import {PhantomReified, Reified, StructClass, ToField, ToTypeArgument, ToTypeStr, TypeArgument, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom, toBcs} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType, parseTypeName} from "../../_framework/util";
import {PKG_V1} from "../index";
import {Intent} from "../intents/structs";
import {BcsType, bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== Executable =============================== */

export function isExecutable(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::executable::Executable` + '<'); }

export interface ExecutableFields<Outcome extends TypeArgument> { intent: ToField<Intent<Outcome>>; actionIdx: ToField<"u64"> }

export type ExecutableReified<Outcome extends TypeArgument> = Reified< Executable<Outcome>, ExecutableFields<Outcome> >;

export class Executable<Outcome extends TypeArgument> implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::executable::Executable`; static readonly $numTypeParams = 1; static readonly $isPhantom = [false,] as const;

 readonly $typeName = Executable.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::executable::Executable<${ToTypeStr<Outcome>}>`; readonly $typeArgs: [ToTypeStr<Outcome>]; readonly $isPhantom = Executable.$isPhantom;

 readonly intent: ToField<Intent<Outcome>>; readonly actionIdx: ToField<"u64">

 private constructor(typeArgs: [ToTypeStr<Outcome>], fields: ExecutableFields<Outcome>, ) { this.$fullTypeName = composeSuiType( Executable.$typeName, ...typeArgs ) as `${typeof PKG_V1}::executable::Executable<${ToTypeStr<Outcome>}>`; this.$typeArgs = typeArgs;

 this.intent = fields.intent;; this.actionIdx = fields.actionIdx; }

 static reified<Outcome extends Reified<TypeArgument, any>>( Outcome: Outcome ): ExecutableReified<ToTypeArgument<Outcome>> { return { typeName: Executable.$typeName, fullTypeName: composeSuiType( Executable.$typeName, ...[extractType(Outcome)] ) as `${typeof PKG_V1}::executable::Executable<${ToTypeStr<ToTypeArgument<Outcome>>}>`, typeArgs: [ extractType(Outcome) ] as [ToTypeStr<ToTypeArgument<Outcome>>], isPhantom: Executable.$isPhantom, reifiedTypeArgs: [Outcome], fromFields: (fields: Record<string, any>) => Executable.fromFields( Outcome, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Executable.fromFieldsWithTypes( Outcome, item, ), fromBcs: (data: Uint8Array) => Executable.fromBcs( Outcome, data, ), bcs: Executable.bcs(toBcs(Outcome)), fromJSONField: (field: any) => Executable.fromJSONField( Outcome, field, ), fromJSON: (json: Record<string, any>) => Executable.fromJSON( Outcome, json, ), fromSuiParsedData: (content: SuiParsedData) => Executable.fromSuiParsedData( Outcome, content, ), fromSuiObjectData: (content: SuiObjectData) => Executable.fromSuiObjectData( Outcome, content, ), fetch: async (client: SuiClient, id: string) => Executable.fetch( client, Outcome, id, ), new: ( fields: ExecutableFields<ToTypeArgument<Outcome>>, ) => { return new Executable( [extractType(Outcome)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Executable.reified }

 static phantom<Outcome extends Reified<TypeArgument, any>>( Outcome: Outcome ): PhantomReified<ToTypeStr<Executable<ToTypeArgument<Outcome>>>> { return phantom(Executable.reified( Outcome )); } static get p() { return Executable.phantom }

 static get bcs() { return <Outcome extends BcsType<any>>(Outcome: Outcome) => bcs.struct(`Executable<${Outcome.name}>`, {

 intent: Intent.bcs(Outcome), action_idx: bcs.u64()

}) };

 static fromFields<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, fields: Record<string, any> ): Executable<ToTypeArgument<Outcome>> { return Executable.reified( typeArg, ).new( { intent: decodeFromFields(Intent.reified(typeArg), fields.intent), actionIdx: decodeFromFields("u64", fields.action_idx) } ) }

 static fromFieldsWithTypes<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, item: FieldsWithTypes ): Executable<ToTypeArgument<Outcome>> { if (!isExecutable(item.type)) { throw new Error("not a Executable type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Executable.reified( typeArg, ).new( { intent: decodeFromFieldsWithTypes(Intent.reified(typeArg), item.fields.intent), actionIdx: decodeFromFieldsWithTypes("u64", item.fields.action_idx) } ) }

 static fromBcs<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, data: Uint8Array ): Executable<ToTypeArgument<Outcome>> { const typeArgs = [typeArg];

 return Executable.fromFields( typeArg, Executable.bcs( toBcs(typeArgs[0]) ).parse(data) ) }

 toJSONField() { return {

 intent: this.intent.toJSONField(),actionIdx: this.actionIdx.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, field: any ): Executable<ToTypeArgument<Outcome>> { return Executable.reified( typeArg, ).new( { intent: decodeFromJSONField(Intent.reified(typeArg), field.intent), actionIdx: decodeFromJSONField("u64", field.actionIdx) } ) }

 static fromJSON<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, json: Record<string, any> ): Executable<ToTypeArgument<Outcome>> { if (json.$typeName !== Executable.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Executable.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Executable.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, content: SuiParsedData ): Executable<ToTypeArgument<Outcome>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isExecutable(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Executable object`); } return Executable.fromFieldsWithTypes( typeArg, content ); }

 static fromSuiObjectData<Outcome extends Reified<TypeArgument, any>>( typeArg: Outcome, data: SuiObjectData ): Executable<ToTypeArgument<Outcome>> { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isExecutable(data.bcs.type)) { throw new Error(`object at is not a Executable object`); }

 const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs; if (gotTypeArgs.length !== 1) { throw new Error(`type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`); }; const gotTypeArg = compressSuiType(gotTypeArgs[0]); const expectedTypeArg = compressSuiType(extractType(typeArg)); if (gotTypeArg !== compressSuiType(extractType(typeArg))) { throw new Error(`type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`); };

 return Executable.fromBcs( typeArg, fromB64(data.bcs.bcsBytes) ); } if (data.content) { return Executable.fromSuiParsedData( typeArg, data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch<Outcome extends Reified<TypeArgument, any>>( client: SuiClient, typeArg: Outcome, id: string ): Promise<Executable<ToTypeArgument<Outcome>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Executable object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isExecutable(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Executable object`); }

 return Executable.fromSuiObjectData( typeArg, res.data ); }

 }
