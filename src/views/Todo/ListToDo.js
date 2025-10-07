import React from "react";
import ToDoContent from "./ToDoContent";
import AddToDo from "./AddToDo";
import { ToastContainer, toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        listToDo: [
            { id: 1, toDo: 'Doing HomeWork' },
            { id: 2, toDo: 'Making video' },
            { id: 3, toDo: 'Fixing Bug' },
        ]
    }

    addToDo = (toDo) => {
        console.log("Add to do hihi")
        this.setState({
            listToDo: [...this.state.listToDo, toDo]
        })
        toast.success("Wow so easy!")
    }

    editToDo = (toDo) => {
        let currentToDo = this.state.listToDo;
        let thisToDo = currentToDo.map(item => {
            if (item.id === toDo.id) {
                return item
            }
        })
    }

    saveToDo = (toDo) => {
        console.log("Edit Todo~~")
        let currentToDo = this.state.listToDo;
        let thisToDo = currentToDo.map(item => {
            if (item.id === toDo.id) {
                return toDo
            }
            return item
        })
        this.setState({
            listToDo: thisToDo
        })
    }

    delete = (toDo) => {
        console.log("Delete todo ahihi")
        let currentToDo = this.state.listToDo;
        currentToDo = currentToDo.filter(item => item.id !== toDo.id)
        this.setState({
            listToDo: currentToDo
        })
    }
    render() {

        console.log("listToDo", this.state)
        return (
            <>
                <div>List To Do with vennhuu</div>
                <AddToDo addToDo={this.addToDo} listToDo={this.state.listToDo} />
                <ToDoContent listToDo={this.state.listToDo} deleteToDo={this.delete} editToDo={this.editToDo} saveToDo={this.saveToDo} />
            </>
        )
    }
}

export default ListToDo;