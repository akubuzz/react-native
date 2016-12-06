import React ,{Component} from 'react';
import {Picker,Text} from 'react-native';
import {Card ,CardSection ,Input,Button ,Spinner} from './common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions';

class EmployeeCreate extends Component {
    onButtonPress(){
        const {name,phone,shift} = this.props;
        this.props.employeeCreate({name,phone,shift:shift || 'Monday'});
    }
    render() {
        return (
           <Card>
               <CardSection>
                   <Input
                        label="Name"
                        placeholder="Akshay"
                        onChangeText={text => this.props.employeeUpdate({prop:'name',value:text})}
                        value={this.props.name}
                   />
               </CardSection>
               <CardSection>
                    <Input
                        label="Phone"
                        placeholder="8888888888"
                        onChangeText={text => this.props.employeeUpdate({prop:'phone',value:text})}
                        value={this.props.phone}
                    />
               </CardSection >
               <CardSection style={{ flexDirection:'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker style={{ flex:1 }}
                        selectedValue={this.props.shift}
                        onValueChnage={day => this.props.employeeUpdate({prop:'shift' ,value:day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
               </CardSection>
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>
                       Create
                   </Button>
               </CardSection>
           </Card>
        );
    }
}

const styles={
    pickerTextStyle:{
        paddingLeft:20,
        fontSize:18
    }
};

const mapStateToProps = state => {
  return{
      name:state.employeeForm.name,
      phone:state.employeeForm.phone,
      shift:state.employeeForm.shift
  }
};
export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);