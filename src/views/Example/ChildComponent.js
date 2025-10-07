import React from "react";

// const ChildComponent = (props) => {
//     let { def } = props;
//     return (
//         // ReactFragment có thể chứa 2 div hợp lệ
//         <>
//             <div className="job-lists">
//                 {
//                     props.def.map((value, index) => {
//                         if (value.salary >= 2000) {
//                             return (
//                                 <div key={value.id}>
//                                     {value.title} - {value.salary}
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }
class ChildComponent extends React.Component {

    state = {
        showJob: false
    }
    handleShow = () => {
        console.log("Đã bấm nút");
        this.setState({
            showJob: true
        })
    }

    handleHide = () => {
        this.setState({
            showJob: false
        })
    }

    handleDelete = (job) => {
        console.log("Handle Click Job", job);
        this.props.deleteJob(job);
    }
    render() {
        let { def } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {
                    showJob === false ?
                        <div><button onClick={() => this.handleShow()}>Show</button></div>
                        :
                        <>
                            <div className="job-list">
                                {
                                    this.props.def.map((value, index) => {
                                        return (
                                            <>
                                                <div key={value.id}>
                                                    {value.title} - {value.salary}<></> <span onClick={() => this.handleDelete(value)}>x</span>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div><button onClick={() => this.handleHide()}>Hide</button></div>
                        </>

                }
            </>
        )
    }
}

export default ChildComponent;