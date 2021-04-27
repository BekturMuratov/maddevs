import 'regenerator-runtime'
import authorize from '../../../radiator/analytics/auth'
import getCoreData from '../../../radiator/analytics/getCoreData'
import getCountriesData from '../../../radiator/analytics/getCountriesData'
import getDevicesData from '../../../radiator/analytics/getDevicesData'
import getGoalsData from '../../../radiator/analytics/getGoalsData'
import main from '../../../radiator/analytics'

jest.mock('../../../radiator/analytics/auth', () => jest.fn(() => new Promise(res => res(jest.fn()))))
jest.mock('../../../radiator/analytics/getCoreData', () => jest.fn(() => 'data'))
jest.mock('../../../radiator/analytics/getCountriesData', () => jest.fn(() => 'data'))
jest.mock('../../../radiator/analytics/getDevicesData', () => jest.fn(() => 'data'))
jest.mock('../../../radiator/analytics/getGoalsData', () => jest.fn(() => 'data'))

describe('Radiator > analytics > index', () => {
  it('should correctly called all methods and returns object with data', async () => {
    const data = await main()

    expect(authorize).toHaveBeenCalledTimes(1)
    expect(getCoreData).toHaveBeenCalledTimes(1)
    expect(getCountriesData).toHaveBeenCalledTimes(1)
    expect(getDevicesData).toHaveBeenCalledTimes(1)
    expect(getGoalsData).toHaveBeenCalledTimes(1)

    expect(data).toEqual({
      core: 'data',
      countries: 'data',
      devices: 'data',
      goals: 'data',
    })
  })
})