import React from 'react';
import './ToyRobot.css';

enum Direction {
    North = "North",
    South = "South",
    East = "East",
    West = "West",
}

interface Position {
    row: number;
    col: number;
    dir?: string;
    maxRows?: number;
    maxCols?: number;
}

interface IState {
    maxRows: number;
    maxCols: number;
    position?: Position;
}

interface IProps {
    maxRows: number;
    maxCols: number;
}

const ApiUrl = {
    Place: '/api/toyrobot/place',
    Move: '/api/toyrobot/move',
    Left: '/api/toyrobot/left',
    Right: '/api/toyrobot/right',
}

export class ToyRobot extends React.Component<IProps, IState> {
    static displayName = ToyRobot.name;

    constructor(props) {
        super(props);

        this.state = {
            maxRows: this.props.maxRows,
            maxCols: this.props.maxCols,
            position: { row: 0, col: 0, dir: "", maxRows: this.props.maxRows, maxCols: this.props.maxCols } as Position,
        };
    }

    public RowChange = (e: any) => {

        console.log("Row change event : " + e.target.value);

        if (Number(e.target.value) >= 0) {

            let positionNew = this.state.position;
            positionNew.row = Number(e.target.value);
            this.fetchPlaceRobot(ApiUrl.Place, positionNew);
        } 
    }

    public ColumnChange = (e: any) => {

        console.log("Column change event : " + e.target.value);

        if (Number(e.target.value) >= 0) {
            let positionNew = this.state.position;
            positionNew.col = Number(e.target.value);
            this.fetchPlaceRobot(ApiUrl.Place, positionNew);
        }
    }

    public DirectionChange = (e: any) => {

        console.log("Selection change event : " + e.target.value);

        let positionNew = this.state.position;
        positionNew.dir = e.target.value;
        this.fetchPlaceRobot(ApiUrl.Place, positionNew);
        
    }
        

    public MoveOnChange = (e: any) => {

        let currentPosition = this.state.position;

        this.fetchPlaceRobot(ApiUrl.Move, currentPosition);

        //switch (currentPosition.dir) {
        //    case Direction.North:
        //        if (currentPosition.row < this.state.maxRows - 1)
        //        currentPosition.row++;
        //        break;
        //    case Direction.South:
        //        if (currentPosition.row > 0)
        //        currentPosition.row--;
        //        break;
        //    case Direction.East:
        //        if (currentPosition.col < this.state.maxCols - 1)
        //        currentPosition.col++;
        //        break;
        //    case Direction.West:
        //        if (currentPosition.col > 0)
        //        currentPosition.col--;
        //        break;
        //    default:
        //}

        //this.setState({
        //    position: currentPosition
        //});

    }

    public LeftOnChange = (e: any) => {

        let currentPosition = this.state.position;

        this.fetchPlaceRobot(ApiUrl.Left, currentPosition);

        //switch (currentPosition.dir) {
        //    case Direction.North:                
        //            currentPosition.dir = Direction.West;
        //        break;
        //    case Direction.South:
        //        currentPosition.dir = Direction.East;
        //        break;
        //    case Direction.East:
        //        currentPosition.dir = Direction.North;
        //        break;
        //    case Direction.West:
        //        currentPosition.dir = Direction.South;
        //        break;
        //    default:
        //}

        //this.setState({
        //    position: currentPosition
        //});
    }

    public RightOnChange = (e: any) => {
        let currentPosition = this.state.position;

        this.fetchPlaceRobot(ApiUrl.Right, currentPosition);

        //switch (currentPosition.dir) {
        //    case Direction.North:
        //        currentPosition.dir = Direction.East;
        //        break;
        //    case Direction.South:
        //        currentPosition.dir = Direction.West;
        //        break;
        //    case Direction.East:
        //        currentPosition.dir = Direction.South;
        //        break;
        //    case Direction.West:
        //        currentPosition.dir = Direction.North;
        //        break;
        //    default:
        //}

        //this.setState({
        //    position: currentPosition
        //});
    }

