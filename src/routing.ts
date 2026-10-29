import { useEffect, useState } from "react"

const pathname = () => window.location.pathname.replace(/\/+$/, "") || "/"
let detailOrigin = "/works"

export function getDetailOrigin() {
  return detailOrigin
}

export function useRoute() {
  const [route, setRoute] = useState(pathname)

  useEffect(() => {
    const update = () => setRoute(pathname())
    const migrateHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const destination = hash.startsWith("#/")
        ? hash.slice(1)
        : hash === "#contact" ? "/contact" : hash === "#about" ? "/about" : "/"
      window.history.replaceState(null, "", destination)
      update()
      if (hash === "#work") document.getElementById("work")?.scrollIntoView()
    }
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = event.target instanceof Element ? event.target.closest("a") : null
      if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return
      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin || url.hash) return
      const next = url.pathname.replace(/\/+$/, "") || "/"
      if (!["/", "/works", "/about", "/contact"].includes(next) && !next.startsWith("/works/")) return
      event.preventDefault()
      const previous = pathname()
      if (!previous.startsWith("/works/")) detailOrigin = previous === "/works" ? "/works" : "/"
      if (url.href !== window.location.href) {
        window.history.pushState(null, "", url.pathname + url.search)
        update()
      } else {
        window.scrollTo(0, 0)
      }
    }
    migrateHash()
    document.addEventListener("click", onClick)
    window.addEventListener("popstate", update)
    window.addEventListener("hashchange", migrateHash)
    return () => {
      document.removeEventListener("click", onClick)
      window.removeEventListener("popstate", update)
      window.removeEventListener("hashchange", migrateHash)
    }
  }, [])

  return route
}
