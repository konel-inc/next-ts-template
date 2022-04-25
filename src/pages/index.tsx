import type { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  .inner {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`
const Home: NextPage = () => {
  return (
    <Wrapper>
      <div className='inner'>
        <h1>Konel Next.ts Template</h1>
      </div>
    </Wrapper>
  )
}

export default Home
