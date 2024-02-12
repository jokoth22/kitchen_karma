import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_DAY } from '../../utils/mutations'; // Import your mutation file
import DayComponent from '../DayComponent';

// Import your GraphQL query to fetch days
import { GET_DAY } from '../../utils/queries'; 

const MealsComponent = () => {
    const [addDay] = useMutation(ADD_DAY);
    const { loading, error, data } = useQuery(GET_DAY); // Use your query to fetch days

    const handleAddDay = async () => {
        try {
            const dayName = prompt('Enter a name for the new day:');
            if (!dayName) return;

            const { data: addDayData } = await addDay({
                variables: {
                    name: dayName
                }
            });
            console.log('New Day Added:', addDayData.addDay);
        } catch (error) {
            console.error('Error adding day:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Days</h1>
            <button onClick={handleAddDay}>Add Day</button>
            <div>
                {data.days.map(day => (
                    <DayComponent key={day._id} day={day} />
                ))}
            </div>
        </div>
    );
};

export default MealsComponent;
