import React ,{Component} from 'react';
import {Card ,CardSection ,Input,Button ,Spinner} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeCreate extends Component {
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
               </CardSection>
               <CardSection>
                   <Button>
                       Create
                   </Button>
               </CardSection>
           </Card>
        );
    }
}

const mapStateToProps = state => {
  return{
      name:state.employeeForm.name,
      phone:state.employeeForm.phone,
      shift:state.employeeForm.shift
  }
};
export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate);