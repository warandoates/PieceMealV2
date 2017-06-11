import React, { Component } from 'react';
import { Container, Content, Button, Icon, Fab } from 'native-base';

export default class FABExample extends Component {
    constructor(props) {
      super(props);
        this.state = {
            active: true
        };
    }
      render() {
        return (
          <Container>
            <Content>
                <Fab
                  active={this.state.active}
                  direction="left"
                  containerStyle={{ marginTop: 0, marginLeft: 20, marginBottom: 30 }}
                  style={{ backgroundColor: '#5067FF' }}
                  position="bottomRight"
                  onPress={() => this.setState({ active: !this.state.active })}
                >
                    <Icon name="share" />
                    <Button warning>
                        <Icon name="create" />
                    </Button>
                    <Button warning style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="trash" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="mail" />
                    </Button>
                    <Button
                      onPress={this.props.onClose.bind(this)}
                      style={{ backgroundColor: '#DD5144' }}
                    >
                        <Icon name="close" />
                    </Button>
                </Fab>
            </Content>
        </Container>
        );
    }
}
