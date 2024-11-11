import * as React from 'react'
import { describe, it } from 'vitest' // expect, vi
import { render } from '@testing-library/react' // fireEvent, waitForElementToBeRemoved, screen
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from '../src/App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    // print jsx of component to console
    // screen.debug()
  })
})

// import { Example } from './example'
// https://github.com/codenickycode/create-react-spa-cloudflare/blob/main/client/src/example.test.tsx

// // Mock only the react-query hook
// vi.mock('@tanstack/react-query', async (importOriginal) => {
//   // eslint-disable-next-line @typescript-eslint/consistent-type-imports
//   const mod = await importOriginal<typeof import('@tanstack/react-query')>()
//   return {
//     ...mod,
//     useQuery: vi.fn().mockReturnValue({ data: null }),
//   }
// })

// describe('Example Component', () => {
//   const queryClient = new QueryClient()

//   const renderComponent = () =>
//     render(
//       <QueryClientProvider client={queryClient}>
//         <Example />
//       </QueryClientProvider>,
//     )

//   it('renders the component with correct initial state', () => {
//     renderComponent()

//     expect(screen.getByText('Hello from React!')).toBeDefined()
//     expect(screen.getByText('Server connection: ❌')).toBeDefined()
//     expect(screen.getByText('spinner example')).toBeDefined()
//     expect(screen.getByText('show modal')).toBeDefined()
//     expect(screen.queryByText('I am a modal!')).toBeNull()
//   })

//   it('opens the modal when the button is clicked', () => {
//     renderComponent()

//     const showModalButton = screen.getByRole('button', { name: 'show modal' })
//     fireEvent.click(showModalButton)

//     expect(screen.getByText('I am a modal!')).toBeDefined()
//   })

//   it('closes the modal when clicking outside', () => {
//     renderComponent()

//     const showModalButton = screen.getByRole('button', { name: 'show modal' })
//     fireEvent.click(showModalButton)

//     expect(screen.getByText('I am a modal!')).toBeDefined()

//     // Simulate clicking outside the modal
//     fireEvent.mouseDown(document)

//     waitForElementToBeRemoved(screen.queryByText('I am a modal!'))
//   })

//   it('renders the spinner', () => {
//     renderComponent()

//     const spinnerText = screen.getByText('spinner example')
//     expect(spinnerText).toBeDefined()

//     // Check if the spinner is actually spinning
//     // This assumes the Spinner component adds a class or attribute when spinning
//     const spinnerParent = spinnerText.closest('[aria-busy="true"]')
//     expect(spinnerParent).toBeDefined()
//   })
// })
