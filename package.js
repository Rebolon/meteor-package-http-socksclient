Package.describe({
  name: 'rebolon:socks5',
  version: '0.0.3',
  summary: 'This package allow to use Tor proxy. It uses almost same code provided by mattcg/socks5-http-client',
  git: 'https://github.com/Rebolon/meteor-package-http-socksclient.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles(['main.js'], 'server');
  api.export(['socks'], 'server')
});

Npm.depends({
  "socks5-client": "1.1.0",
  "request": "2.60.0"
});
