const heroku_url_buildings = "https://pacific-shelf-27750.herokuapp.com/api";
const heroku_url_rooms = heroku_url_buildings + "/rooms";

const req = new Vue({
    el: '#app',
    data: {
        rooms: [],
        selectedRoom: 0,
		buildings : [],
		selectedBuilding : 0
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
    }
})

