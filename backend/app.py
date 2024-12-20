from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/stations', methods=['GET'])
def get_stations():
    try:
        stations_url = "https://gbfs.bcycle.com/bcycle_madison/station_information.json"
        regions_url = "https://gbfs.bcycle.com/bcycle_madison/system_regions.json"
        stations_details_url = "https://gbfs.bcycle.com/bcycle_madison/station_status.json"
        
        stations_response = requests.get(stations_url)
        regions_response = requests.get(regions_url)
        stations_details_response = requests.get(stations_details_url)

        if not (stations_response.ok and regions_response.ok and stations_details_response.ok):
            return jsonify({"error": "Failed to fetch data from one or more APIs"}), 500

        regions_data_json = regions_response.json()
        stations_data_json = stations_response.json()
        stations_details_data_json = stations_details_response.json()

        regions_data = regions_data_json['data']['regions']
        stations_data = stations_data_json['data']['stations']
        stations_details_data = stations_details_data_json['data']['stations']

        stations_map = {station['station_id']: station for station in stations_details_data}

        filtered_regions = []

        for region in regions_data:
            filtered_stations = []

            for station in stations_data:
                if station.get('region_id') == region.get('region_id'):
                    station_details = stations_map.get(station['station_id'], {})
                    combined_station = {**station, **station_details}
                    filtered_stations.append(combined_station)

            if len(filtered_stations) > 0:
                filtered_regions.append({
                    'region_name': region['region_name'], 
                    'stations': filtered_stations
                })

        return jsonify(filtered_regions)

    except Exception as e:
        print("error234:", str(e))
        return jsonify({'error': str(e.data)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
