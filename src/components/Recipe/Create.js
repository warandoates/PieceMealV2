import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, ListView, Modal, StyleSheet, View } from 'react-native';
import { Badge, Body, Button, Card, CardItem, Container, Content, Form, Header, Icon, Item, Input, ListItem, Picker, Text, Title, Toast, Label } from 'native-base';
import RecipeInstructions from './RecipeInstructions';
import RecipeIngredients from './RecipeIngredients';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as newRecipe from '../../actions/addRecipe';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedItem: undefined,
            selected1: null,
            results: {
                items: []
            },
            instructionsValid: false,
        };
    }

    setCreateVisible(visible) {
      this.setState({ modalVisible: visible });
    }

    // state = {
    //   modalVisible: false,
    //   selectedItem: undefined,
    //   selected1: 'key1',
    //   results: {
    //       items: []
    //   }
    // }

    // componentDidMount() {
    //     this.loadDataSource();
    // }

    componentWillReceiveProps(nextProps, oldProps) {
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

    // componentDidUpdate() {
    //     this.loadDataSource();
    // }

    onAddIngredient(id, name, amount) {
      console.log('onAddIngredient:', { id, name, amount });
      this.props.addIngredient(id, name, amount);
      this.props.resetIngredient();
    }

    onAddInstruction(stepNumber, instruction) {
      if (!instruction) {
        this.setState({ instructionsValid: false });
        Toast.show({
              supportedOrientations: ['portrait', 'landscape'],
              text: 'Enter Ingredient Text',
              position: 'bottom',
              buttonText: 'Okay'
            });
      } else {
        this.setState({ instructionsValid: true });
        this.props.addInstruction(stepNumber, instruction);
      }
    }

    onValueChange(value: string) {
      this.setState({
          selected1: value,
          results: [...this.state.results, value]
      });

      this.props.modifyIngredient(value.id, value.name);
    }

    setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }

    loadDataSource() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.steps);

        const ingredientsDS = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.ingredientsDataSource = ingredientsDS.cloneWithRows(this.props.ingredients);
     }

    renderRow(rowData, sectionID, rowID) {
       return (
          <ListItem key={rowID}
            style={{ flex: 1, flexDirection: 'row', marginTop: -10, marginBottom: -10 }}>
            <Text style={{ fontFamily: 'Futura', flex: 8, paddingTop: 5, }}>
              {parseInt(rowID) + 1}{':  '}{rowData.instructions}
             </Text>
            {/* <Button transparent danger iconLeft style={{ alignSelf: 'flex-end', flex: 1 }}>
                <Icon name='trash' />
            </Button> */}
          </ListItem>
        );
    }

   renderIngredientRow(rowData, sectionID, rowID) {
       return (
         <Card>
           <CardItem key={rowID} style={{ flex: 1, flexDirection: 'row', marginTop: -10, marginBottom: -10 }}>
                <Text style={{ fontFamily: 'Futura',flex: 8, paddingTop: 5, }}>{`${rowData.amount}   ${rowData.name}`}</Text>
                {/* <Button transparent danger iconLeft style={{ alignSelf: 'flex-end', flex: 1 }}>
                    <Icon name='trash' />
                </Button> */}
           </CardItem>
           </Card>
       );
   }

    render() {
        this.loadDataSource();
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
        resetInstruction,
        resetIngredient,
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

        console.log('steps:', this.props.steps);

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
                              style={inputStyle}
                              placeholder="Your Recipe's Name"
                              value={name}
                              onChangeText={(text) => { modifyName(text); }}
                            />
                        </Item>
                        <Item regular style={{ marginLeft: 10 }}>
                            <Input
                              style={inputStyle}
                              placeholder="A Description of Your Recipe"
                              value={description}
                              onChangeText={(text) => { modifyDescription(text); }}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label style={{ ...inputStyle, fontSize: 14, marginRight: -15 }}>Prep Time:</Label>
                            <Input
                              style={inputStyle}
                              // placeholder="Prep Time"
                              value={prep_time}
                              onChangeText={(text) => { modifyPrepTime(text); }}
                            />
                            <Label style={{ ...inputStyle, fontSize: 14, marginRight: -15 }}>Cook Time:</Label>
                            <Input
                              style={inputStyle}
                              // placeholder="Cook Time"
                              value={cook_time}
                              onChangeText={(text) => { modifyCookTime(text); }}
                            />
                        </Item>
                        <Text style={{ ...textStyle, marginTop: 30, marginBottom: 10 }}>Ingredients</Text>
                        {/* <ListView
                          dataSource={this.ingredientsDataSource}
                          renderRow={this.renderIngredientRow.bind(this)}
                          enableEmptySections
                          style={{ marginBottom: 15 }}
                        /> */}
                        <RecipeIngredients ingredients={this.props.ingredients}/>
                          <Item regular style={{ marginLeft: 10 }}>
                            <Button transparent icon small style={{ alignSelf: 'center' }}>
                              <Icon name='search' />
                          <Picker
                              style={{ marginTop: -25, marginLeft: -30 }}
                              supportedOrientations={['portrait', 'landscape']}
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)}>
                              { this.props.allIngredients.map((t, i) => {
                                return (
                                  // <Badge style={badgeStyle} key={i}><Text>{t}</Text></Badge>
                                  <Item label={t.name} value={t} />
                                );
                              }) }
                           </Picker>
                           </Button>
                              <Input
                                style={{ fontSize: 14 }}
                                placeholder="Enter Measurement"
                                value={ingredient.amount}
                                onChangeText={(text) => modifyMeasurement(text)}
                              />
                              <Button
                                transparent
                                success
                                iconRight
                                onPress={() => {
                                  this.onAddIngredient(
                                    ingredient.id,
                                    ingredient.name,
                                    ingredient.amount);
                                  }
                                }
                              >
                                  <Icon name='add-circle' style={plusStyle} />
                              </Button>
                          </Item>
                    <Text style={{ ...textStyle, marginTop: 50 }}>Instructions</Text>
                    {/* <ListView
                      dataSource={this.dataSource}
                      renderRow={this.renderRow.bind(this)}
                      enableEmptySections
                    /> */}
                    <RecipeInstructions instructions={this.props.steps} />
                    <Item error={!this.state.instructionsValid} regular style={{ marginLeft: 10 }}>
                        <Input
                          multiline
                          style={{ fontSize: 14, marginTop: 10, marginBottom: -10 }}
                          placeholder="Enter New Instruction"
                          value={instruction}
                          onChangeText={(text) => modifyInstruction(text)}
                        />
                        <Button
                          transparent
                          success
                          iconRight
                          onPress={() => {
                            this.onAddInstruction(this.props.steps.length + 1, instruction);
                          }}
                        >
                            <Icon name='add-circle' style={plusStyle} />
                        </Button>
                    </Item>
                    <Text style={{ ...textStyle, marginTop: 30 }}>Tags</Text>
                    <View style={{ flexDirection: 'row', padding: 20, marginTop: 10, justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'stretch', flex: 2 }}>
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
                          <Icon style={plusStyle} name='add-circle' />
                      </Button>
                  </Item>
                  <Text style={{ ...textStyle, marginTop: 30 }}>Notes:</Text>
                  <Item regular style={{ marginTop: 0 }}>
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
                </Form>
                <CardItem style={{ marginTop: -50 }}>
                <Button
                  icon
                  danger
                  style={buttonStyle}
                  onPress={() => { this.props.setCreateVisible(!this.props.visible); }}
                >
                  <Icon name='undo' />
                  <Text>Cancel</Text>
                </Button>
                  <Button
                    icon
                    success
                    style={{ ...buttonStyle, alignSelf: 'center' }}
                    onPress={() => { postRecipe(recipe, ingredients, steps, tags, token); }}
                  >
                      <Text style={{ alignSelf: 'center' }}>Save</Text>
                      <Icon name='checkmark' />
                  </Button>
                </CardItem>
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
    token: state.loginReducer.user.token,
    allIngredients: state.ingredients.ingredients
  };
};

const badgeStyle = { backgroundColor: '#68BAA7', marginLeft: 5, marginRight: 5, margin: 5 };

const textStyle = {
  fontFamily: 'Futura',
  // fontWeight: 'bold',
  fontSize: 20,
  marginTop: 20,
  alignSelf: 'center' };

const inputStyle = {
  fontFamily: 'Futura',
  fontSize: 16 };

const plusStyle = { fontSize: 30, alignSelf: 'auto', color: '#68BAA7' };

const buttonStyle = {
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  }

export default connect(
  mapStateToProps, newRecipe)(CreateRecipe);
