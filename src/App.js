import * as React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Nav from './components/Nav';
import Feed from './components/Feed';

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Nav />
        <Container style={{ marginTop: '50px' }}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Segment padded basic>
                  <Header as="h1">The Allmighty Home</Header>
                  <Segment padded basic>
                    <Slider />
                    <Feed itemNo={5} header="Article" />
                  </Segment>
                </Segment>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <Segment padded basic>
                  <Header as="h1">About Us</Header>
                  <Segment padded basic>
                    <Feed itemNo={5} header="Some useful info..." />
                  </Segment>
                </Segment>
              )}
            />
            <Route
              path="/contact"
              render={() => (
                <Segment padded basic>
                  <Header as="h1">Contact Us</Header>
                  <Segment padded basic>
                    <Feed itemNo={5} header="Way to contact us" />
                  </Segment>
                </Segment>
              )}
            />
          </Switch>
        </Container>
      </Container>
    );
  }
}

export default App;
