import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-checkins-repository'
import { GetUserMetricsUseCaseCase } from './get-user-metrics'

let checkInRepository: InMemoryCheckInsRepository
let sut: GetUserMetricsUseCaseCase

describe('Get User Metrics Use Case', () => {
  beforeEach(async () => {
    checkInRepository = new InMemoryCheckInsRepository()
    sut = new GetUserMetricsUseCaseCase(checkInRepository)
  })

  it('should be able to get user check-ins count from metrics', async () => {
    await checkInRepository.create({
      gym_id: 'gym-01',
      user_id: 'user-01',
    })

    await checkInRepository.create({
      gym_id: 'gym-02',
      user_id: 'user-01',
    })

    const { checkInsCount } = await sut.execute({
      userId: 'user-01',
    })

    expect(checkInsCount).toEqual(2)
  })
})
