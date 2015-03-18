### Socks 5 ###

This is almost a fork of mattcg/socks5-http-client project.
It exposes "request" npm and a socks var.
To use the socks var just do as following

        var Agent = new socks.Agent({
            socksHost: 'HostOfYourTor',
            socksPort: PortOfYourTor
        });

        request.get({
            url: 'OneUrl',
            agentClass: Agent.getClass,
            agentOptions: {
                socksHost: Agent.socksHost,
                socksPort: Agent.socksPort
            }
        }, function(err, res) {
            console.log(err || res.body);
        });
