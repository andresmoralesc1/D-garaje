# Deploy

## Caddy

Add the block from `CADDY-SNIPPET.txt` to `/etc/caddy/Caddyfile`, then:

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo caddy reload --config /etc/caddy/Caddyfile --address localhost:2019
```

## DNS (Namecheap via nc.sh)

The hostname `dgaraje.andresmorales.com.co` is added as an A record to
`andresmorales.com.co` via `~/.claude/nc.sh setHosts andresmorales com.co`.

## TLS cert (acme.sh DNS-01)

```bash
~/.acme.sh/acme.sh --issue -d dgaraje.andresmorales.com.co --dns dns_namecheap
~/.acme.sh/acme.sh --install-cert -d dgaraje.andresmorales.com.co \
  --cert-file /etc/caddy/certs/dgaraje.andresmorales.com.co.crt \
  --key-file /etc/caddy/certs/dgaraje.andresmorales.com.co.key \
  --fullchain-file /etc/caddy/certs/dgaraje.andresmorales.com.co.fullchain.crt
sudo chown caddy:caddy /etc/caddy/certs/dgaraje.andresmorales.com.co.*
sudo chmod 640 /etc/caddy/certs/dgaraje.andresmorales.com.co.*
```

## systemd unit

```bash
mkdir -p ~/.config/systemd/user
cp deploy/dgaraje.service ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable dgaraje.service
# Start it:
cd ~/D-garaje && nohup npx next start -p 3035 &
```

## Production build

```bash
npm run build
```
