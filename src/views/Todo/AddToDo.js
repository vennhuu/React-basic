import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        toDo: ''
    }

    handleChange = (event) => {
        this.setState({
            toDo: event.target.value
        })
    }
    addToDo = () => {

        if (!this.state.toDo) {
            toast.error("Vui lòng nhập đầy đủ thông tin")
        }
        else {
            const { listToDo } = this.props;
            this.props.addToDo({
                id: this.props.listToDo.length + 1,
                toDo: this.state.toDo
            })
        }
    }
    render() {
        return (
            <>
                <input type="text" value={this.state.toDo} onChange={(event) => this.handleChange(event)} /> <></> <span><button onClick={() => this.addToDo()}>Add</button></span>
            </>
        )
    }
}

export default AddToDo;