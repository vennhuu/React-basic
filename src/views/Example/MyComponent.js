import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    // giúp cập nhật dữ liệu mà k cần phải reload lại trang state là 1 obj
    state = {
        arrJob: [
            { id: "1", title: 'hehe', salary: '2000' },
            { id: "2", title: 'hihi', salary: '3000' },
            { id: "3", title: 'hoho', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        console.log("Check job from parent", job)
        this.setState({
            arrJob: [... this.state.arrJob, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJob
        })
    }

    // jsx chỉ có thể return 1 div có thể viết js trong thẻ div
    render() {
        console.log("call render", this.state);
        return (
            // ReactFragment có thể chứa 2 div hợp lệ
            <>
                <AddComponent
                    addNewJob={this.addNewJob}

                />
                <ChildComponent
                    deleteJob={this.deleteJob}
                    def={this.state.arrJob}
                />
            </>
        )
    }
}

export default MyComponent;