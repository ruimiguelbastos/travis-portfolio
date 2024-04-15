export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href
}

export const getImageUrlFromBackend = (path) => {
  return new URL(path, import.meta.env.VITE_BASE_URI).href
}
