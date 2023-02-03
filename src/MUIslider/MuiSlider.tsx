import React from 'react';
import {Grid, Slider} from "@mui/material";
import {MuiSliderProps, MuiSliderState} from "./MuiSlider.types";

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
            ]
        }
    }

    handleChangeSlider = (_: Event, value: number | number[]) => {
        console.log(value);
    }

    render() {
        return (
            <>
                <Grid>
                    ciao
                </Grid>

                <Slider
                    track={false}
                    aria-labelledby="track-false-range-slider"
                    defaultValue={[25, 50, 75]}
                    onChange={this.handleChangeSlider}
                    marks={this.state.marks}
                />
            </>
        )
    }
}

export default MuiSlider;