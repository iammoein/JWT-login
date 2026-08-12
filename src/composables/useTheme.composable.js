import { ref, watchEffect } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'dark')

export const useTheme = () => {
  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  })

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
}
