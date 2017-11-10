### Socks 5 ###

This is almost a fork of mattcg/socks5-http-client project and its https version.
It exposes "request" npm and a socks var.
To use the socks var just do as following

        import { socks } from 'meteor/rebolon:socks5'
        import { HTTP } from 'meteor/http'
        
        const Agent = new socks.Agent({
            socksHost: 'HostOfYourTor',
            socksPort: PortOfYourTor
        });

        HTTP.get({
            url: 'OneUrl',
            agentClass: Agent.getClass,
            agentOptions: {
                socksHost: Agent.socksHost,
                socksPort: Agent.socksPort
            }
        }, function(err, res) {
            console.log(err || res.body);
        });

and if the url is https, just change to this :

        import { socksSsl } from 'meteor/rebolon:socks5'
        import { HTTP } from 'meteor/http'
        
        const Agent = new socksSsl.Agent({
            socksHost: 'HostOfYourTor',
            socksPort: PortOfYourTor
        });

        HTTP.get({
            url: 'OneUrl',
            agentClass: Agent.getClass,
            strictSSL: true,
            agentOptions: {
                socksHost: Agent.socksHost,
                socksPort: Agent.socksPort
            }
        }, function(err, res) {
            console.log(err || res.body);
        });
