import actions from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')

describe('actions', () => {
  describe('sendToApi', () => {
    // Write any useful test based on the sendToApi action logic here

    it('saves user data', async () => {
      axios.post.mockResolvedValue({ status: 201 })
      const result = await actions.sendToApi()

      expect(result).toBe(201)
    })

    it('unsuccessful in saving user data', async () => {
      axios.get.mockRejectedValue({ error: 400 })
      await actions.sendToApi().catch(err => {
        expect(err).toEqual({ error: 400 })
      })
    })
  })
})
