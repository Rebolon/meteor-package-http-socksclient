Package.describe({
  name: 'rebolon:socks5',
  version: '0.0.1',
  summary: 'This package allow to use Tor proxy. It uses almost same code provided by mattcg/socks5-http-client',
  git: 'https://github.com/Rebolon/meteor-package-http-socksclient.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('main.js');
  api.export(['socks', 'request'], 'server')
});

Npm.depends({
  "socks5-client": "1.0.0",
  "request": "2.53.0"
});
