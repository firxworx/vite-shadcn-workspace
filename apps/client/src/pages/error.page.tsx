import { useRouteError } from 'react-router-dom'
import { getRouteErrorMessage } from '@workspace/data'
import { PageLayout } from '@workspace/react-layout'

export default function ErrorPage(): JSX.Element {
  const error = useRouteError()
  console.error(error)

  const errorMessage = getRouteErrorMessage(error)

  return (
    <PageLayout id="error-page">
      <div className="prose bg-destructive/10 border ~p-4/6 rounded-lg max-w-sm mx-auto ~my-24/32">
        <h1>Oops!</h1>
        <p>Sorry, we've encountered an unexpected error:</p>
        <pre>
          <code>{errorMessage}</code>
        </pre>
      </div>
    </PageLayout>
  )
}
