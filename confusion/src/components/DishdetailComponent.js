import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component{
    constructor(props){
        super(props);
    }

    

    render(){                
        if(this.props.selected != null){
            let selected = this.props.selected;     
            let comments = this.props.selected.comments;

            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={selected.image} alt={selected.name}/>
                            <CardBody>
                                <CardTitle>{selected.name}</CardTitle>
                                <CardText>{selected.description}</CardText>                            
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments.map((co)=>{
                            return(
                                <div key={co.id}>
                                    <p>{co.comment}</p>
                                    <p>--{co.author}, <span>{new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(co.date))}</span></p>
                                </div>
                            );
                        })}       
                    </div>                                                                           
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    };
}

export default DishDetails;