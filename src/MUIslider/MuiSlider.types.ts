

export interface MuiSliderProps {

}

export interface MuiSliderState {
    marks: {
        value: number,
        label: string;
    }[];
    sliderValue: number | number[];
}