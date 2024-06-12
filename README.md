# CPS714-F2023

## Objective
The goal of this system is to help individuals and communities connect with one another and for event organizers to prepare for and host events with ease.

## Collaborators
- [Irmak](https://github.com/airmakyalcn)
- [Munevver](https://github.com/munevvercoskun)
- [Camillia Amin](https://github.com/chamin19)
- [Rudaba](https://github.com/rudabada)
- [Rahul](https://github.com/Rahuladams1)
- [Eddy](https://github.com/DynasDragon)
- Abdul
- [Hameedah](https://github.com/Hameedahadeshina)
- [Aisharja](https://github.com/Aisharja5) 
- [Hodo](https://github.com/hodoabdirizak)
- [Syed Abdul Wadood](https://github.com/4bdulWadood)
- [Hoang Vo](https://github.com/HoangVo-hnvo)

## Technologies Used
MSSQL, Amazon RDS, Express, React, Node.js

## Features
Our web application includes the following features:

### Events
The ability to create, read, update, and delete events. Each event will have a date and time, venue, description, capacity, attendee restrictions, and the ability to locate the venue in Google Maps. Each event will have the option of including tags and keywords, by which events can be filtered. 

### Venues & Catering
Event organizers will have the ability to select from a wide range of venues and catering options, depending on the purpose of their event, such as weddings, professional networking events, charity events, hobby-based conventions, workshops, conferences, cultural events, corporate events, and Job Fairs. 

### Invitations/Ticketing
Event organizers also have the option of making the event tickets free or paid; the amount of tickets/invites a person can book/purchase is up to the organizer. Each approved event will have the ability to classify their events as family-friendly or invitees must be of a specific age in order to attend. In order to ensure that invitees adhere to the organizers' restrictions the invitation will only be created after a thorough review of their profile. Invites will be in the form of a QR code (or some other sort of special text) and will be sent to the user’s email 
 
### Comment/Review/Feedback
After the completion of every event the customer will be asked to complete a form to comment on and rate the event execution, service, venue, food, and their overall experience. 

### Search events and vendors
The events are categorized based on specific topics and the categories, such as conferences, networking, workshops, charity, birthday, wedding events, etc., are shown. Each event has a unique hashtag attached to it. Users can either search for an event from the search bar or if they are not sure which event to attend then they can also navigate through the categories and pick from a list of events. The users can also search or filter events based on various criteria, for example, location, date, available seats, venue types, hashtags, etc. Keywords or phrases related to the events can also be used for searching, e.g. “tech conference in October”. These features are also applied in searching vendors. Searches can be done based on catering services, event planning, and location, within a specific range. Vendors can also be filtered based on their ratings and reviews. 

### Login
The ability to create an account and log into the event management system. In order to create an account in the event management system, they have to enter their name, last name, age, pronouns, email address, type of account (event organizer, participant), types of events they are interested in (optional to fill out), and password. If the account has been created already by the event management system it's going to show a message that the account has been created. If the users enter an  invalid email address, the system will show an error message and prompt the users to enter a valid email address. On the login page, there is an option if the users forget their password. Users can reset their passwords.

### User Roles
In this system, we will have four user roles this includes; organizer, attendees, approvers, and vendors. Each role is a key factor in this system as they will be the main users of this system and will keep the system alive. 

### Announcement/notifications
The system will send notifications to users who have signed up for an event to announce updates or notify the user that the event is nearing the current date. The event creator can also post announcements for users to receive regarding the upcoming event.

### Calendar System
Overlapping event warnings. If the user signs up for an event that has an overlapping time with another event that they are attending, a warning will be issued to confirm whether the user wants to continue or not. Once a user confirms their attendance at an event, the event will be added to their calendar for future viewing.
