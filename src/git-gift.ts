import {
  Claimed as ClaimedEvent,
  DonatedETH as DonatedETHEvent
} from "../generated/GitGift/GitGift"
import { Claimed, DonatedETH } from "../generated/schema"

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.githubUserId = event.params.githubUserId
  entity.ethAmount = event.params.ethAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonatedETH(event: DonatedETHEvent): void {
  let entity = new DonatedETH(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.githubUserId = event.params.githubUserId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
