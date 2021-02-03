import { atom, useRecoilState } from 'recoil'
import { useBuilderLayout } from '../../builder/builderPanelState'

type PageDetailsState = {
  pageId?: string
}

export type CrudAction = 'create' | 'update'

export const pageState = atom<PageDetailsState>({
  key: 'page',
  default: {
    pageId: undefined,
  },
})

type UsePage = {
  resetPage: Function
  createPage: Function
  updatePage(pageId: string): void
} & PageDetailsState

export const usePage = (): UsePage => {
  const layout = useBuilderLayout()
  const [page, setPage] = useRecoilState(pageState)

  const createPage = () => {
    layout.details.toggle(true)

    return setPage({
      pageId: undefined,
    })
  }

  const updatePage = (pageId: string) => {
    layout.details.toggle(true)

    return setPage({
      pageId,
    })
  }

  const resetPage = () => {
    layout.details.toggle(false)
    setPage({ pageId: undefined })
  }

  return {
    createPage,
    resetPage,
    updatePage,
    ...page,
  }
}
