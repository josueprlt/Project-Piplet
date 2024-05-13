import { useState, useEffect, useRef } from 'react';
import ProgressBar from "../ProgressBar/index";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { frFR } from '@mui/x-date-pickers/locales';

const theme = createTheme(
    {
        palette: {
            primary: { main: '#FF205B' },
        },
    },
    frFR, // use 'de' locale for UI texts (start, next month, ...)
);

function TextFieldWithValidation({ id, label, value, onChange, error }) {
    const inputRef = useRef(null);

    useEffect(() => {
        // Mettre le focus sur l'input si une valeur est présente
        if (value) {
            inputRef.current.focus();
        }
    }, [value]);

    return (
        <div className="col-md-6 pe-1 col-sm-12 pt-sm-3">
            <ThemeProvider theme={theme}>
                <TextField
                    className='w-327'
                    id={id}
                    label={label}
                    variant="standard"
                    value={value}
                    onChange={onChange}
                    inputRef={inputRef} // Référence à l'élément input
                />
            </ThemeProvider>
            {id === "standard-basic-pseudonyme" && <p className="text-body fs-6 fst-italic">*@, !, $, % interdits et 30 caractères max</p>}
            {error && <p className="text-danger fs-6">{error}</p>}
        </div>
    );
}

function DateLabelField({ value, onChange, error }) {
    // Fonction de gestion du changement de la date
    const handleDateChange = (date) => {
        onChange(date); // Appel de la fonction onChange passée en tant que prop avec la nouvelle valeur (un objet Date)
    };

    return (
        <div className='col-md-6 pe-1 col-sm-12 pt-sm-3'>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateField label="Date de naissance" value={value} onChange={handleDateChange} format="DD/MM/YYYY" disableFuture />
                    {error && <p className="text-danger fs-6">{error}</p>}
                </LocalizationProvider>
            </ThemeProvider>
        </div>
    );
}

function RenderCategories({ isChecked, setIsChecked }) {
    const categories = [
        { label: "Écrit en prose" },
        { label: "Écrit en rime" },
        { label: "Écrit d'un trait" },
        { label: "Peu importe" }
    ];

    const handleCheckboxClick = (index) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };

    return (
        <div className='row'>
            {categories.map((category, index) => (
                <div className="col-auto" key={index}>
                    <p
                        className={`px-2 user-select-none ${isChecked[index] ? 'bg-info border border-secondary rounded-pill' : ''}`}
                        onClick={() => handleCheckboxClick(index)}
                    >
                        {category.label}
                    </p>
                </div>
            ))}
        </div>
    );
}

function RenderGenre({ genre, setGenre }) {

    const handleChange = (ev) => {
        setGenre(ev.target.value);
    };

    return (
        <>
            <div className='col-md-6 col-sm-12 pt-4'>
                <FormControl>
                    <span className=''>Genre</span>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={genre}
                        onChange={handleChange}
                    >
                        <div className="d-flex flex-wrap row">
                            <FormControlLabel className='col-auto me-0' value="homme" control={<Radio sx={{
                                color: '#FF205B',
                                '&.Mui-checked': {
                                    color: '#FF205B',
                                },
                            }} />} label="Homme" />

                            <FormControlLabel className='col-auto me-0' value="femme" control={<Radio sx={{
                                color: '#FF205B',
                                '&.Mui-checked': {
                                    color: '#FF205B',
                                },
                            }} />} label="Femme" />

                            <FormControlLabel className='col-auto me-0' value="nonbinaire" control={<Radio sx={{
                                color: '#FF205B',
                                '&.Mui-checked': {
                                    color: '#FF205B',
                                },
                            }} />} label="Non Binaire" />

                            <FormControlLabel className='col-auto me-0' value="nesouhaitepasrepondre" control={<Radio sx={{
                                color: '#FF205B',
                                '&.Mui-checked': {
                                    color: '#FF205B',
                                },
                            }} />} label="Ne souhaite pas répondre" />
                        </div>
                    </RadioGroup>
                </FormControl>

            </div>
        </>
    );
}

