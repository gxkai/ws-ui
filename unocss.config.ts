import { config } from '@as1024/unocss'
import { defineConfig } from 'unocss'

export function createConfig({ strict = true, dev = true } = {}): any {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    ...config,
  })
}

export default createConfig()
