// code taken from socks5-http-client, but actually it's impossible to load only Agent file from that package
let tls = Npm.require('tls'),
    https = Npm.require('https'),
    inherits = Npm.require('util').inherits,
    socksClient = Npm.require('socks5-client')

function createConnection(options) {
  let socksSocket, onProxied;

  socksSocket = socksClient.createConnection(options);

  onProxied = socksSocket.onProxied;
  socksSocket.onProxied = function() {
    options.socket = socksSocket.socket;

    if (options.hostname) {
      options.servername = options.hostname;
    } else if (options.host) {
      options.servername = options.host.split(':')[0];
    }

    socksSocket.socket = tls.connect(options, function() {

      // Set the 'authorized flag for clients that check it.
      socksSocket.authorized = socksSocket.socket.authorized;
      onProxied.call(socksSocket);
    });

    socksSocket.socket.on('error', function(err) {
      socksSocket.emit('error', err);
    });
  };

  return socksSocket;
}

/**
 *
 * @param options socksHost (string) /socksPort (int)/ssl (boolean/int 1-0)
 * @constructor
 */
function Socks5ClientHttpsAgent(options) {
    if (typeof options == undefined) {
        options = options || {}
    }

    https.Agent.call(this, options)
    this.socksHost = options.socksHost || 'localhost'
    this.socksPort = options.socksPort || 9050

    this.createConnection = createConnection
    this.getClass = Socks5ClientHttpsAgent
}

inherits(Socks5ClientHttpsAgent, https.Agent)

const socksSsl = {
    "Agent": Socks5ClientHttpsAgent
}

export { socksSsl }
