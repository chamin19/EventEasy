import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { BackEndTesting } from './pages/BackEndTesting';
import { BookingPage } from './pages/BookingPage';
import { PurchaseTicketPage } from './pages/PurchaseTicketPage';
import { EventCreationForm } from './pages/EventCreationForm';
import { EventCreationConfirmation } from './pages/EventCreationConfirmation';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage/>
                </Route>
                <Route path="/backend-testing">
                    <BackEndTesting/>
                </Route>
                <Route path="/booking">
                    <BookingPage/>
                </Route>
                <Route path="/purchase-tickets">
                    <PurchaseTicketPage/>
                </Route>
		<Route path="/eventCreation">
		    <EventCreationForm/>
		</Route>
 		<Route path="/eventCreationConfirmation">
		    <EventCreationConfirmation/>
		</Route>
            </Switch>
        </Router>
    )
}

export default Routes;