To initialize the project, simply open the project folder in your text editor and run the following command in the terminal:
docker-compose up --build
Project Description
This project consists of a backend responsible for fetching and processing the necessary data and a frontend for visually interacting with the information.

In the backend, the main process involves:

Data Retrieval:

Data is collected from different sources or endpoints, including regions and stations.
Data Processing:

A new array is created where each region contains a list of stations that match its region_id.
Each station is then enriched with additional details retrieved from another endpoint.
This results in a single consolidated array that includes all the necessary information, organized by region.
Sending to the Frontend:

Once the data is processed, it is exposed in a clean and structured format to be used by the frontend.

In the frontend:

Region-Based Visualization:

Users can select a region to view all the associated stations.
Station Details:

Upon selecting a station, a map displays its location along with additional details about the station.
