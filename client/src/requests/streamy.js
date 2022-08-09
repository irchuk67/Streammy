import axios from 'axios';

const streamy = axios.create({
    baseURL: ' http://localhost:3001'
});

const createStream = async (formValues, userId) => await streamy.post('/streams', {...formValues, userId});
const updateStream = async (updatedStream, previousStream) => await streamy.put(`/streams/${previousStream.id}`, {...previousStream, ...updatedStream});
const deleteStream = async (streamId) => await streamy.delete(`/streams/${streamId}`);
const getStream = async (streamId) => await streamy.get(`/streams/${streamId}`);
const getAllStreams = async () => await streamy.get('/streams')

export {createStream,updateStream, deleteStream, getAllStreams, getStream}
