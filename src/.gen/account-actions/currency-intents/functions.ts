import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/ascii/structs";
import {Option} from "../../_dependencies/source/0x1/option/structs";
import {String as String1} from "../../_dependencies/source/0x1/string/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface RequestDisableRulesArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; mint: boolean | TransactionArgument; burn: boolean | TransactionArgument; updateSymbol: boolean | TransactionArgument; updateName: boolean | TransactionArgument; updateDescription: boolean | TransactionArgument; updateIcon: boolean | TransactionArgument }

export function requestDisableRules( tx: Transaction, typeArgs: [string, string, string], args: RequestDisableRulesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::request_disable_rules`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.mint, `bool`), pure(tx, args.burn, `bool`), pure(tx, args.updateSymbol, `bool`), pure(tx, args.updateName, `bool`), pure(tx, args.updateDescription, `bool`), pure(tx, args.updateIcon, `bool`) ], }) }

export interface ExecuteDisableRulesArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeDisableRules( tx: Transaction, typeArgs: [string, string, string], args: ExecuteDisableRulesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::execute_disable_rules`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }

export interface RequestUpdateMetadataArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; mdSymbol: (string | TransactionArgument | TransactionArgument | null); mdName: (string | TransactionArgument | TransactionArgument | null); mdDescription: (string | TransactionArgument | TransactionArgument | null); mdIconUrl: (string | TransactionArgument | TransactionArgument | null) }

export function requestUpdateMetadata( tx: Transaction, typeArgs: [string, string, string], args: RequestUpdateMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::request_update_metadata`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.mdSymbol, `${Option.$typeName}<${String.$typeName}>`), pure(tx, args.mdName, `${Option.$typeName}<${String1.$typeName}>`), pure(tx, args.mdDescription, `${Option.$typeName}<${String1.$typeName}>`), pure(tx, args.mdIconUrl, `${Option.$typeName}<${String.$typeName}>`) ], }) }

export interface ExecuteUpdateMetadataArgs { executable: TransactionObjectInput; account: TransactionObjectInput; metadata: TransactionObjectInput }

export function executeUpdateMetadata( tx: Transaction, typeArgs: [string, string, string], args: ExecuteUpdateMetadataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::execute_update_metadata`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.metadata) ], }) }

export interface RequestMintAndTransferArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; amounts: Array<bigint | TransactionArgument> | TransactionArgument; recipients: Array<string | TransactionArgument> | TransactionArgument }

export function requestMintAndTransfer( tx: Transaction, typeArgs: [string, string, string], args: RequestMintAndTransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::request_mint_and_transfer`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.amounts, `vector<u64>`), pure(tx, args.recipients, `vector<address>`) ], }) }

export interface ExecuteMintAndTransferArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeMintAndTransfer( tx: Transaction, typeArgs: [string, string, string], args: ExecuteMintAndTransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::execute_mint_and_transfer`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }

export interface RequestMintAndVestArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; totalAmount: bigint | TransactionArgument; startTimestamp: bigint | TransactionArgument; endTimestamp: bigint | TransactionArgument; recipient: string | TransactionArgument }

export function requestMintAndVest( tx: Transaction, typeArgs: [string, string, string], args: RequestMintAndVestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::request_mint_and_vest`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.totalAmount, `u64`), pure(tx, args.startTimestamp, `u64`), pure(tx, args.endTimestamp, `u64`), pure(tx, args.recipient, `address`) ], }) }

export interface ExecuteMintAndVestArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeMintAndVest( tx: Transaction, typeArgs: [string, string, string], args: ExecuteMintAndVestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::execute_mint_and_vest`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }

export interface RequestWithdrawAndBurnArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; coinId: string | TransactionArgument; amount: bigint | TransactionArgument }

export function requestWithdrawAndBurn( tx: Transaction, typeArgs: [string, string, string], args: RequestWithdrawAndBurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::request_withdraw_and_burn`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.coinId, `${ID.$typeName}`), pure(tx, args.amount, `u64`) ], }) }

export interface ExecuteWithdrawAndBurnArgs { executable: TransactionObjectInput; account: TransactionObjectInput; receiving: TransactionObjectInput }

export function executeWithdrawAndBurn( tx: Transaction, typeArgs: [string, string, string], args: ExecuteWithdrawAndBurnArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::execute_withdraw_and_burn`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.receiving) ], }) }

export function typeNameToString( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::currency_intents::type_name_to_string`, typeArguments: [typeArg], arguments: [ ], }) }
