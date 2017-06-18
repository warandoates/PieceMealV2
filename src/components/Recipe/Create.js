import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, ListView, Modal, StyleSheet, View } from 'react-native';
import { Badge, Body, Button, Container, Content, Form, Header, Icon, Item, Input, ListItem, Text, Title, Toast } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as newRecipe from '../../actions/addRecipe';

class CreateRecipe extends Component {

    state = {
      modalVisible: false
    }

    componentDidMount() {
        this.loadDataSource();
    }

    componentWillReceiveProps(nextProps, oldProps) {
      console.log('next:', nextProps.hasError, 'old:', oldProps.hasError);
      if (nextProps.hasError && nextProps.hasError !== oldProps.hasError) {
        Toast.show({
              supportedOrientations: ['portrait', 'landscape'],
              // text: 'Error Saving!',
              text: nextProps.msg,
              position: 'bottom',
              buttonText: 'Okay'
            });
        }
    }

    componentDidUpdate() {
        this.loadDataSource();
    }

    onSelect = (suggestion) => {
      console.log(suggestion) // the pressed suggestion
    }

    setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }

    suggestions = [
      { text: 'suggestion1', anotherProperty: 'value' },
      { text: 'suggestion2', anotherProperty: 'value2' }
    ]

    loadDataSource() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        // this.dataSource = ds.cloneWithRows(this.props.steps);

        const ingredientsDS = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        // this.ingredientsDataSource = ds.cloneWithRows(this.props.ingredients);
     }

    renderRow(rowData, sectionID, rowID) {
       return (
           <ListItem
             style={{ fontSize: 16, flex: 1, flexDirection: 'row', marginTop: -10, marginBottom: -10 }}>
                 <Text style={{ flex: 8, paddingTop: 5, }}>
                   {parseInt(rowID) + 1}{':  '}{rowData.instructions}
                 </Text>
                    <Button transparent danger iconLeft style={{ alignSelf: 'flex-end', flex: 1 }}>
                        <Icon name='trash' />
                    </Button>
           </ListItem>
       );
    }

 renderIngredientRow(rowData, sectionID, rowID) {
     return (
         <ListItem style={{ fontSize: 16, flex: 1, flexDirection: 'row', marginTop: -10, marginBottom: -10 }}>
               <Text style={{ flex: 8, paddingTop: 5, }}>{rowData.amount}{rowData.name}</Text>
                  <Button transparent danger iconLeft style={{ alignSelf: 'flex-end', flex: 1 }}>
                      <Icon name='trash' />
                  </Button>
         </ListItem>
     );
 }

    render() {
        const {
        addTag,
        postRecipe,
        addIngredient,
        addInstruction,
        recipe,
        name,
        description,
        notes,
        cook_time,
        prep_time,
        ingredient,
        ingredients,
        instruction,
        steps,
        tag,
        tags,
        hasError,
        // measurement,
        isLoading,
        modifyIngredient,
        modifyInstruction,
        modifyMeasurement,
        modifyName,
        modifyCookTime,
        modifyDescription,
        modifyNotes,
        modifyPrepTime,
        modifyTag,
        token,
        msg } = this.props;

        return (
          <Modal
            animationType={'slide'}
            transparent={false}
            // visible={this.state.modalVisible}
            visible={this.props.visible}
            onRequestClose={() => { alert('Modal has been closed.'); }}
          >
            <Container>
              <Header>
                    <Body>
                        <Title>Create Recipe</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item regular style={{ marginLeft: 10, marginTop: 10 }}>
                            <Input
                              // style={textStyle}
                              style={{ fontSize: 16 }}
                              placeholder="Your Recipe's Name"
                              value={name}
                              onChangeText={(text) => { modifyName(text); }}
                            />
                        </Item>
                        <Item regular style={{ marginLeft: 10 }}>
                            <Input
                              // style={textStyle}
                              style={{ fontSize: 16 }}
                              placeholder="A Description of Your Recipe"
                              value={description}
                              onChangeText={(text) => { modifyDescription(text); }}
                            />
                        </Item>
                        <Item regular style={{ marginLeft: 10 }}>
                            <Input
                              // style={textStyle}
                              style={{ fontSize: 16 }}
                              placeholder="Cook Time"
                              value={cook_time}
                              onChangeText={(text) => { modifyCookTime(text); }}
                            />
                            <Input
                              // style={textStyle}
                              style={{ fontSize: 16 }}
                              placeholder="Prep Time"
                              value={prep_time}
                              onChangeText={(text) => { modifyPrepTime(text); }}
                            />
                        </Item>
                        <Text style={{ ...textStyle, marginTop: 50 }}>Ingredients</Text>
                        {/* <ListView
                          dataSource={this.ingredientsDataSource}
                          renderRow={this.renderIngredientRow.bind(this)}
                          enableEmptySections
                        /> */}
                          <Item regular style={{ marginLeft: 10 }}>
                              <Input
                                style={{ fontSize: 14 }}
                                placeholder="Enter Ingredient"
                                value={ingredient.name}
                                onChangeText={(text) => modifyIngredient(text)}
                              />
                              <Input
                                style={{ fontSize: 14 }}
                                placeholder="Enter Measurement"
                                value={ingredient.amount}
                                onChangeText={(text) => modifyMeasurement(text)}
                              />
                              <Button transparent success iconRight onPress={() => { addIngredient(ingredient); }}>
                                  <Icon name='add' />
                              </Button>
                          </Item>
                    <Text style={{ ...textStyle, marginTop: 50 }}>Instructions</Text>
                    {/* <ListView
                      dataSource={this.dataSource}
                      renderRow={this.renderRow.bind(this)}
                      enableEmptySections
                    /> */}
                    <Item regular style={{ marginLeft: 10 }}>
                        <Input
                          multiline
                          style={{ fontSize: 14, marginTop: 10, marginBottom: -10 }}
                          placeholder="Enter New Instruction"
                          value={instruction}
                          onChangeText={(text) => modifyInstruction(text)}
                        />
                        <Button transparent success iconRight onPress={() => { addInstruction(instruction); }}>
                            <Icon name='add' />
                        </Button>
                    </Item>
                    <Text style={{ ...textStyle, marginTop: 30 }}>Tags</Text>
                    <View style={{ flexDirection: 'row', height: 100, padding: 20, marginTop: 10, justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'stretch', flex: 2 }}>
                    { this.props.tags.map((t, i) => {
                      return (
                        <Badge style={badgeStyle} key={i}><Text>{t}</Text></Badge>
                      );
                    }) }
                  </View>
                  <Item regular style={{ marginTop: -20 }}>
                      <Input
                        style={{ fontSize: 14, marginLeft: 10 }}
                        placeholder="Add Tag"
                        value={tag}
                        onChangeText={(text) => modifyTag(text)}
                      />
                      <Button transparent success iconRight onPress={() => { addTag(tag); }}>
                          <Icon name='add' />
                      </Button>
                  </Item>
                  <Text style={{ ...textStyle, marginTop: 30 }}>Notes:</Text>
                  <Item regular style={{ marginTop: -20 }}>
                      <Input
                        style={{ fontSize: 14, marginLeft: 10 }}
                        placeholder="Enter Notes"
                        value={notes}
                        onChangeText={(text) => modifyNotes(text)}
                      />
                  </Item>
                  <View style={{ flexDirection: 'row', height: 100, padding: 20, marginTop: 10, justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'stretch', flex: 2 }}>
                    <ActivityIndicator animating={this.props.isLoading} size='large' style={{ alignSelf: 'center' }} />
                  </View>
                    <Button
                      icon
                      style={{ alignSelf: 'center', marginTop: 10 }}
                      onPress={() => { postRecipe(recipe, token); }}
                    >
                        {/* <Icon name='add' /> */}
                        <Text>Save</Text>
                    </Button>
                </Form>
                </Content>
            </Container>
          </Modal>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.newRecipeReducer.recipe,
    tag: state.newRecipeReducer.tag,
    tags: state.newRecipeReducer.tags,
    instruction: state.newRecipeReducer.instruction,
    steps: state.newRecipeReducer.steps,
    ingredient: state.newRecipeReducer.ingredient,
    ingredients: state.newRecipeReducer.ingredients,
    // measurement: state.newRecipeReducer.measurement,
    postRecipe: state.newRecipeReducer.postRecipe,
    name: state.newRecipeReducer.name,
    hasError: state.newRecipeReducer.hasError,
    msg: state.newRecipeReducer.msg,
    isLoading: state.newRecipeReducer.isLoading,
    description: state.newRecipeReducer.description,
    notes: state.newRecipeReducer.notes,
    cook_time: state.newRecipeReducer.cook_time,
    prep_time: state.newRecipeReducer.prep_time,
    token: state.loginReducer.user.token
  };
};

const badgeStyle = { marginLeft: 5, marginRight: 5, margin: 5 };

const styles = StyleSheet.create({
    content:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const textStyle = {
  fontWeight: 'bold',
  fontSize: 16,
  marginTop: 20,
  alignSelf: 'center' };

export default connect(
  mapStateToProps, newRecipe)(CreateRecipe);
