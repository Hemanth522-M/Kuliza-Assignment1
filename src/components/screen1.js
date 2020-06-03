import React,{useEffect} from 'react';

import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Header from './header';

export default function Screen1() {

	const [state, setState] = React.useState({
		checkedA: false,
		optionValue: "0-100",
		time: [0]
	});

	const sliderChange = (event, newValue) => {
		setState({ ...state, time: newValue});
	};
	
	const toggleChange = (event) => {
		let [X, Y] = state.optionValue.split("-");
		const y= (parseInt(X)+parseInt(Y));
		const midValue = y / 2;
		let g = midValue;
		if(state.time[0] === undefined) {
			setState({ ...state, checkedA: event.target.checked, time: [g] });
		}
		else {
			setState({
				...state, time: [g], checkedA: event.target.checked
			})
		}
	};
	
	const selectChange = (event) => {
		const [V, N] = event.target.value.split("-");
		const y= (parseInt(V)+parseInt(N));
		const midValue = y / 2;
		setState({ ...state, 
			[event.target.name]: event.target.value,
			time: [midValue]
		});
	};

	const timeout_trigger = () => {
		window.location.href="/screen2";
	}

	const handleSubmit = () => {
		let sec = state.time[0];
		if(state.checkedA === true && state.time[0] !== 0) {
			setTimeout(timeout_trigger(), sec);
		}
		else {
			window.location.href="/screen2";
		}
	}


	function valuetext(value) {	
		return `${value}`;
	}

	const [X, Y] = state.optionValue.split("-");
	useEffect(() => {
		if(state.optionValue){
			const [X, Y] = state.optionValue.split("-");
			const y= (parseInt(X)+parseInt(Y));
			const midValue = y / 2;
			setState({
				...state, time: [midValue]
			})
		}
	}, []);

	const marks = [
		{
		  value: parseInt(X),
		  label: `${parseInt(X)} s`,
		},
		{
		  value: parseInt(Y),
		  label: `${parseInt(Y)} s`,
		},
	];

      return(
        <div className="mainDiv">
            <Header />
            <div className="subDiv">
                <div className="left-div">
                    <span>Select the loading time range</span>
                    <br />
                    <span>(in seconds)</span>
                    <div className="selectDiv">
						<select className="select" onChange={selectChange} name="optionValue">
	  						<option value="0-100">0-100</option>
							<option value="100-200">100-200</option>
							<option value="200-500">200-500</option>
							<option value="500-1000">500-1000</option>
							<option value="1000-1500">1000-1500</option>
						</select>
                    </div>
                </div>
                <div className="rightDiv">
                    <span className="hSelect">Select a particular loading time</span>
					<div className="slider">
						<Slider
							value={state.time}
							min={parseInt(X)}
							max={parseInt(Y)}
							valueLabelDisplay="on"
							marks={marks}
							getAriaValueText={valuetext}
							onChange={sliderChange}
						/>
					</div>
					<div className="switch">
						<Switch
							checked={state.checkedA}
							onChange={toggleChange}
							name="checkedA"
							color="primary"
						/>
						&nbsp;
						<span>Enable the loading time as selected on slider</span>
					</div>
                </div>
            </div>
			<div className="button">
				<button className="submit" onClick={handleSubmit}>submit</button>
			</div>
        </div>
      )
  }


