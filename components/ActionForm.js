import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { View } from 'react-native'
import { createAction } from './API'


class ActionForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: '',
            logo: '',
            journals: [{ cost: 0 }]

        }



    }

    _onActionFormSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)

        const formData = new FormData()
        formData.append("name", this.state.name)
        formData.append("category", this.state.category)
        formData.append("logo", this.state.logo)
        formData.append("journals[0]cost", this.state.journals[0].cost)

        createAction(formData)

    }




    render() {
        return (
            <View>
                <Form onSubmit={this._onActionFormSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Control
                            style={styles.form}
                            type="text"
                            placeholder="Nom de l'activité.."
                            required
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Select
                            required
                            onChange={(e) => this.setState({ category: e.target.value })}

                        >
                            <option value="">Catégorie..</option>
                            <option value="charge">Dépense</option>
                            <option value="produit">Revenu</option>


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

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="number"
                            placeholder="Montant.."
                            required
                            onChange={(e) => this.setState({
                                journals: [{ cost: e.target.value }]
                            })}

                        />
                    </Form.Group>


                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Enregistrer
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








export default ActionForm