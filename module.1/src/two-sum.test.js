import { describe, it, expect } from 'vitest'
import { twoSum } from './two-sum'
import { twoSumHashMap } from './two-sum'

describe('twoSum', () => {
  [twoSum, twoSumHashMap].forEach((twoSumFunction) => {
  it('returns indices for [2,7,11,15] with target 9', () => {
    expect(twoSumFunction([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  it('returns indices for [3,2,4] with target 6', () => {
    expect(twoSumFunction([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('returns indices for [3,3] with target 6', () => {
    expect(twoSumFunction([3, 3], 6)).toEqual([0, 1])
  })

  it('returns undefined when no pair sums to target', () => {
    expect(twoSumFunction([1, 5, 3], 100)).toBeUndefined()
  })
})  })
