/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface Window {
  klaytn: Proxy;
  ethereum: Proxy;
  Telegram: Proxy;
}
