// code taken from socks5-http-client, but actually it's impossible to load only Agent file from that package
let http = Npm.require('http'),
    inherits = Npm.require('util').inherits,
    socksClient = Npm.require('socks5-client')

/**
 *
 * @param options socksHost (string) /socksPort (int)/ssl (boolean/int 1-0)
 * @constructor
 */
function Socks5ClientHttpAgent(options) {
    if (typeof options == undefined) {
        options = options || {}
    }

    http.Agent.call(this, options)
    this.socksHost = options.socksHost || 'localhost'
    this.socksPort = options.socksPort || 9050

    this.createConnection = socksClient.createConnection
    this.getClass = Socks5ClientHttpAgent
}

inherits(Socks5ClientHttpAgent, http.Agent)

const socks = {
    "Agent": Socks5ClientHttpAgent
}

export { socks }
