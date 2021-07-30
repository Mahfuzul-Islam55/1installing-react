import { FormControl, NativeSelect } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
const CountryPicker = (props) => {

    const fetchedCountryData=props.countryData;

    return (
        <Fragment>
            <FormControl className="center">
                <NativeSelect defaultValue="" onChange={(e)=>props.handleChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountryData.map((country,i)=><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </Fragment>
    );
};

export default CountryPicker;