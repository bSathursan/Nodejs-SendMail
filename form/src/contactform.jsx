import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Form extends React.Component {

    state={
        name:'',
        email:'',
        subject:'',
        message:'',
        sent:false
    }
    
     handleName=(e)=>{
         this.setState({
             name:e.target.value
         })
     }
     handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleSubject=(e)=>{
        this.setState({
            subject:e.target.value
        })
    }
    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }


    formSubmit=(e)=>{
        e.preventDefault();

        let data = {
            name:this.state.name,
            email:this.state.email,
            subject:this.state.subject,
            message:this.state.message
        }

        axios.post('/api/forma',data)
        .then(res=>{
            this.setState({
                sent:true,
            }.this.resetForm())
        }).catch(()=>{
            console.log('message not sent');
        })

    }

    resetForm=()=>{
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:''
        })

        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        },3000)

    }

    render() {
        return (
            <div><br />
                <h1 className="text-center">ContactUs</h1> <br /><br />
                <form onSubmit={this.formSubmit} method="POST"> 
                    <div className="container">
                        <div className="row">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" required value={this.state.name} onChange={this.handleName} />
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" required value={this.state.email} onChange={this.handleEmail} />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" class="form-control" id="subject" required value={this.state.subject} onChange={this.handleSubject} />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea type="text" class="form-control" id="message" row="1" required value={this.state.message} onChange={this.handleMessage} ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;
