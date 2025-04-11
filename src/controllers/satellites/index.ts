import * as create from './create'
import * as get from './get'
import * as getInfo from './getinfo'

export const SatelliteController = {
    ...create,
    ...get,
    ...getInfo
}


