describe('test', () => {
  test('axios instance', () => {
    window._env_ = {
      REACT_APP_MS_TESORERIA_SWAP_URL:
        'https://swap-ms-qa.apps.pre.ocp.binter.cl',
    }
    const url = require('./swapDataAction')
    expect(url.REACT_APP_MS_TESORERIA_SWAP_URL).not.toBeNull()
  })
})
