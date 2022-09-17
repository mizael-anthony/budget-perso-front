import React from 'react'
import { View } from 'react-native'
import { Button, Form } from 'react-bootstrap'
import { createJournal, listAction } from './API'

class JournalForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            action: this.props.route.params.action,
            cost: 0,
            // data: [{}],

        }

        // listAction({ category: "" }).then(response => {
        //     this.setState({ data: response })
        // })



    }

    _selectAction = () => {

        let rows = []
        for(var i = 0; i < this.state.data.length; i++)
            rows.push(
                <option value={this.state.data[i].id} key={i}>
                    {this.state.data[i].name}
                </option>
            )


        return (
            <Form.Control
             as="select" 
             onChange={e=>alert(e.target.value)}
             required>
                <option value="">Type..</option>
                {rows}
                        
            </Form.Control>
        )
    }




    _onJournalFormSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("action", this.state.action.id)
        formData.append("cost", this.state.cost)

        createJournal(formData)

        



    }




    render() {
        return (
            <View>

                <Form onSubmit={this._onJournalFormSubmit}>

                    <Form.Group className="mb-3">
                        {/* {this._selectAction()} */}
                        <Form.Control 
                            type="type"
                            value={this.state.action.name}
                            onChange={e=>{}}
                            required

                        />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Control
                            type="number"
                            placeholder="Montant.."
                            required
                            onChange={e => this.setState({ cost: e.target.value })}
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









export default JournalForm

