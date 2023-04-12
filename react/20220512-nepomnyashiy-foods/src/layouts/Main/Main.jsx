import Container from "../Container/Container";

const Main = ({children}) => {
  return (<>
    <main>
      <Container>
        {children}
      </Container>
    </main>
  </>)
}

export default Main;