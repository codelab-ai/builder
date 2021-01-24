import { PageHeader, Spin } from 'antd'
import { useRouter } from 'next/router'
import * as R from 'ramda'
import React from 'react'
import {
  padding,
  withApollo,
  withAuthGuardServerSideProps,
} from '@codelab/frontend'
import { CreateAppButton, GetAppsList } from '@codelab/modules/app-stories'
import {
  SignOutUserButton,
  useUserMachine,
} from '@codelab/modules/user-stories'

const Loading = R.always('Loading...')

const withLoading = (Comp: React.FC) =>
  R.ifElse(R.prop('loading'), Loading, Comp)

const isLoadingUser = (user: any) => {
  return user.state.matches('initialCheck')
}

const AppsPage = () => {
  const router = useRouter()
  const user = useUserMachine()

  if (user.state.matches('initialCheck')) {
    return <Spin />
  }

  const pageHeaderButtons = [
    <CreateAppButton key={1} />,
    <SignOutUserButton key={2} />,
  ]

  return (
    <>
      <PageHeader
        ghost={false}
        // onBack={() => router.back()}
        title="Apps"
        extra={pageHeaderButtons}
      />
      <section style={{ marginTop: padding.sm }}>
        <GetAppsList />
      </section>
    </>
  )
}

// Redirect to home if not authenticated
export const getServerSideProps = withAuthGuardServerSideProps({
  destination: '/',
  permanent: false,
})

export default R.pipe(withApollo, AppsPage)
