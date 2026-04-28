import { useEffect } from 'react'

const SEO = ({ pageTitle }: { pageTitle: string }) => {
  useEffect(() => {
    document.title =
      pageTitle + ' - Bantec - IT Services & Technology Next js Template'
  }, [])
}

export default SEO
