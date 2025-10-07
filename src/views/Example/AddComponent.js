import React from "react";
import ChildComponent from "./ChildComponent";
class AddComponent extends React.Component {
    // giúp cập nhật dữ liệu mà k cần phải reload lại trang state là 1 obj
    state = {
        title: '',
        salary: '',
        inputtitle: '',
        inputsalary: '',
    }


    handleChangetitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        });
    }

    handleClick = () => {
        this.setState({
            inputtitle: this.state.title,
            inputsalary: this.state.salary
        })
        if (!this.state.title || !this.state.salary) {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        else {
            const { arrJob } = this.props;
            console.log("Check data", this.state)
            this.props.addNewJob({
                id: Math.floor(Math.random() * 1000),
                title: this.state.title,
                salary: this.state.salary
            })
        }
        this.setState({
            title: '',
            salary: ''
        })
    }
    // jsx chỉ có thể return 1 div có thể viết js trong thẻ div
    render() {
        return (
            <>
                <form>
                    <label>Job's title : </label> <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangetitle(event)} /><br />
                    <label>Salary : </label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} /><br />
                    <button type="button" onClick={() => this.handleClick()}>Submit</button>
                </form>
                <form>
                    <label>In4 của bạn : </label> <br />
                    {/* <span>{this.state.inputtitle} {this.state.inputsalary}</span> */}
                </form>


            </>
        )

    }

}

export default AddComponent;