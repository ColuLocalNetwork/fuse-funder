module.exports = {
  APPLICATION_NAME: 'fuse-funder',
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
  ETHEREUM_WEB3_PROVIDER: 'https://rpc.fuse.io',
  ETHEREUM_HD_WALLET_MNEMONIC: '',
  WEB3_TOKEN_ABI_PATH: 'abi/FiatTokenV1.json',
  ETHEREUM_ADMIN_ACCOUNT: '0xD418c5d0c4a3D87a6c555B7aA41f13EF87485Ec6',
  ETHEREUM_NATIVE_BONUS: '100000000000000000',
  ETHEREUM_TOKEN_ADDRESS: '0x415c11223bca1324f470cf72eac3046ea1e755a3',
  ETHEREUM_TOKEN_BONUS: '1e20',
  ETHEREUM_FUNDINGS_CAP_PER_DAY: 10,
  ETHEREUM_GAS_PRICE: '1e9'
}
