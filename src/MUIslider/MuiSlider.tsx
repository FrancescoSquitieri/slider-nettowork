import React from 'react';
import {Box, Grid, Slider} from "@mui/material";
import {MuiSliderProps, MuiSliderState} from "./MuiSlider.types";

declare global {
    interface Array<T> {
        equals(array: Array<any>): boolean;
    }
}

Array.prototype.equals = function (array: Array<any>) {
    if (!array)
        return false;
    if(array === this)
        return true;
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
}
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

class MuiSlider extends React.Component<MuiSliderProps, MuiSliderState> {
    constructor(props: MuiSliderProps) {
        super(props);

        this.state = {
            marks: [
                {
                    label: '25%',
                    value: 25
                },
                {
                    label: '50%',
                    value: 50
                },
                {
                    label: '75%',
                    value: 75
                }
            ],
            sliderValue: [25, 50, 75]
        }
    }

    handleChangeSlider = (_: Event, value: number | number[]) => {
        console.log(value);
        if (!(this.state.sliderValue as Array<number>).equals(value as number[])) {
            console.log('non uguali');
            this.setState(prevState => ({
                ...prevState,
                sliderValue: value
            }))
        }
    }

    render() {
        return (
            <>
                <Box
                    height='100vh'
                    width='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Slider
                        track={false}
                        aria-labelledby="track-false-range-slider"
                        defaultValue={[25, 50, 75]}
                        onChange={this.handleChangeSlider}
                        marks={this.state.marks}
                    />
                </Box>
            </>
        )
    }
}

export default MuiSlider;