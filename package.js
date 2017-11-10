Package.describe({
  name: 'rebolon:socks5',
  version: '0.0.4',
  summary: 'This package allow to use Tor proxy. It uses almost same code provided by mattcg/socks5-http-client',
  git: 'https://github.com/Rebolon/meteor-package-http-socksclient.git'
});

// @TODO : faire une app de base avec un HTTP.get sur du http et du https en passant par TOR
// si c'est ok, on pousse le code et on modifie myalerts pour utiliser TOR
// avec https il ne faut pas oublier de passer l'option strictSSL: true, au même titre que agentClass: Agent

Package.onUse(function(api) {
  api.versionsFrom('1.6')
  api.use(['ecmascript', ], 'server')
  api.addFiles(['src/socks.js', 'src/socks-ssl.js', ], 'server')

  // symbol exports
  api.mainModule('main.server.js', 'server')
});

Npm.depends({
  "socks5-client": "1.2.5",
  "request": "2.83.0"
});
