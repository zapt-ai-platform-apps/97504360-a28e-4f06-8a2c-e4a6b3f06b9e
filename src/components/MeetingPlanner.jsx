import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import MeetingForm from './MeetingForm';

export default function MeetingPlanner() {
  const [locations, setLocations] = useState(['', '']);
  const [loading, setLoading] = useState(false);
  const [meetingPoint, setMeetingPoint] = useState(null);
  const [error, setError] = useState(null);

  const handleLocationChange = (index, value) => {
    const newLocations = [...locations];
    newLocations[index] = value;
    setLocations(newLocations);
  };

  const addLocation = () => {
    setLocations([...locations, '']);
  };

  const removeLocation = (index) => {
    if (locations.length > 2) {
      setLocations(locations.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMeetingPoint(null);
    setError(null);
    console.log('Submitting locations:', locations);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const midpoint = `Midpoint of ${locations.slice(0, 2).join(' and ')}`;
      setMeetingPoint(midpoint);
      console.log('Calculated meeting point:', midpoint);
    } catch (err) {
      console.error('Error calculating meeting point:', err);
      Sentry.captureException(err);
      setError('Failed to calculate meeting point. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MeetingForm
      locations={locations}
      loading={loading}
      meetingPoint={meetingPoint}
      error={error}
      onChange={handleLocationChange}
      onAdd={addLocation}
      onRemove={removeLocation}
      onSubmit={handleSubmit}
    />
  );
}