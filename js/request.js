const heroku_url_rooms = "https://pacific-shelf-27750.herokuapp.com/api/rooms";
const heroku_url_buildings = "https://pacific-shelf-27750.herokuapp.com/api/building";

const req = new Vue({
    el: '#app',
    data: {
        rooms: [],
        selectedRoom: 0,
		buildings: [],
		selectedBuilding: "EF",
    },
    mounted() {
        axios.get(heroku_url_rooms)
            .then(response => {this.rooms = response.data});
		axios.get(heroku_url_buildings)
			.then(response => {this.buildings = response.data});
    },
    methods: {
        switchLight(room) {
            this.selectedRoom = room;
            let post_url = heroku_url_rooms + "/" + room.id + "/switch/light/list";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
            },
        switchRinger(room) {
            this.selectedRoom = room;
            let post_url = heroku_url_rooms + "/" + room.id + "/switch/ringer/list";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
        },
		
		switchLight2(room_id) {
			this.selectedRoom = room_id;
            let post_url = heroku_url_rooms + "/" + room_id + "/switch/light/list";
            axios.post(post_url, {roomId: room_id})
                .then(response => {this.rooms = response.data});
            },
		switchRinger2(room_id) {
            this.selectedRoom = room_id;
            let post_url = heroku_url_rooms + "/" + room_id + "/switch/ringer/list";
            axios.post(post_url, {roomId: room_id})
                .then(response => {this.rooms = response.data});
        },
		
		getBuilding(building_name){
			for (building of this.buildings) {
				if(building.name == building_name){
					return building
					break;
					}
			}
			return[-1,0,0]
		},
		
		isInBuilding(building,room_id){
			rooms=[]
			for(i in building.rooms){
				rooms.push(building.rooms[i]);
			}
			for (room of rooms){
				if(room.id == room_id){
					return true;
					break;
				}
			}
			return false;
		},
		isInSelectedBuilding(room_id){
			var building = this.getBuilding(this.selectedBuilding);
			a = this.isInBuilding(building,room_id);
			return a;
		},
		
    }

})

