import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App(handleDelete) {
	const [feedback, setFeedback] = useState(FeedbackData);

	// this function is fed up from FeedbackItem which feeds it up to feedbackList which then feeds it up to App and fires off the function below
	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete this project?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}	
}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
