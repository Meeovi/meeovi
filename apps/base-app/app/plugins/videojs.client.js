import { defineNuxtPlugin } from 'nuxt/app'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

function safeRegisterPlugin(name, plugin) {
  if (!name || !plugin) return
  const pluginFn = plugin && plugin.default ? plugin.default : plugin
  try {
    if (typeof videojs.registerPlugin === 'function') {
      videojs.registerPlugin(name, pluginFn)
    } else if (typeof videojs.plugin === 'function') {
      videojs.plugin(name, pluginFn)
    } else {
      const proto = videojs.getComponent ? videojs.getComponent('Player').prototype : (videojs.Player && videojs.Player.prototype)
      if (proto && !proto[name]) proto[name] = pluginFn
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(`[videojs] failed to register plugin ${name}:`, err)
  }
}

function registerPlugins(defs) {
  if (!defs) return
  if (Array.isArray(defs)) {
    for (const d of defs) {
      if (Array.isArray(d) && d.length >= 2) safeRegisterPlugin(d[0], d[1])
      else if (d && d.name && d.plugin) safeRegisterPlugin(d.name, d.plugin)
    }
    return
  }
  if (typeof defs === 'object') {
    for (const key of Object.keys(defs)) safeRegisterPlugin(key, defs[key])
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  // expose helpers
  const provided = {
    videojs,
    registerVideojsPlugin: safeRegisterPlugin,
    registerVideojsPlugins: registerPlugins,
  }

  // Auto-register modules from `app/utils/video/` on client-side only
  if (process.client) {
    try {
      // glob relative to this file: ../utils/video/**/*.js
      const modules = import.meta.glob('../utils/video/**/*.js', { eager: true })
      for (const path in modules) {
        const mod = modules[path]
        // derive name from file basename
        const parts = path.split('/')
        const file = parts[parts.length - 1]
        const base = file.replace(/\.js$/, '')
        const name = (mod && mod.name) || base
        safeRegisterPlugin(name, mod)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('[videojs] auto-register failed', e)
    }
  }

  return { provide: provided }
})
