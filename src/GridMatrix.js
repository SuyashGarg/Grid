import { Component } from "react";

import { Grid} from '@mui/material';
import './GridMatrix.css';

class GridMatrix extends Component {
    constructor() {
        super();
        this.state = {
            matrix: new Array(16),
            slectedIndx: []
        }
    }

    handleClick = (index, event) => {
        event.preventDefault();

        let _temp = [...this.state.slectedIndx];
        if(_temp.length === 2) {
            _temp.shift();
        }
        _temp.push(index);
        this.setState({
            slectedIndx:_temp
        });
    }

    isSelected = (index) => {
        return this.state.slectedIndx.filter(a => a === index).length ? true : false;
    }

    componentDidMount() {
        let _temp = [];
        for(let i=0; i<16;i++) {
            _temp.push(i);
        }
        this.setState({
            matrix :_temp
        });
    }
    render() {
        return (
            <div className="row">
                <Grid container spacing={3} className="container">
                    {this.state.matrix.map((item,index) => (
                        <Grid className={`grid ${this.isSelected(index)?'selected': ''}`} item xs={3} onClick={(e) => this.handleClick(index,e)}></Grid>
                    ))}
                </Grid>
                
            </div>
        )
    }
}

export default GridMatrix;