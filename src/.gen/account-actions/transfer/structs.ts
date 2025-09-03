import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../_framework/util";
import {PKG_V1} from "../index";
import {bcs} from "@mysten/sui/bcs";
import {SuiClient, SuiObjectData, SuiParsedData} from "@mysten/sui/client";
import {fromB64, fromHEX, toHEX} from "@mysten/sui/utils";

/* ============================== TransferAction =============================== */

export function isTransferAction(type: string): boolean { type = compressSuiType(type); return type === `${PKG_V1}::transfer::TransferAction`; }

export interface TransferActionFields { recipient: ToField<"address"> }

export type TransferActionReified = Reified< TransferAction, TransferActionFields >;

export class TransferAction implements StructClass { __StructClass = true as const;

 static readonly $typeName = `${PKG_V1}::transfer::TransferAction`; static readonly $numTypeParams = 0; static readonly $isPhantom = [] as const;

 readonly $typeName = TransferAction.$typeName; readonly $fullTypeName: `${typeof PKG_V1}::transfer::TransferAction`; readonly $typeArgs: []; readonly $isPhantom = TransferAction.$isPhantom;

 readonly recipient: ToField<"address">

 private constructor(typeArgs: [], fields: TransferActionFields, ) { this.$fullTypeName = composeSuiType( TransferAction.$typeName, ...typeArgs ) as `${typeof PKG_V1}::transfer::TransferAction`; this.$typeArgs = typeArgs;

 this.recipient = fields.recipient; }

 static reified( ): TransferActionReified { return { typeName: TransferAction.$typeName, fullTypeName: composeSuiType( TransferAction.$typeName, ...[] ) as `${typeof PKG_V1}::transfer::TransferAction`, typeArgs: [ ] as [], isPhantom: TransferAction.$isPhantom, reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TransferAction.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TransferAction.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TransferAction.fromBcs( data, ), bcs: TransferAction.bcs, fromJSONField: (field: any) => TransferAction.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TransferAction.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TransferAction.fromSuiParsedData( content, ), fromSuiObjectData: (content: SuiObjectData) => TransferAction.fromSuiObjectData( content, ), fetch: async (client: SuiClient, id: string) => TransferAction.fetch( client, id, ), new: ( fields: TransferActionFields, ) => { return new TransferAction( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TransferAction.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TransferAction>> { return phantom(TransferAction.reified( )); } static get p() { return TransferAction.phantom() }

 static get bcs() { return bcs.struct("TransferAction", {

 recipient: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), })

}) };

 static fromFields( fields: Record<string, any> ): TransferAction { return TransferAction.reified( ).new( { recipient: decodeFromFields("address", fields.recipient) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TransferAction { if (!isTransferAction(item.type)) { throw new Error("not a TransferAction type");

 }

 return TransferAction.reified( ).new( { recipient: decodeFromFieldsWithTypes("address", item.fields.recipient) } ) }

 static fromBcs( data: Uint8Array ): TransferAction { return TransferAction.fromFields( TransferAction.bcs.parse(data) ) }

 toJSONField() { return {

 recipient: this.recipient,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TransferAction { return TransferAction.reified( ).new( { recipient: decodeFromJSONField("address", field.recipient) } ) }

 static fromJSON( json: Record<string, any> ): TransferAction { if (json.$typeName !== TransferAction.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TransferAction.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TransferAction { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTransferAction(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TransferAction object`); } return TransferAction.fromFieldsWithTypes( content ); }

 static fromSuiObjectData( data: SuiObjectData ): TransferAction { if (data.bcs) { if (data.bcs.dataType !== "moveObject" || !isTransferAction(data.bcs.type)) { throw new Error(`object at is not a TransferAction object`); }

 return TransferAction.fromBcs( fromB64(data.bcs.bcsBytes) ); } if (data.content) { return TransferAction.fromSuiParsedData( data.content ) } throw new Error( "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request." ); }

 static async fetch( client: SuiClient, id: string ): Promise<TransferAction> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TransferAction object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTransferAction(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TransferAction object`); }

 return TransferAction.fromSuiObjectData( res.data ); }

 }
