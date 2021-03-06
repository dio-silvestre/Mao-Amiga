import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: none;
  flex-direction: column;

  width: 350px;
  height: 100vh;
  color: var(--color-title);

  @media (min-width: 1024px) {
    display: block;
  }

  .logo {
    width: 290px;
    height: 20vh;
    margin: 0px auto;
  }

  .totem {
    width: 300px;
    height: 200px;
    margin: 0 auto 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 35vh;

    a {
      color: var(--color-title);
    }

    div {
      display: block;
      width: 80%;
      margin: 15px auto;
      cursor: pointer;

      svg {
        font-size: 1.5rem;
      }

      li {
        margin: 10px 0;
        font-size: 1.15rem;
        font-family: var(--font-text-primary);
        font-weight: 400;

        :hover {
          color: var(--color-text);
        }
      }

      @media (max-width: 1000px) {
        margin: 10px auto;
      }
    }

    @media (min-width: 1024px) {
      .logout {
        margin-top: auto;
      }

      p {
        font-family: var(--font-text-primary);
        font-size: 20px;
        font-weight: 600;
      }

      .Collapsible__contentInner {
        max-height: 5rem;
        ul {
          list-style: circle;
          margin-left: 8px;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
      }
      .Collapsible__contentOuter {
        max-height: 5rem;

        ::-webkit-scrollbar {
          width: 10px;
        }
      }
    }
  }
`;
