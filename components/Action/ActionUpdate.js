import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { View } from 'react-native'
import { updateAction } from '../API'


class ActionUpdate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            action: this.props.route.params.action,
            name: '',
            category: '',
            logo: '',

        }

    }

    _onActionUpdateSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        const _name = (this.state.name === '') ? this.state.action.name : this.state.name
        const _category = (this.state.category === '') ? this.state.action.category : this.state.category
        const _logo = this.state.logo

        const formData = new FormData()
        if (_logo != '') {
            formData.append("logo", _logo)
        }
        
        formData.append("name", _name)
        formData.append("category", _category)

        // le auto_now mila ovaina any am backend ho default=date.today
        for (var i = 0; i < this.state.action.journals.length; i++) {
            formData.append("journals[" + i + "]cost", this.state.action.journals[i].cost)
        }

        updateAction(formData, this.state.action.id)





    }




    render() {
        return (
            <View>
                <Form onSubmit={this._onActionUpdateSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Control
                            style={styles.form}
                            type="text"
                            defaultValue={this.state.action.name}
                            required
                            onChange={
                                (e) => this.setState({ name: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Select
                            defaultValue={this.state.action.category}
                            required
                            onChange={(e) => this.setState({ category: e.target.value })}

                        >
                            <option value="">Type..</option>
                            <option value="charge">Charge</option>
                            <option value="produit">Produit</option>


                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="file"
                            accept="image/png"
                            onChange={(e) => this.setState({ logo: e.target.files[0] })}
                            multiple={false}
                        />

                    </Form.Group>



                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Modifier
                    </Button>



                </Form>
            </View>
        )
    }
}



const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

}








export default ActionUpdate