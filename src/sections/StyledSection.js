import styled from "styled-components"
import { media } from "../media"




export const StyledSection = styled.section`
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  * {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  @media ${media.tablet} {
    padding: 64px 24px;

  }

  @media ${media.desktop} {
    padding: 128px 0;
  }
`

export const ModifiedStyledSection = styled(StyledSection)`

  @media ${media.desktop} {
    padding: 128px 0px 64px 0px;
  }
`



