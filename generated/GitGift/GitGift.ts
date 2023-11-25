// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Claimed extends ethereum.Event {
  get params(): Claimed__Params {
    return new Claimed__Params(this);
  }
}

export class Claimed__Params {
  _event: Claimed;

  constructor(event: Claimed) {
    this._event = event;
  }

  get githubUserId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ethAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DonatedETH extends ethereum.Event {
  get params(): DonatedETH__Params {
    return new DonatedETH__Params(this);
  }
}

export class DonatedETH__Params {
  _event: DonatedETH;

  constructor(event: DonatedETH) {
    this._event = event;
  }

  get githubUserId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class GitGift__configResultValue0Struct extends ethereum.Tuple {
  get appId(): Bytes {
    return this[0].toBytes();
  }

  get vault(): GitGift__configResultValue0VaultStruct {
    return changetype<GitGift__configResultValue0VaultStruct>(
      this[1].toTuple()
    );
  }
}

export class GitGift__configResultValue0VaultStruct extends ethereum.Tuple {
  get isImpersonationMode(): boolean {
    return this[0].toBoolean();
  }
}

export class GitGift__ethDonationsResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getDonor(): Address {
    return this.value0;
  }

  getAmount(): BigInt {
    return this.value1;
  }
}

export class GitGift extends ethereum.SmartContract {
  static bind(address: Address): GitGift {
    return new GitGift("GitGift", address);
  }

  ADDRESSES_PROVIDER_V2(): Address {
    let result = super.call(
      "ADDRESSES_PROVIDER_V2",
      "ADDRESSES_PROVIDER_V2():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_ADDRESSES_PROVIDER_V2(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ADDRESSES_PROVIDER_V2",
      "ADDRESSES_PROVIDER_V2():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  APP_ID(): Bytes {
    let result = super.call("APP_ID", "APP_ID():(bytes16)", []);

    return result[0].toBytes();
  }

  try_APP_ID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("APP_ID", "APP_ID():(bytes16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  IS_IMPERSONATION_MODE(): boolean {
    let result = super.call(
      "IS_IMPERSONATION_MODE",
      "IS_IMPERSONATION_MODE():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_IS_IMPERSONATION_MODE(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "IS_IMPERSONATION_MODE",
      "IS_IMPERSONATION_MODE():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  SISMO_CONNECT_LIB_VERSION(): BigInt {
    let result = super.call(
      "SISMO_CONNECT_LIB_VERSION",
      "SISMO_CONNECT_LIB_VERSION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_SISMO_CONNECT_LIB_VERSION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "SISMO_CONNECT_LIB_VERSION",
      "SISMO_CONNECT_LIB_VERSION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimed(param0: BigInt): boolean {
    let result = super.call("claimed", "claimed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBoolean();
  }

  try_claimed(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("claimed", "claimed(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  config(): GitGift__configResultValue0Struct {
    let result = super.call("config", "config():((bytes16,(bool)))", []);

    return changetype<GitGift__configResultValue0Struct>(result[0].toTuple());
  }

  try_config(): ethereum.CallResult<GitGift__configResultValue0Struct> {
    let result = super.tryCall("config", "config():((bytes16,(bool)))", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<GitGift__configResultValue0Struct>(value[0].toTuple())
    );
  }

  decimalToHexadecimal(decimalNumber: BigInt): string {
    let result = super.call(
      "decimalToHexadecimal",
      "decimalToHexadecimal(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(decimalNumber)]
    );

    return result[0].toString();
  }

  try_decimalToHexadecimal(decimalNumber: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "decimalToHexadecimal",
      "decimalToHexadecimal(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(decimalNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ethDonations(param0: BigInt, param1: BigInt): GitGift__ethDonationsResult {
    let result = super.call(
      "ethDonations",
      "ethDonations(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new GitGift__ethDonationsResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_ethDonations(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<GitGift__ethDonationsResult> {
    let result = super.tryCall(
      "ethDonations",
      "ethDonations(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GitGift__ethDonationsResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  findFirstNaturalNumberAfterSubstring(
    inputString: string,
    substring: string
  ): BigInt {
    let result = super.call(
      "findFirstNaturalNumberAfterSubstring",
      "findFirstNaturalNumberAfterSubstring(string,string):(uint256)",
      [
        ethereum.Value.fromString(inputString),
        ethereum.Value.fromString(substring)
      ]
    );

    return result[0].toBigInt();
  }

  try_findFirstNaturalNumberAfterSubstring(
    inputString: string,
    substring: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "findFirstNaturalNumberAfterSubstring",
      "findFirstNaturalNumberAfterSubstring(string,string):(uint256)",
      [
        ethereum.Value.fromString(inputString),
        ethereum.Value.fromString(substring)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  processNumber(decimalNumber: BigInt): BigInt {
    let result = super.call(
      "processNumber",
      "processNumber(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(decimalNumber)]
    );

    return result[0].toBigInt();
  }

  try_processNumber(decimalNumber: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "processNumber",
      "processNumber(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(decimalNumber)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimWithSismoCall extends ethereum.Call {
  get inputs(): ClaimWithSismoCall__Inputs {
    return new ClaimWithSismoCall__Inputs(this);
  }

  get outputs(): ClaimWithSismoCall__Outputs {
    return new ClaimWithSismoCall__Outputs(this);
  }
}

export class ClaimWithSismoCall__Inputs {
  _call: ClaimWithSismoCall;

  constructor(call: ClaimWithSismoCall) {
    this._call = call;
  }

  get response(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ClaimWithSismoCall__Outputs {
  _call: ClaimWithSismoCall;

  constructor(call: ClaimWithSismoCall) {
    this._call = call;
  }
}

export class DonateETHCall extends ethereum.Call {
  get inputs(): DonateETHCall__Inputs {
    return new DonateETHCall__Inputs(this);
  }

  get outputs(): DonateETHCall__Outputs {
    return new DonateETHCall__Outputs(this);
  }
}

export class DonateETHCall__Inputs {
  _call: DonateETHCall;

  constructor(call: DonateETHCall) {
    this._call = call;
  }

  get githubUserId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DonateETHCall__Outputs {
  _call: DonateETHCall;

  constructor(call: DonateETHCall) {
    this._call = call;
  }
}
