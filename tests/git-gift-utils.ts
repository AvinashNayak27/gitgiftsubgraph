import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { Claimed, DonatedETH } from "../generated/GitGift/GitGift"

export function createClaimedEvent(
  githubUserId: BigInt,
  ethAmount: BigInt
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "githubUserId",
      ethereum.Value.fromUnsignedBigInt(githubUserId)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "ethAmount",
      ethereum.Value.fromUnsignedBigInt(ethAmount)
    )
  )

  return claimedEvent
}

export function createDonatedETHEvent(
  githubUserId: BigInt,
  amount: BigInt
): DonatedETH {
  let donatedEthEvent = changetype<DonatedETH>(newMockEvent())

  donatedEthEvent.parameters = new Array()

  donatedEthEvent.parameters.push(
    new ethereum.EventParam(
      "githubUserId",
      ethereum.Value.fromUnsignedBigInt(githubUserId)
    )
  )
  donatedEthEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donatedEthEvent
}