    public fetchPlaceRobot = (actionUrl: string, position: Position) => {

        let newPosition: Position = {} as Position;

        // validate position 

        fetch(actionUrl,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(position)
            })
            .then((resp) => resp.json())
            .then((data: Position) => {                
                console.log("FetchPlaceRobot Data : " + JSON.stringify(data));
                newPosition = data;
                this.setState({
                    position: newPosition
                })
            })
            .catch((err) => console.log("Error: FetchPlaceRobot - action : " + actionUrl + " " + JSON.stringify(err)));
        
        
    }
     
    public RenderRoboTable = (maxRows: number, maxCols: number, position?: Position) => {
            
        //console.log("Render robo table called positin... " + JSON.stringify(position));

        let rows: any = [];

        for (let r: number = 0; r < maxRows; r++) {

            let cols: any = [];

            for (let c: number = 0; c < maxCols; c++) {

                if (Number(position.row) === r &&  Number(position.col) === c) {

                    //console.log("position check = " + r + "," + c);

                    cols.push(
                        <div className="col" key={c}>
                            <div className="box d-flex flex-column justify-content-center align-items-center">
                                
                                {position.dir === Direction.North &&
                                    <i className="bi bi-box-arrow-up"></i>
                                }

                                {position.dir === Direction.South &&
                                    <i className="bi bi-box-arrow-down"></i>
                                }

                                {position.dir === Direction.East &&
                                    <i className="bi bi-box-arrow-right"></i>
                                }

                                {position.dir === Direction.West &&
                                    <i className="bi bi-box-arrow-left"></i>
                                }

                                {position.dir === "" &&
                                    <span className="empty-cell"></span>
                                }

                                <div className="align-self-end"><span>({r},{c})</span></div>

                            </div>
                        </div>
                    )
                } else {
                    //console.log("position = " + r + "," + c);
                    cols.push(
                        <div className="col" key={c}>
                            <div className="box d-flex flex-column justify-content-center align-items-center">                                
                                    <span className="empty-cell"></span>     
                                <div className="align-self-end"><span>({r},{c})</span></div>
                            </div>
                        </div>
                    )
                }
            }

            rows.push(
                <div className="row no-gutters" key={r}>
                    {cols}
                </div>
            )
        }

        return rows;

    }
      

    render() {        

        return (
            <div className="toyRobot">
                <div className="container">
                    <div className="row justify-content-center">North</div>
                    <div className="row g-1 align-items-center justify-content-center">
                        <div className="col-1">West</div>
                        <div className="col">

                            <div className="table-container d-flex flex-column-reverse">
                                {this.RenderRoboTable(this.state.maxRows, this.state.maxCols, this.state.position)}
                            </div>

                        </div>
                        <div className="col-1">East</div>

                    </div>
                    <div className="row justify-content-center">South</div>
                </div>
                <div className="m-5"></div>
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-3">
                            <label className="form-label">Place your Toy Robot: </label>
                        </div>
                        <div className="col-6">
                            <div className="input-group mb-3">
                                <input type="number" min="0" max={this.state.maxRows - 1} className="form-control" id="row" value={this.state.position.row || 0} onChange={this.RowChange} placeholder="row" aria-describedby="basic-addon3" />
                                <input type="number" min="0" max={this.state.maxCols - 1} className="form-control" id="col" value={this.state.position.col || 0} onChange={this.ColumnChange} placeholder="col" aria-describedby="basic-addon3" />
                                <select className="form-select" id="direction" value={this.state.position.dir} onChange={this.DirectionChange}>
                                    <option value="">Choose...</option>
                                    <option value="North">North</option>
                                    <option value="South">South</option>
                                    <option value="East">East</option>
                                    <option value="West">West</option>
                                </select>                                
                            </div>
                        </div>
                        <div className="col-2">                            
                        </div>
                    </div>
                    <div className="row gx-5 justify-content-start align-items-center">
                        <div className="col-3">
                            <label className="form-label">Commands :</label> 
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary mb-3" type="button" onClick={this.MoveOnChange} id="btn-move">Move</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary mb-3" type="button" onClick={this.LeftOnChange} id="btn-left">Left</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary mb-3" type="button" onClick={this.RightOnChange} id="btn-right">Right</button>
                        </div>                        
                        <div className="col-auto">
                            {this.state.position.row >= 0 && this.state.position.col >= 0 && (this.state.position.dir !== undefined && this.state.position.dir.toString() !== "") &&
                                <label className="form-label">Report : Row {this.state.position.row}, Col {this.state.position.col}, Direction {this.state.position.dir}</label>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
