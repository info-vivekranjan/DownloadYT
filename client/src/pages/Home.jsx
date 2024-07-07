import React from 'react'
import DownloadeForm from '../components/Form';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 80px;
 }
`;

function Home() {
  return (
    <>
      <Wrapper>
        <DownloadeForm />
      </Wrapper>
    </>
  )
}

export default Home