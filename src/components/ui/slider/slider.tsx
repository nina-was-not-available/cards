import * as Slider from '@radix-ui/react-slider';
import s from './slider.module.scss'
import {useState} from "react";
import {Typography} from "@/components/ui/typography";
// import {Slider, SliderThumb} from '@radix-ui/react-slider';


const SliderDemo = () => {

    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(10);

    const handleValue1Change = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    };

    return (
        <form className={s.sliderContainer}>
            <span className={s.value}><Typography variant={'body1'}>{value1}</Typography></span>
            <Slider.Root className={s.SliderRoot} max={10} step={1} defaultValue={[value1, value2]}
                         onValueChange={handleValue1Change}>
                <Slider.Track className={s.SliderTrack}>
                    <Slider.Range className={s.SliderRange}/>
                    <Slider.Range className={s.SliderRange}/>
                </Slider.Track>
                <Slider.Thumb className={s.SliderThumb}
                              aria-label="Volume" defaultValue={value1}/>
                <Slider.Thumb className={s.SliderThumb}
                              aria-label="Volume" defaultValue={value2}/>
            </Slider.Root>
            <span className={s.value}><Typography variant={'body1'}>{value2}</Typography></span>
        </form>
    );
}

export default SliderDemo;
