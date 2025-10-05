import React from "react";

class MyComponent extends React.Component {

    // giúp cập nhật dữ liệu mà k cần phải reload lại trang state là 1 obj
    state = {
        name: 'Phuoc',
        age: 21
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClick = () => {
        alert("Bạn đã click")
    }
    // jsx chỉ có thể return 1 div có thể viết js trong thẻ div
    render() {
        let name = "Phuoc"
        return (
            // ReactFragment có thể chứa 2 div hợp lệ
            <>
                <div className="firstName">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleChange(event)} />
                    Hello {this.state.name} from QB
                </div>
                <div className="firstName">
                    {console.log("Hello")}
                    Hello {this.state.age} is my age
                </div>
                <div>
                    <button onClick={() => this.handleClick()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;