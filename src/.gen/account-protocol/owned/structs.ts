import {ID} from "../../_dependencies/source/0x2/object/structs";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64} from "@mysten/sui/utils";

/* ============================== WithdrawAction =============================== */

export function isWithdrawAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::owned::WithdrawAction`; }

export interface WithdrawActionFields { objectId: ToField<ID> }

export type WithdrawActionReified = Reified< WithdrawAction, WithdrawActionFields >;

export class WithdrawAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::owned::WithdrawAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = WithdrawAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::owned::WithdrawAction`; readonly $typeArgs: []; readonly $isPhantom = WithdrawAction.$isPhantom;

 readonly objectId: ToField<ID>

 private constructor(typeArgs: [], fields: WithdrawActionFields, ) { this.$fullTypeName = composeSuiType( WithdrawAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::owned::WithdrawAction`; this.$typeArgs = typeArgs;

 this.objectId = fields.objectId; }

 static reified( ): WithdrawActionReified { return { typeName: WithdrawAction.$typeName, fullTypeName: composeSuiType( WithdrawAction.$typeName, ...[] ) as `${typeof PKG_V1}::owned::WithdrawAction`, typeArgs: [ ] as [], isPhantom: WithdrawAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WithdrawAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WithdrawAction.fromBcs( data, ), bcs: WithdrawAction.bcs, fromJSONField: (field: any) => WithdrawAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WithdrawAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => WithdrawAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => WithdrawAction.fetch( client, id, ), new: ( fields: WithdrawActionFields, ) => { return new WithdrawAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WithdrawAction>> { return phantom(WithdrawAction.reified( )); } static get p() { return WithdrawAction.phantom() }

 static get bcs() { return bcs.struct("WithdrawAction", {

 object_id: ID.bcs

}) };

 static fromFields( fields: Record<string, any> ): WithdrawAction { return WithdrawAction.reified( ).new( { objectId: decodeFromFields(ID.reified(), fields.object_id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WithdrawAction { if (!isWithdrawAction(item.type)) { throw new Error("not a WithdrawAction type");

 }

 return WithdrawAction.reified( ).new( { objectId: decodeFromFieldsWithTypes(ID.reified(), item.fields.object_id) } ) }

 static fromBcs( data: Uint8Array ): WithdrawAction { return WithdrawAction.fromFields( WithdrawAction.bcs.parse(data) ) }

 toJSONField() { return {

 objectId: this.objectId,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WithdrawAction { return WithdrawAction.reified( ).new( { objectId: decodeFromJSONField(ID.reified(), field.objectId) } ) }

 static fromJSON( json: Record<string, any> ): WithdrawAction { if (json.$typeName !== WithdrawAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WithdrawAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WithdrawAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawAction object`); } return WithdrawAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): WithdrawAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isWithdrawAction(data.bcs.type)) { throw new Error(`object at is not a WithdrawAction object`); }

 return WithdrawAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return WithdrawAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<WithdrawAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawAction object`); }

 return WithdrawAction.fromSuiObjectData( res.data ); }

 }
