import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutScreen from './screens/AboutScreen';
import AboutIconLink from './components/AboutIconLink';

function App(handleDelete) {
	const [feedback, setFeedback] = useState(FeedbackData);

	// this function is fed up from FeedbackItem which feeds it up to feedbackList which then feeds it up to App and fires off the function below
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this project?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		console.log(newFeedback);
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
								<>
									<AboutIconLink />
								</>
							</>
						}
					></Route>
					<Route path='/about' element={<AboutScreen />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
