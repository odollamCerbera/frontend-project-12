import { useRollbar } from '@rollbar/react'

const TestRollbar = () => {
  const rollbar = useRollbar()

  return (
    <div>
      <button onClick={() => rollbar.info('Test message from React')}>
        Send Test Message
      </button>
      <button
        onClick={() => {
          throw new Error('Test error from React ErrorBoundary')
        }}
      >
        Trigger Test Error
      </button>
    </div>
  )
}

export default TestRollbar
