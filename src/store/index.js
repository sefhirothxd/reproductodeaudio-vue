import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import VueAxios from 'vue-axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		canciones: [],
		cancion: {} && {
			album: {
				cover_medium:
					'https://aclesdonorionelosangeles.github.io/img/avatar.jpg',
			},
			title: 'desconocido',
			artist: {
				name: 'Jhon doe',
			},
			artista: {
				name: 'Jhon doe',
				nb_fan: 1000,
			},
		},
		isPlaying: false,
		player: new Audio(),
		volume: 0.5,
		siguiente: '',
		anterior: '',
	},
	mutations: {
		SELECCIONAR_CANCION(state, payload) {
			console.log(payload);
			state.cancion = payload;
			state.player.pause();
			state.isPlaying = false;
		},
		SIGUIENTE_CANCION(state, payload) {
			let indice = 0;
			state.canciones.forEach((element, index) => {
				element.id === payload ? (indice = index + 1) : -1;
			});
			if (indice >= 0 && indice <= state.canciones.length - 1) {
				// console.log(indice);
				const probando = state.canciones[indice];
				this.dispatch('seleccionarCancion', probando);
			} else {
				alert('el fin de la lista');
				// return;
			}
			// console.log(probando);
		},
		ANTERIOR_CANCION(state, payload) {
			let indice = 0;
			state.canciones.forEach((element, index) => {
				element.id === payload ? (indice = index - 1) : -1;
			});
			if (indice >= 0 && indice <= state.canciones.length - 1) {
				console.log(indice);
				const probando = state.canciones[indice];
				this.dispatch('seleccionarCancion', probando);
			} else {
				alert('el fin de la lista');
				// return;
			}
			// console.log(probando);
		},
		OBTENER_CANCIONES(state, payload) {
			console.log(payload);
			state.canciones = payload;
		},

		DALE_PLAY(state, payload) {
			state.isPlaying = payload;
			state.player.src = state.cancion.preview;
			state.player.play();
		},
		DALE_PAUSE(state, payload) {
			state.isPlaying = payload;
			state.player.pause();
		},
		VOLUMEN_CONTROLLER(state, payload) {
			state.player.volume = payload;
			state.volume = payload;
			console.log(state.player.volume);
		},
		VOLUMEN_BUTTON(state, payload) {
			state.player.volume = 0.1;
			state.volume = 0.1;
			console.log(state.player.volume);
		},
	},
	actions: {
		seleccionarCancion({ commit }, payload) {
			axios
				.get(
					`https://pure-stream-06458.herokuapp.com/https://api.deezer.com/artist/${payload.artist.id}`
				)
				.then((res) => {
					const fusionar = { ...payload, artista: res.data };
					// return res.data;
					commit('SELECCIONAR_CANCION', fusionar);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		buscarCancion({ commit }, payload) {
			axios
				.get(
					`https://pure-stream-06458.herokuapp.com/https://api.deezer.com/search?q=${payload}`
				)
				.then((res) => {
					// return res.data;
					commit('OBTENER_CANCIONES', res.data.data);
				})
				.catch((e) => {
					console.log(e);
				});
		},
		siguienteCancion({ commit }, payload) {
			commit('SIGUIENTE_CANCION', payload);
		},
		anteriorCancion({ commit }, payload) {
			commit('ANTERIOR_CANCION', payload);
		},

		play({ commit }, payload) {
			commit('DALE_PLAY', payload);
		},
		pause({ commit }, payload) {
			commit('DALE_PAUSE', payload);
		},
		subirBajar({ commit }, payload) {
			commit('VOLUMEN_CONTROLLER', payload);
		},
	},
	getters: {
		canciones: (state) => state.canciones,
	},
	modules: {},
});
