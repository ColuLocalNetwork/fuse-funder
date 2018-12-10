module.exports = {
  DEBUG: false,
  OSSEUS_LOGGER_LOG_LEVEL: 'debug',
  OSSEUS_LOGGER_NO_CONSOLE_OVERRIDE: true,
  OSSEUS_SERVER_DEPENDENCIES: ['logger', 'mongo'],
  OSSEUS_SERVER_PORT: '8080',
  OSSEUS_SERVER_MORGAN_FORMAT: ':date[iso] method=":method", url=":url", statusCode=":status", route=":route", host=":host", client-ip=":client-ip", user-agent=":user-agent", httpVersion=":http-version", responseTime=":response-time"',
  OSSEUS_SERVER_ADD_HEALTHCHECK: true,
  OSSEUS_SERVER_ADD_IS_RUNNING: true,
  OSSEUS_ROUTER_DEPENDENCIES: ['logger', 'server'],
  OSSEUS_ROUTER_ROUTES_PATH: '/app/routes',
  OSSEUS_ROUTER_CONTROLLERS_PATH: '/app/controllers',
  OSSEUS_ROUTER_POLICY_PATH: '/app/middlewares',
  OSSEUS_ROUTER_URL_PREFIX: '/api',
  OSSEUS_ROUTER_JWT_SECRET: '',
  OSSEUS_MONGO_DEPENDENCIES: ['logger'],
  OSSEUS_MONGO_URI: 'mongodb://localhost/funder',
  WEB3_PROVIDER: 'http://localhost:8545',
  WEB3_MNEMONIC: 'tilt noise truck alcohol bind unaware forest author amused orchard outside gallery',
  WEB3_TOKEN_ABI_PATH: '/Users/leon/workspace/funder/build/contracts/FCF.json',
  ETHEREUM_FROM_ACCOUNT: '0xb10dd9fc9b4771d5ec9910e9f5f171ccc493fb3c',
  ETHEREUM_NATIVE_BONUS: '100000000000000000',
  ETHEREUM_TOKEN_ADDRESS: '0x46c1117f53a8af868c32e81eebc3b64213396abd',
  ETHEREUM_TOKEN_BONUS: '100000000000000000000',
  ETHEREUM_ONE_TIME_FUNDING: false,
  SECRET: '',
  BLOCKS_TO_CONFIRM_BCTX: 20
}
