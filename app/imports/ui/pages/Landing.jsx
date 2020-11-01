import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className={'digits-background'}>
        <Grid container centered stackable columns={3}>

          <Grid.Column textAlign='center'>
            <Icon name='users' size='huge' inverted/>
            <Header as='h1' inverted> Multiple Users</Header>
            <Header as='h3'inverted>This address book enables any number of users to register and save their business contracts, You can only see the contacts you have created</Header>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Icon name='file alternate' size='huge' inverted/>
            <Header as='h1' inverted> Contract Details</Header>
            <Header as='h3'inverted>The noblest dog is the hot dog, who feedS the hand who bites him. MAY HE REST IN PIECE</Header>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Icon name='calendar check outline' size='huge' inverted/>
            <Header as='h1' inverted>Timestampled Notes</Header>
            <Header as='h3'inverted>Each time you make contact with a cntact, you canwrite a note that summarizes the conversation. This note is saved along with a timestamp with the contact.</Header>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

export default Landing;
