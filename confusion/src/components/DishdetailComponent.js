import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>                            
                </CardBody>
            </Card>
            );
        }else{
            return(<div></div>);
        }
    }

    renderComments(comments){
        if(comments != null){
            const list = comments.map((co)=>{
                return(
                    <div key={co.id}>
                        <p>{co.comment}</p>
                        <p>--{co.author}, <span>{new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(co.date))}</span></p>
                    </div>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <div>{list}</div>
                </div>
            );
        }else{
            return(<div></div>);            
        }
    };

    render(){                        
        return this.props.selected ? (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selected)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selected.comments)}
                </div>                                                                           
            </div>
        ) : (<div></div>);
    };
}

export default DishDetails;