function RenderProfil({ formData, setFormData, ...props }) {

    const handlerName = (ev) => {
        props.setNameUser(ev.target.value);
    };

    const handlerPseudo = (ev) => {
        props.setPseudonymeUser(ev.target.value);
    };

    const handlerDate = (date) => {
        props.setDateOfBirth(date); // Mise à jour de l'état avec la nouvelle valeur de date
    };

    return (
        <div className="container text-start py-4 px-0">
            <div className='row'>
                <TextFieldWithValidation id="standard-basic" label="Prénom/Nom" value={props.nameUser} onChange={handlerName} error={props.NameError} />
                <TextFieldWithValidation id="standard-basic-pseudonyme" label="Pseudonyme" value={props.pseudoUser} onChange={handlerPseudo} error={props.PseudoError} />
            </div>

            <div className='row pt-md-3 pt-sm-0'>
                <DateLabelField value={props.dateUser} onChange={handlerDate} error={props.DateOfBirthError} />

                <RenderGenre {...props} />
            </div>

            <div className="row pt-4">
                <div className='col-md-6 col-sm-12'>
                    <p className='fw-bold'>J’estime mon niveau en français à :</p>
                    <Stack spacing={1}>
                        <Rating
                            name="half-rating"
                            value={props.ratingValue}
                            onChange={(event, newValue) => props.setRatingValue(newValue)}
                            defaultValue={2}
                            precision={0.5}
                            size='large'
                        />
                    </Stack>
                </div>
                <div className="col-md-6 col-sm-12">
                    <p className='fw-bold'>Plutôt intéressé par :</p>
                    <RenderCategories {...props} />
                </div>
            </div>
        </div>
    );
}

export default function FormStep2({ step, formData, setFormData, setStep }) {
    const [nameError, setNameError] = useState('');
    const [pseudoError, setPseudoError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');

    const [nameUser, setNameUser] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [PseudonymeUser, setPseudonymeUser] = useState(null);
    const [genre, setGenre] = useState('homme');
    const [isChecked, setIsChecked] = useState([true, false, false, false]);
    const [ratingValue, setRatingValue] = useState(2);

    const props = {
        formData: formData,
        setFormData: setFormData,
        genre: genre,
        setGenre: setGenre,
        isChecked: isChecked,
        setIsChecked: setIsChecked,
        ratingValue: ratingValue,
        setRatingValue: setRatingValue,
        nameUser: nameUser,
        pseudoUser: PseudonymeUser,
        dateUser: dateOfBirth,
        setNameUser: setNameUser,
        setPseudonymeUser: setPseudonymeUser,
        setDateOfBirth: setDateOfBirth,
        NameError: nameError,
        PseudoError: pseudoError,
        DateOfBirthError: dateOfBirthError
    };

    const handleNextStep = () => {
        setFormData({ ...formData, userName: props.nameUser, userPseudonyme: props.pseudoUser, userDateOfBirth: props.dateUser, userGenre: props.genre, userFrench: props.ratingValue, interests: props.isChecked });
        let isValid = true;

        if (!props.nameUser) {
            setNameError('❌ Veuillez indiquer votre nom.');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!props.pseudoUser) {
            setPseudoError('❌ Veuillez indiquer votre pseudonyme.');
            isValid = false;
        }
        else if (props.pseudoUser.length > 30) {
            setPseudoError('❌ Le pseudonyme est trop long.');
            isValid = false;
        }
        else if (/[!@\$%]/.test(props.pseudoUser)) {
            setPseudoError('❌ Caractères spéciaux pas autorisés.');
            isValid = false;
        }
        else {
            setPseudoError('');
        }

        if (!props.dateUser) {
            setDateOfBirthError('❌ Veuillez indiquer votre date de naissance.');
            isValid = false;
        } else {
            // Vérification si la date de naissance est antérieure à la date actuelle
            const currentDate = new Date();
            const selectedDate = new Date(props.dateUser);
            if (selectedDate > currentDate) {
                setDateOfBirthError('❌ La date de naissance ne peut pas être dans le futur.');
                isValid = false;
            } else {
                setDateOfBirthError('');
            }
        }

        if (isValid) {
            setStep(step + 1);
        }
    };

    const handleBackStep = () => {
        setFormData({ ...formData, userName: props.nameUser, userPseudonyme: props.pseudoUser, userDateOfBirth: props.dateUser, userGenre: props.genre, userFrench: props.ratingValue, interests: props.isChecked });

        setStep(step - 1);
    };

    useEffect(() => {
        if (formData.userName !== null) {
            setNameUser(formData.userName);
        }

        if (formData.userPseudonyme !== null) {
            setPseudonymeUser(formData.userPseudonyme);
        }

        if (formData.userDateOfBirth !== null) {
            setDateOfBirth(formData.userDateOfBirth);
        }

        if (formData.userFrench !== 2) {
            setRatingValue(formData.userFrench || 2);
        }

        if (formData.userGenre !== 'homme') {
            setGenre(formData.userGenre || 'homme');
        }

        if (formData.interests !== undefined) {
            setIsChecked(formData.interests);
        }   

    }, [formData]);

return (
    <>
        <div>
            <h3 className='fs-5 text-uppercase'>Faisons Connaissance</h3>
            <p>À qui a-t-on à faire ?</p>
        </div>

        <RenderProfil {...props} />

        <ProgressBar step={step} handlenextstep={handleNextStep} handlebackstep={handleBackStep} />
    </>
);
}