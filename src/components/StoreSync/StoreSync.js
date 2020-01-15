import { useEffect } from 'react'
import { useStoreActions } from 'easy-peasy'

export const StoreSync = ({ location: { pathname } }) => {
  const setCurrentPage = useStoreActions(actions => actions.page.setCurrentPage)

  useEffect(() => {
    const formattedPathName = pathname.replace(/\//g, '')
    setCurrentPage(formattedPathName)
  }, [pathname, setCurrentPage])

  return null
}
