import React from 'react'
import { View } from 'react-native'
import { Button, Form } from 'react-bootstrap'
import { createJournal, listAction, updateJournal, updateAction } from '../API'

class JournalUpdate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            action: this.props.route.params.action,
            journal: this.props.route.params.journal,
            actionId: '',
            actionCost: 0,
            // data: [{}],

        }

        // listAction({ category: "" }).then(response => {
        //     this.setState({ data: response })
        // })



    }

    /**
     * Tsy ampesaina koriny lony
     * @returns Form.Control
     */
    _selectAction = () => {

        let rows = []
        for (var i = 0; i < this.state.data.length; i++)
            rows.push(
                <option value={this.state.data[i].id} key={i}>
                    {this.state.data[i].name}
                </option>
            )


        return (
            <Form.Control
                as="select"
                onChange={e => alert(e.target.value)}
                required>
                <option value="">Type..</option>
                {rows}

            </Form.Control>
        )
    }




    _onJournalUpdateSubmit = (e) => {
        e.preventDefault()

        const _actionId = this.state.action.id
        // alert(_actionId)
        const _journalCost = (this.state.actionCost === 0) ? this.state.journal.cost : this.state.actionCost
        // alert(_journalCost)
        const _journalId = this.state.journal.id
        // alert(_journalId)


        // Mila atao le update journal par rapport anle vao2

        const formData = new FormData()
        formData.append("action", _actionId)
        formData.append("cost", _journalCost)
        updateJournal(formData, _journalId)








    }




    render() {
        return (
            <View>

                <Form onSubmit={this._onJournalUpdateSubmit}>

                    <Form.Group className="mb-3">
                        {/* {this._selectAction()} */}
                        <Form.Control
                            defaultValue={this.state.action.name}
                            onChange={e => this.setState({ actionId: e.target.value })}
                            readOnly

                        />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Control
                            type="number"
                            placeholder="Montant.."
                            defaultValue={this.state.journal.cost}
                            required
                            onChange={e => this.setState({ actionCost: e.target.value })}
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









export default JournalUpdate

