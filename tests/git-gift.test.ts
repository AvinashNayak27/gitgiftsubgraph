import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { Claimed } from "../generated/schema"
import { Claimed as ClaimedEvent } from "../generated/GitGift/GitGift"
import { handleClaimed } from "../src/git-gift"
import { createClaimedEvent } from "./git-gift-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let githubUserId = BigInt.fromI32(234)
    let ethAmount = BigInt.fromI32(234)
    let newClaimedEvent = createClaimedEvent(githubUserId, ethAmount)
    handleClaimed(newClaimedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Claimed created and stored", () => {
    assert.entityCount("Claimed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "githubUserId",
      "234"
    )
    assert.fieldEquals(
      "Claimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ethAmount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
