import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class ToDoContent extends React.Component {

    state = {
        status: true,
        id: null,
        currentInput: ''
    }

    deleteToDo = (toDo) => {
        this.props.deleteToDo(toDo)
    }

    editToDo = (toDo) => {
        this.props.editToDo(toDo);
        this.setState({
            id: toDo.id,
            status: false,
            currentInput: toDo.toDo
        })
    }

    saveToDo = (toDo) => {
        this.props.saveToDo({ ...toDo, toDo: this.state.currentInput });
        this.setState({
            id: null,
            status: true,
            currentInput: ''
        })
        toast.info("Cập nhật thành công")
    }
    render() {
        let { listToDo } = this.props;

        return (
            <>
                {
                    this.props.listToDo.map((value, index) => {
                        return (
                            <div key={value.id}>
                                <hr></hr>
                                {
                                    this.state.status === false && value.id === this.state.id ?
                                        <>
                                            <input
                                                value={this.state.currentInput}
                                                onChange={(e) =>
                                                    this.setState({ currentInput: e.target.value })
                                                }
                                            />
                                            <button onClick={() => this.saveToDo(value)}>Save</button>
                                        </>
                                        :
                                        <>
                                            <div>
                                                {value.id} - {value.toDo}
                                            </div>
                                            <span>
                                                <button onClick={() => this.editToDo(value)}>Edit</button>
                                            </span>
                                        </>
                                }<></>
                                <span><button onClick={() => this.deleteToDo(value)}>Delete</button></span>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default ToDoContent;

// {value.toDo} <></>
// <input value={value.toDo} />