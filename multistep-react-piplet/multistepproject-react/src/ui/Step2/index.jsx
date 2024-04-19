import { useState, useEffect } from 'react';
import ProgressBar from "../ProgressBar/index";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';

function RenderProfil() {
    const [value, setValue] = useState('female');

    const handleChange = (ev) => {
        setValue(ev.target.value);
    };

    return (
        <>
            <div className="container-fluid text-start py-4 px-1">
                <div className="row">
                    <TextField className='col-6' id="standard-basic" label="Prénom/Nom" variant="standard" />
                    <TextField className='col-6' id="standard-basic" label="Pseudonyme" variant="standard" />
                    <TextField className='col-6' id="standard-basic" label="Date de naissance" variant="standard" />

                    <div className='col-6'>
                        <h4>Genre</h4>
                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="female" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }} />} label="Female" />
                                <FormControlLabel value="male" control={<Radio sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }} />} label="Male" />
                            </RadioGroup>
                        </FormControl>

                    </div>
                </div>
            </div>
        </>
    );
}

export default function FormStep1({ step, formData, setStep }) {


    const handleNextStep = () => {
        // Vous pouvez utiliser formData pour passer les données à l'étape suivante ou effectuer d'autres opérations nécessaires.
        console.log(formData);
        setStep(step + 1);
    };

    console.log(formData);
    return (
        <>
            <div>
                <h3 className='section__content_title'>Faisons Connaissance</h3>
                <p className='section__content_sous_title'>À qui a t-on à faire ?</p>
            </div>

            <RenderProfil />

            <ProgressBar step={step} handlenextstep={handleNextStep} />

        </>
    );
}